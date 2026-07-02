# Logo Editor

This branch adds an initial implementation of a drag-and-drop logo editor using react-konva.

Files added:
- frontend/src/app/editor/page.tsx
- frontend/src/components/editor/*
- frontend/src/lib/editorState.ts
- frontend/src/utils/exporters.ts

Next steps:
- Integrate with Supabase to save project state and assets
- Add icon library and Google Fonts dynamic loading
- Implement more tools (gradients, snapping options, guides)
- Add export pipeline for PDF server-side conversions
