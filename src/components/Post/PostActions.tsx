"use client";
import { authKey } from "@/constants/auth";
import { getFromLocalStorage } from "@/utils/local-storage";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, Stack } from "@mui/material";
import { green, indigo, red } from "@mui/material/colors";
import { revalidateTag } from "next/cache";
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
      console.log(token);
      if (!token) {
        throw new Error("You are unauthorized!");
      }
      const res = await fetch(
        `http://localhost:5001/api/post/soft-delete/${params.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );
      const resInfo = await res.json();
      if (resInfo?.success) {
        toast.success(resInfo?.message);
        setLoading(false);
        setIsOpen(false);
        revalidateTag("get-all-post");
      }
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
