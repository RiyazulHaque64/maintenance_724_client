"use client";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Editor } from "@tiptap/react";

const Toolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const iconStyle = {
    cursor: "pointer",
    fontSize: "22px",
    transition: "0.5 s all ease",
    "&:hover": { color: "primary.main" },
  };

  return (
    <Box
      sx={{
        border: `1px solid ${grey[400]}`,
        px: "12px",
        pt: "6px",
        borderRadius: "4px 4px 0px 0px",
      }}
    >
      <FormatBoldIcon
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        sx={{
          ...iconStyle,
          color: editor.isActive("bold") ? "primary.main" : grey[600],
        }}
      />
      <FormatItalicIcon
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        sx={{
          ...iconStyle,
          color: editor.isActive("italic") ? "primary.main" : grey[600],
        }}
      />
      <FormatStrikethroughIcon
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleStrike().run();
        }}
        sx={{
          ...iconStyle,
          color: editor.isActive("strike") ? "primary.main" : grey[600],
        }}
      />
    </Box>
  );
};

export default Toolbar;
