import Konva from 'konva';

export async function exportToPNG(stage: Konva.Stage, options?: { scale?: number; background?: string | null }) {
  const scale = options?.scale ?? 2;
  const background = options?.background ?? null;

  const dataURL = stage.toDataURL({ pixelRatio: scale, mimeType: 'image/png' });
  return dataURL; // client can download or send to server
}

export function exportToSVG(stage: Konva.Stage) {
  const svg = stage.toSVG();
  return svg;
}

export async function exportToPDF(svg: string) {
  // lightweight: return svg (server or client can convert using jsPDF if needed)
  return svg;
}
