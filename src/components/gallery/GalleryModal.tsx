"use client";

import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal/Modal";
import AddGalleryForm from "./AddGalleryForm";
import EditGalleryForm from "./EditGalleryForm";

type TModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  editMode?: boolean;
  data?: Record<string, any>;
};

const GalleryModal = ({
  open,
  setOpen,
  title,
  editMode = false,
  data,
}: TModalProps) => {
  return (
    <Modal open={open} setOpen={setOpen} title={title}>
      {editMode && data ? (
        <EditGalleryForm data={data} setOpen={setOpen} />
      ) : (
        <AddGalleryForm setOpen={setOpen} />
      )}
    </Modal>
  );
};

export default GalleryModal;
