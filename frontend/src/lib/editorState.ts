export type ShapeNode =
  | ({
      id: string;
      type: 'rect';
      x: number;
      y: number;
      width: number;
      height: number;
      fill: string;
      rotation: number;
      z: number;
    })
  | ({
      id: string;
      type: 'text';
      x: number;
      y: number;
      text: string;
      fontSize: number;
      fontFamily: string;
      fill: string;
      rotation: number;
      z: number;
    });

export interface EditorState {
  nodes: ShapeNode[];
  selectedId: string | null;
  scale: number;
}
