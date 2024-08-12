"use client";

import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal/Modal";
import CreatePostForm from "./CreatePostForm";

type TModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  editMode?: boolean;
};

const PostModal = ({ open, setOpen, editMode = false }: TModalProps) => {
  return (
    <Modal open={open} setOpen={setOpen} title="Create Post">
      {editMode ? <>Edit Koro</> : <CreatePostForm setOpen={setOpen} />}
    </Modal>
  );
};

export default PostModal;
