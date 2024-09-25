"use client";

import { authKey } from "@/constants/auth";
import { deleteGalleryItem } from "@/services/actions/gallery";
import { getFromLocalStorage } from "@/utils/local-storage";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useState } from "react";
import { toast } from "sonner";
import ConfirmDialog from "../shared/ConfirmDialog";

const DeleteAction = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeletePost = async () => {
    setLoading(true);
    try {
      const token = getFromLocalStorage(authKey);
      if (!token) {
        throw new Error("You are unauthorized!");
      }
      const response = await deleteGalleryItem(token, id);
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
          color: red[700],
          bgcolor: grey[300],
          width: 36,
          height: 36,
          transition: "all 0.5s ease",
          "& .MuiSvgIcon-root": {
            fontSize: 18,
          },
          "&:hover": { bgcolor: grey[100], color: red[500] },
        }}
        onClick={() => setIsOpen(true)}
      >
        <DeleteOutlineIcon />
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

export default DeleteAction;
