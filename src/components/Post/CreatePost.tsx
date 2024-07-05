"use client";

import { Button } from "@mui/material";
import { useState } from "react";
import CreatePostModal from "./CreatePostModal";

const CreatePost = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Create Post</Button>
      <CreatePostModal open={open} setOpen={setOpen} />
    </>
  );
};

export default CreatePost;
