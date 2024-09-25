"use client";

import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { IconButton } from "@mui/material";
import { grey, indigo } from "@mui/material/colors";
import { useState } from "react";
import GalleryModal from "./GalleryModal";

type TEditActionsProps = { data: any };

const EditAction = ({ data }: TEditActionsProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <IconButton
        sx={{
          color: indigo[700],
          bgcolor: grey[300],
          width: 36,
          height: 36,
          transition: "all 0.5s ease",
          "& .MuiSvgIcon-root": {
            fontSize: 18,
          },
          "&:hover": { bgcolor: grey[100], color: indigo[500] },
        }}
        onClick={() => setOpen(true)}
      >
        <DriveFileRenameOutlineIcon />
      </IconButton>
      <GalleryModal
        open={open}
        setOpen={setOpen}
        title="Change Category"
        data={data}
        editMode={true}
      />
    </>
  );
};

export default EditAction;
