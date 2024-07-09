"use client";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import LinkIcon from "@mui/icons-material/Link";
import LinkOffIcon from "@mui/icons-material/LinkOff";
import { FormControl, MenuItem, Select, Stack } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { Editor } from "@tiptap/react";
import { useCallback, useState } from "react";

const Toolbar = ({
  editor,
  isError,
}: {
  editor: Editor | null;
  isError?: boolean;
}) => {
  const [heading, setHeading] = useState("normal");
  const iconStyle = {
    cursor: "pointer",
    fontSize: "22px",
    transition: "0.5 s all ease",
    "&:hover": { color: "primary.main" },
  };

  const setLink = useCallback(() => {
    if (editor) {
      const previousUrl = editor.getAttributes("link").href;
      const url = window.prompt("URL", previousUrl);

      // cancelled
      if (url === null) {
        return;
      }

      // empty
      if (url === "") {
        editor.chain().focus().extendMarkRange("link").unsetLink().run();

        return;
      }

      // update link
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        border: `1px solid ${isError ? red[700] : grey[400]}`,
        px: "12px",
        py: "8px",
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
      <FormatUnderlinedIcon
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleUnderline().run();
        }}
        sx={{
          ...iconStyle,
          color: editor.isActive("underline") ? "primary.main" : grey[600],
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
      <FormatQuoteIcon
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBlockquote().run();
        }}
        sx={{
          ...iconStyle,
          color: editor.isActive("blockquote") ? "primary.main" : grey[600],
        }}
      />
      <FormatListBulletedIcon
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run();
        }}
        sx={{
          ...iconStyle,
          color: editor.isActive("bulletList") ? "primary.main" : grey[600],
        }}
      />
      <FormatListNumberedIcon
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleOrderedList().run();
        }}
        sx={{
          ...iconStyle,
          color: editor.isActive("orderedList") ? "primary.main" : grey[600],
        }}
      />

      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: 120,
          borderRadius: "4px",
          pl: "6px",
        }}
      >
        <Select
          value={heading}
          onChange={(e) => {
            e.preventDefault();
            const value = e.target.value;
            setHeading(value);
            switch (value) {
              case "normal":
                editor.chain().focus().clearNodes().run();
                break;
              case "heading":
                editor.chain().focus().setHeading({ level: 2 }).run();
                break;
              case "subheading":
                editor.chain().focus().setHeading({ level: 4 }).run();
                break;

              default:
                break;
            }
          }}
          sx={{
            color: editor.isActive("heading") ? "primary.main" : "",
            "&:hover": {
              color: "primary.main",
            },
            "&:before": { borderBottom: "none" },
            "&:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "&:focus:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "& .MuiSelect-select:focus": {
              backgroundColor: "transparent",
            },
            "& .MuiSelect-select": {
              "&:focus": {
                backgroundColor: "transparent",
              },
            },
            "&:after": {
              borderBottom: "none",
            },
            "&:hover .MuiSelect-icon": {
              color: "primary.main",
            },
            "& .MuiSelect-icon": {
              color: editor.isActive("heading") ? "primary.main" : "",
            },
          }}
        >
          <MenuItem value="normal">Normal</MenuItem>
          <MenuItem value="heading">Heading</MenuItem>
          <MenuItem value="subheading">Subheading</MenuItem>
        </Select>
      </FormControl>

      {editor.isActive("link") ? (
        <LinkOffIcon
          sx={{
            ...iconStyle,
            color: editor.isActive("link") ? "primary.main" : "",
          }}
          onClick={() => editor.chain().focus().unsetLink().run()}
        />
      ) : (
        <LinkIcon onClick={setLink} sx={{ ...iconStyle }} />
      )}
    </Stack>
  );
};

export default Toolbar;
