"use client";

import { Button } from "@mui/material";
import { useState } from "react";
import PostModal from "./PostModal";

const CreatePost = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Create Post</Button>
      <PostModal open={open} setOpen={setOpen} />
    </>
  );
};

export default CreatePost;
