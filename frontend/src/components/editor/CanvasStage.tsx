import React, { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Rect, Group, Text, Transformer } from 'react-konva';
import Konva from 'konva';
import type { ShapeNode } from '../../lib/editorState';

interface CanvasStageProps {
  showGrid?: boolean;
  selectedId?: string | null;
  onSelect?: (id: string | null) => void;
}

export function CanvasStage({ showGrid = true, selectedId = null, onSelect }: CanvasStageProps) {
  const stageRef = useRef<Konva.Stage | null>(null);
  const transformerRef = useRef<Konva.Transformer | null>(null);
  const layerRef = useRef<Konva.Layer | null>(null);

  const [scale, setScale] = useState(1);
  const [history, setHistory] = useState<ShapeNode[][]>([]);
  const [future, setFuture] = useState<ShapeNode[][]>([]);
  const [nodes, setNodes] = useState<ShapeNode[]>(() => {
    return [
      {
        id: 'logo-bg',
        type: 'rect',
        x: 0,
        y: 0,
        width: 800,
        height: 720,
        fill: 'transparent',
        rotation: 0,
        z: 0,
      } as ShapeNode,
    ];
  });

  // selection handling
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handleMouseDown = (e: any) => {
      // clicked on empty area
      if (e.target === stage) {
        onSelect && onSelect(null);
        return;
      }

      const clickedOnTransformer = e.target.getParent() && e.target.getParent().className === 'Transformer';
      if (clickedOnTransformer) return;

      // find node id
      const shape = e.target.getAttr && e.target.getAttr('id');
      if (shape) onSelect && onSelect(shape);
    };

    stage.on('mousedown', handleMouseDown);
    return () => {
      stage.off('mousedown', handleMouseDown);
    };
  }, [onSelect]);

  useEffect(() => {
    if (!selectedId) {
      if (transformerRef.current) transformerRef.current.detach();
      layerRef.current && layerRef.current.batchDraw();
      return;
    }

    const stage = stageRef.current;
    if (!stage) return;

    const selectedNode = stage.findOne(`#${selectedId}`) as Konva.Node | null;
    if (selectedNode && transformerRef.current) {
      transformerRef.current.nodes([selectedNode as any]);
      layerRef.current && layerRef.current.batchDraw();
    }
  }, [selectedId]);

  const addText = () => {
    const id = `text-${Date.now()}`;
    const newNode: ShapeNode = {
      id,
      type: 'text',
      x: 80,
      y: 80,
      text: 'Your Brand',
      fontSize: 48,
      fontFamily: 'Inter',
      fill: '#111827',
      rotation: 0,
      z: nodes.length,
    } as ShapeNode;

    pushHistory();
    setNodes((n) => [...n, newNode]);
    setFuture([]);
  };

  const addShape = () => {
    const id = `shape-${Date.now()}`;
    const newNode: ShapeNode = {
      id,
      type: 'rect',
      x: 160,
      y: 160,
      width: 160,
      height: 160,
      fill: '#0ea5a1',
      rotation: 0,
      z: nodes.length,
    } as ShapeNode;

    pushHistory();
    setNodes((n) => [...n, newNode]);
    setFuture([]);
  };

  const pushHistory = () => {
    setHistory((h) => [...h, JSON.parse(JSON.stringify(nodes))]);
  };

  const undo = () => {
    setHistory((h) => {
      if (h.length === 0) return h;
      const last = h[h.length - 1];
      setFuture((f) => [JSON.parse(JSON.stringify(nodes)), ...f]);
      setNodes(last);
      return h.slice(0, -1);
    });
  };

  const redo = () => {
    setFuture((f) => {
      if (f.length === 0) return f;
      const next = f[0];
      setHistory((h) => [...h, JSON.parse(JSON.stringify(nodes))]);
      setNodes(next);
      return f.slice(1);
    });
  };

  const zoomIn = () => setScale((s) => Math.min(2, s + 0.1));
  const zoomOut = () => setScale((s) => Math.max(0.2, s - 0.1));

  // basic grid draw
  const Grid = () => {
    if (!showGrid) return null;
    const step = 20;
    const lines: JSX.Element[] = [];
    for (let i = 0; i < 800; i += step) {
      lines.push(<Rect key={`v-${i}`} x={i} y={0} width={1} height={720} fill="#e6e6e6" opacity={0.6} />);
    }
    for (let j = 0; j < 720; j += step) {
      lines.push(<Rect key={`h-${j}`} x={0} y={j} width={800} height={1} fill="#e6e6e6" opacity={0.6} />);
    }

    return <Group>{lines}</Group>;
  };

  return (
    <div className="w-full h-full relative">
      <div className="absolute left-3 top-3 z-20 flex gap-2">
        <button className="px-3 py-1 bg-white rounded shadow" onClick={addText}>Add text</button>
        <button className="px-3 py-1 bg-white rounded shadow" onClick={addShape}>Add shape</button>
        <button className="px-3 py-1 bg-white rounded shadow" onClick={undo}>Undo</button>
        <button className="px-3 py-1 bg-white rounded shadow" onClick={redo}>Redo</button>
        <button className="px-3 py-1 bg-white rounded shadow" onClick={zoomIn}>Zoom +</button>
        <button className="px-3 py-1 bg-white rounded shadow" onClick={zoomOut}>Zoom -</button>
      </div>

      <Stage
        width={800}
        height={720}
        scaleX={scale}
        scaleY={scale}
        ref={(ref) => (stageRef.current = ref)}
        style={{ background: 'transparent' }}
      >
        <Layer ref={(r) => (layerRef.current = r)}>
          <Grid />

          {nodes.map((node) => {
            if (node.type === 'rect') {
              return (
                <Rect
                  key={node.id}
                  id={node.id}
                  x={node.x}
                  y={node.y}
                  width={(node as any).width}
                  height={(node as any).height}
                  fill={(node as any).fill}
                  rotation={node.rotation}
                  draggable
                  onDragEnd={(e) => {
                    pushHistory();
                    setNodes((ns) => ns.map((n) => (n.id === node.id ? { ...n, x: e.target.x(), y: e.target.y() } : n)));
                  }}
                />
              );
            }

            if (node.type === 'text') {
              return (
                <Text
                  key={node.id}
                  id={node.id}
                  x={node.x}
                  y={node.y}
                  text={(node as any).text}
                  fontSize={(node as any).fontSize}
                  fontFamily={(node as any).fontFamily}
                  fill={(node as any).fill}
                  draggable
                  onDragEnd={(e) => {
                    pushHistory();
                    setNodes((ns) => ns.map((n) => (n.id === node.id ? { ...n, x: e.target.x(), y: e.target.y() } : n)));
                  }}
                />
              );
            }

            return null;
          })}

          <Transformer ref={(t) => (transformerRef.current = t)} rotateEnabled={true} />
        </Layer>
      </Stage>
    </div>
  );
}
