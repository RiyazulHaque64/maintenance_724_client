"use client";

import { authKey } from "@/constants/auth";
import { updateImage } from "@/services/actions/gallery";
import { getFromLocalStorage } from "@/utils/local-storage";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@mui/lab/LoadingButton";
import { Alert, Button, Grid, Stack } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import CForm from "../Form/CForm";
import CSelectField from "../Form/CSelectField";

type TAddGalleryFormProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: Record<string, any>;
};

const updateGalleryValidationSchema = z.object({
  serviceId: z.string().min(1, { message: "Service is required" }),
});

const EditGalleryForm = ({ setOpen, data }: TAddGalleryFormProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [services, setServices] = useState([]);

  const handleSubmit = async (values: FieldValues) => {
    setLoading(true);
    const token = getFromLocalStorage(authKey);
    try {
      if (!token) {
        setLoading(false);
        throw new Error("You are unauthorized!");
      }
      const res = await updateImage(token, data.id, values);
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
        resolver={zodResolver(updateGalleryValidationSchema)}
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
            Save
          </LoadingButton>
        </Stack>
      </CForm>
    </>
  );
};

export default EditGalleryForm;
