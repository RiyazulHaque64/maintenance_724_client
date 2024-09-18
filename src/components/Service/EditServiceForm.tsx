"use client";

import { authKey } from "@/constants/auth";
import { updateService } from "@/services/actions/service";
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

type TEditServiceFormProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: Record<string, any>;
};

const editServiceValidationSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  file: z.instanceof(File, { message: "Service icon is required" }).optional(),
});

const EditServiceForm = ({ setOpen, data }: TEditServiceFormProps) => {
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
      console.log(values);
      const convertedData = convertToFormData(values);
      const res = await updateService({
        token,
        id: data.id,
        data: convertedData,
      });
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
          title: data.title,
          description: data.description,
        }}
        resolver={zodResolver(editServiceValidationSchema)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CTextInput name="title" placeholder="Title" fullWidth={true} />
          </Grid>
          <Grid item xs={12}>
            <CTextEditor name="description" placeholder="Details..." />
          </Grid>
          <Grid item xs={12}>
            <CFileUploader
              name="file"
              label="Service Icon"
              showInUI={true}
              previousImage={data?.icon}
            />
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
            Update
          </LoadingButton>
        </Stack>
      </CForm>
    </>
  );
};

export default EditServiceForm;
