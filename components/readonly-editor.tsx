"use client";

import type { PartialBlock, BlockNoteEditor } from "@blocknote/core";
import { BlockNoteViewRaw as BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

type ReadOnlyEditorProps = {
  initialContent?: string;
};

const ReadOnlyEditor = ({ initialContent }: ReadOnlyEditorProps) => {
  const initialBlocks = initialContent
    ? (JSON.parse(initialContent) as PartialBlock[])
    : undefined;

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialBlocks,
  });

  return (
    <BlockNoteView editor={editor} editable={false} sideMenu={false} slashMenu={false} />
  );
};

export default ReadOnlyEditor;


