"use client";

import { authKey } from "@/constants/auth";
import { createPost } from "@/services/actions/post";
import convertToFormData from "@/utils/convertToFormData";
import { getFromLocalStorage } from "@/utils/local-storage";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@mui/lab/LoadingButton";
import { Alert, Button, Grid, Stack } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import CFileUploader from "../Form/CFileUploader";
import CForm from "../Form/CForm";
import CTextEditor from "../Form/CTextEditor";
import CTextInput from "../Form/CTextInput";

type TCreatePostFormProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const createPostValidationSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  file: z.instanceof(File, { message: "Featured image is required" }),
});

const CreatePostForm = ({ setOpen }: TCreatePostFormProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (values: FieldValues) => {
    setLoading(true);
    const token = getFromLocalStorage(authKey);
    try {
      if (!token) {
        setLoading(false);
        throw new Error("You are unauthorized!");
      }
      const convertedData = convertToFormData(values);
      const res = await createPost(token, convertedData);
      if (res?.success) {
        toast.success(res?.message);
        setLoading(false);
        setOpen(false);
      } else {
        setError(res?.message);
        setLoading(false);
      }
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      {error?.length > 0 && (
        <Alert severity="error" sx={{ mb: "20px" }}>
          {error}
        </Alert>
      )}
      <CForm
        onSubmit={handleSubmit}
        defaultValues={{
          title: "",
          content: "",
        }}
        resolver={zodResolver(createPostValidationSchema)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CTextInput name="title" placeholder="Title" fullWidth={true} />
          </Grid>
          <Grid item xs={12}>
            <CTextEditor name="content" placeholder="Details..." />
          </Grid>
          <Grid item xs={12}>
            <CFileUploader name="file" label="Featured Image" showInUI={true} />
          </Grid>
        </Grid>
        <Stack
          direction="row"
          justifyContent="end"
          spacing={2}
          sx={{ mt: "16px" }}
        >
          <Button
            variant="outlined"
            disabled={loading}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loading}
            disabled={loading}
          >
            Post
          </LoadingButton>
        </Stack>
      </CForm>
    </>
  );
};

export default CreatePostForm;
