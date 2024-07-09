"use client";

import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal/Modal";
import CreatePostForm from "./CreatePostForm";

type TModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const CreatePostModal = ({ open, setOpen }: TModalProps) => {
  return (
    <Modal open={open} setOpen={setOpen} title="Create Post">
      <CreatePostForm setOpen={setOpen} />
    </Modal>
  );
};

export default CreatePostModal;
