"use client";

import { Button, Grid, Stack } from "@mui/material";
import { FieldValues } from "react-hook-form";
import CFileUploader from "../Form/CFileUploader";
import CForm from "../Form/CForm";
import CTextEditor from "../Form/CTextEditor";
import CTextInput from "../Form/CTextInput";

const CreatePostForm = () => {
  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
  };
  return (
    <CForm onSubmit={handleSubmit} defaultValues={{ title: "", content: "" }}>
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
        <Button variant="outlined">Cancel</Button>
        <Button type="submit">Post</Button>
      </Stack>
    </CForm>
  );
};

export default CreatePostForm;
