"use client";
import { Box, Popper, TextField } from "@mui/material";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect, useRef, useState } from "react";

const TiptapEditor: React.FC = () => {
  const editorRef = useRef<Editor | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (editorRef.current) return;

    const editor = new Editor({
      element: document.querySelector("#editor") as HTMLElement,
      extensions: [StarterKit],
      content: "<p>Hello World!</p>",
    });

    editor.on("selectionUpdate", ({ editor }) => {
      const { from, to } = editor.state.selection;
      if (from !== to) {
        const domRange = editor.view.domAtPos(from);
        setAnchorEl(domRange.node as HTMLElement);
      } else {
        setAnchorEl(null);
      }
    });

    editorRef.current = editor;

    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <Box>
      <div id="editor" />
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="bottom-start"
      >
        <Box sx={{ p: 1, border: "1px solid red", backgroundColor: "#fff" }}>
          <TextField label="Tooltip content" variant="outlined" size="small" />
        </Box>
      </Popper>
    </Box>
  );
};

export default TiptapEditor;
