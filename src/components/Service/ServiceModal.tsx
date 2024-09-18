"use client";

import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal/Modal";
import AddServiceForm from "./AddServiceForm";
import EditServiceForm from "./EditServiceForm";

type TModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  editMode?: boolean;
  title: string;
  data?: Record<string, any>;
};

const ServiceModal = ({
  open,
  setOpen,
  editMode = false,
  title,
  data,
}: TModalProps) => {
  return (
    <Modal open={open} setOpen={setOpen} title={title}>
      {editMode && data ? (
        <EditServiceForm data={data} setOpen={setOpen} />
      ) : (
        <AddServiceForm setOpen={setOpen} />
      )}
    </Modal>
  );
};

export default ServiceModal;
