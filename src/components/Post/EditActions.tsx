import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { IconButton } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { useState } from "react";
import PostModal from "./PostModal";

type TEditActionsProps = { params: GridRenderCellParams };

const EditActions = ({ params }: TEditActionsProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <IconButton
        sx={{
          color: indigo[500],
          "&:hover": { bgcolor: indigo[100], color: indigo[700] },
        }}
        onClick={() => setOpen(true)}
      >
        <DriveFileRenameOutlineIcon />
      </IconButton>
      <PostModal open={open} setOpen={setOpen} editMode={true} />
    </>
  );
};

export default EditActions;
