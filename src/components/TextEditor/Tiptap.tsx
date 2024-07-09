"use client";

import { Box } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

type TTiptapProps = {
  value: string;
  onChange: any;
  placeholder?: string;
  isError?: boolean;
};

const Tiptap = ({
  value,
  onChange,
  placeholder = "",
  isError,
}: TTiptapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <Box>
      <Toolbar editor={editor} isError={isError} />
      <EditorContent
        editor={editor}
        style={{
          borderBottom: `1px solid ${isError ? red[700] : grey[400]}`,
          borderRight: `1px solid ${isError ? red[700] : grey[400]}`,
          borderLeft: `1px solid ${isError ? red[700] : grey[400]}`,
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
