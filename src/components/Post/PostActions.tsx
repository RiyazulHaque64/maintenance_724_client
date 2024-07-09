"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, Stack } from "@mui/material";
import { green, indigo, red } from "@mui/material/colors";
import { Dispatch, SetStateAction } from "react";

type TPostActionsProps = {
  params: any;
  rowId: string;
  setRowId: Dispatch<SetStateAction<string>>;
};
const PostActions = ({ params, rowId, setRowId }: TPostActionsProps) => {
  return (
    <Stack direction="row" alignItems="center">
      <IconButton
        sx={{
          color: green[500],
          "&:hover": { bgcolor: green[100], color: green[700] },
        }}
      >
        <VisibilityIcon />
      </IconButton>
      <IconButton
        sx={{
          color: indigo[500],
          "&:hover": { bgcolor: indigo[100], color: indigo[700] },
        }}
      >
        <DriveFileRenameOutlineIcon />
      </IconButton>
      <IconButton
        sx={{
          color: red[500],
          "&:hover": { bgcolor: red[100], color: red[700] },
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default PostActions;
