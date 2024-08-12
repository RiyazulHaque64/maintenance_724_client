"use client";

import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal/Modal";
import CreatePostForm from "./CreatePostForm";
import EditPostForm from "./EditPostForm";

type TModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  editMode?: boolean;
  title: string;
  data?: Record<string, any>;
};

const PostModal = ({
  open,
  setOpen,
  editMode = false,
  title,
  data,
}: TModalProps) => {
  return (
    <Modal open={open} setOpen={setOpen} title={title}>
      {editMode && data ? (
        <EditPostForm data={data} setOpen={setOpen} />
      ) : (
        <CreatePostForm setOpen={setOpen} />
      )}
    </Modal>
  );
};

export default PostModal;
