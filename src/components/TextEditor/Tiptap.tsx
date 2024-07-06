"use client";

import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

type TTiptapProps = {
  value: string;
  onChange: any;
  placeholder?: string;
};

const Tiptap = ({ value, onChange, placeholder = "" }: TTiptapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <Box>
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        style={{
          borderBottom: `1px solid ${grey[400]}`,
          borderRight: `1px solid ${grey[400]}`,
          borderLeft: `1px solid ${grey[400]}`,
          borderRadius: "0px 0px 4px 4px",
          padding: "12px",
          color: "#000000",
        }}
        className="editor-content"
      />
    </Box>
  );
};

export default Tiptap;
