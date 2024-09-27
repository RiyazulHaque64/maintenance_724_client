"use client";

import { authKey } from "@/constants/auth";
import { addImages } from "@/services/actions/gallery";
import convertToFormData from "@/utils/convertToFormData";
import { getFromLocalStorage } from "@/utils/local-storage";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@mui/lab/LoadingButton";
import { Alert, Button, Grid, Stack } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import CForm from "../Form/CForm";
import CMultipleFileUploader from "../Form/CMultipleFileUploader";
import CSelectField from "../Form/CSelectField";

type TAddGalleryFormProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const addGalleryValidationSchema = z.object({
  serviceId: z.string().min(1, { message: "Service is required" }),
  file: z.array(z.instanceof(File, { message: "At least one image required" })),
});

const AddGalleryForm = ({ setOpen }: TAddGalleryFormProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [services, setServices] = useState([]);

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
    setLoading(true);
    const token = getFromLocalStorage(authKey);
    try {
      if (!token) {
        setLoading(false);
        throw new Error("You are unauthorized!");
      }
      const convertedData = convertToFormData(values);
      const res = await addImages(token, convertedData);
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

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("http://localhost:5001/api/service");
      const services = await res.json();
      setServices(services.data);
    };
    fetchCategories();
  }, []);

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
          serviceId: "",
        }}
        resolver={zodResolver(addGalleryValidationSchema)}
      >
        <Grid container spacing={2} sx={{ paddingTop: "5px" }}>
          <Grid item xs={12}>
            <CSelectField
              name="serviceId"
              label="Service"
              items={services}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <CMultipleFileUploader name="file" />
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

export default AddGalleryForm;
