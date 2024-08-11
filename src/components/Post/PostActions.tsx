"use client";
import { authKey } from "@/constants/auth";
import { deletePost } from "@/services/actions/post";
import { getFromLocalStorage } from "@/utils/local-storage";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, Stack } from "@mui/material";
import { green, indigo, red } from "@mui/material/colors";
import { useState } from "react";
import { toast } from "sonner";
import ConfirmDialog from "../shared/ConfirmDialog";

type TPostActionsProps = {
  params: any;
};

const PostActions = ({ params }: TPostActionsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeletePost = async () => {
    setLoading(true);
    try {
      const token = getFromLocalStorage(authKey);
      if (!token) {
        throw new Error("You are unauthorized!");
      }
      const response = await deletePost(token, params.id);
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
      <Stack direction="row" alignItems="center">
        <IconButton
          sx={{
            color: green[500],
            "&:hover": { bgcolor: green[100], color: green[700] },
          }}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton
          sx={{
            color: indigo[500],
            "&:hover": { bgcolor: indigo[100], color: indigo[700] },
          }}
        >
          <DriveFileRenameOutlineIcon />
        </IconButton>
        <IconButton
          sx={{
            color: red[500],
            "&:hover": { bgcolor: red[100], color: red[700] },
          }}
          onClick={() => setIsOpen(true)}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
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

export default PostActions;

//             setRowId(params.row.id);
