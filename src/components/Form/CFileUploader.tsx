"use client";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, SxProps, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TBFileUploaderProps = {
  name: string;
  label?: string;
  sx?: SxProps;
  showInUI?: boolean;
};

const CFileUploader = ({
  name,
  label,
  sx,
  showInUI = false,
}: TBFileUploaderProps) => {
  const [fileName, setFileName] = useState<string | undefined>("");
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;
  const errorMessage: string = (formState.errors[name]?.message ||
    "This field is required") as string;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <>
          <Button
            fullWidth
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ ...sx }}
            color={isError ? "error" : "primary"}
          >
            {fileName?.length ? fileName : label}
            <input
              {...field}
              value={value?.fileName}
              onChange={(e) => {
                onChange((e.target as HTMLInputElement).files?.[0]);
                setFileName((e.target as HTMLInputElement).files?.[0]?.name);
              }}
              type="file"
              style={{ display: "none" }}
            />
          </Button>
          {isError && (
            <Typography
              sx={{ ml: "14px", mt: "4px", fontSize: "14px" }}
              color="error"
            >
              {errorMessage}
            </Typography>
          )}
          {showInUI && value && (
            <Box sx={{ marginTop: "20px" }}>
              <Image
                width={300}
                src={URL.createObjectURL(value)}
                alt={fileName || "image"}
                style={{ objectFit: "cover" }}
              />
            </Box>
          )}
        </>
      )}
    />
  );
};

export default CFileUploader;
