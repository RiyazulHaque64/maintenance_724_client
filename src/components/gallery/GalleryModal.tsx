"use client";

import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal/Modal";
import AddGalleryForm from "./AddGalleryForm";

type TModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
};

const GalleryModal = ({ open, setOpen, title }: TModalProps) => {
  return (
    <Modal open={open} setOpen={setOpen} title={title}>
      <AddGalleryForm setOpen={setOpen} />
    </Modal>
  );
};

export default GalleryModal;
