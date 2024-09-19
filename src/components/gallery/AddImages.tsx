"use client";

import { Button } from "@mui/material";
import { useState } from "react";
import GalleryModal from "./GalleryModal";

const AddImages = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Add Images</Button>
      <GalleryModal open={open} setOpen={setOpen} title="Add Images" />
    </>
  );
};

export default AddImages;
