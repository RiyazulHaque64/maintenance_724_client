"use client";

import { authKey } from "@/constants/auth";
import { deletePost } from "@/services/actions/post";
import { getFromLocalStorage } from "@/utils/local-storage";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { useState } from "react";
import { toast } from "sonner";
import ConfirmDialog from "../shared/ConfirmDialog";

type TDeleteActionsProps = { params: GridRenderCellParams };

const DeleteActions = ({ params }: TDeleteActionsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeletePost = async () => {
    setLoading(true);
    try {
      const token = getFromLocalStorage(authKey);
      if (!token) {
        throw new Error("You are unauthorized!");
      }
      const response = await deletePost(token, params.id as string);
      if (response?.success) {
        toast.success(response?.message);
      } else {
        toast.error(response?.message);
      }
      setLoading(false);
      setIsOpen(false);
    } catch (error: any) {
      setLoading(false);
      setIsOpen(false);
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <>
      <IconButton
        sx={{
          color: red[500],
          "&:hover": { bgcolor: red[100], color: red[700] },
        }}
        onClick={() => setIsOpen(true)}
      >
        <DeleteIcon />
      </IconButton>
      <ConfirmDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        loading={loading}
        title="Are you sure to delete this post?"
        subTitle="You can't undo this post!"
        onConfirm={handleDeletePost}
      />
    </>
  );
};

export default DeleteActions;
