"use client";

import { authKey } from "@/constants/auth";
import { updateImageCategory } from "@/services/actions/gallery";
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
  data: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const addGalleryValidationSchema = z.object({
  category: z.string().min(1, { message: "Category is required" }),
  file: z.array(z.instanceof(File, { message: "At least one image required" })),
});

const EditGalleryForm = ({ data, setOpen }: TAddGalleryFormProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSubmit = async (values: FieldValues) => {
    setLoading(true);
    const token = getFromLocalStorage(authKey);
    try {
      if (!token) {
        setLoading(false);
        throw new Error("You are unauthorized!");
      }

      const res = await updateImageCategory(token, data.id, { categoryId: "" });
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
      setCategories(services.data);
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
          categoryId: data.categoryId,
        }}
        resolver={zodResolver(addGalleryValidationSchema)}
      >
        <Grid container spacing={2} sx={{ paddingTop: "5px" }}>
          <Grid item xs={12}>
            <CSelectField
              name="categoryId"
              label="Category"
              items={categories}
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
