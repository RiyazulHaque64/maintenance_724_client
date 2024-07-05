"use client";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Dispatch, ReactNode, SetStateAction } from "react";

type TModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title?: string;
  children: ReactNode;
};

export default function Modal({ open, setOpen, title, children }: TModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog"
        fullWidth
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
}
