"use client";

import CancelIcon from "@mui/icons-material/Cancel";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import { Controller, useFormContext } from "react-hook-form";

type CMultipleFileUploaderProps = {
  name: string;
  label?: string;
  fullWidth?: boolean;
};

const CMultipleFileUploader = ({
  name,
  label = "Upload Images",
  fullWidth = true,
}: CMultipleFileUploaderProps) => {
  const { control, setValue, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;
  const errorMessage: string = (formState.errors[name]?.message ||
    "This field is required") as string;

  const handleRemoveImage = (index: number, value: any) => {
    const newImages = value.filter((_: any, i: number) => i !== index);
    setValue(name, newImages);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => (
        <>
          <Button
            fullWidth={fullWidth}
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            color={isError ? "error" : "primary"}
          >
            {label}
            <input
              {...field}
              accept="image/*"
              multiple
              type="file"
              style={{ display: "none" }}
              onChange={(e) => {
                const files = e.target.files;
                if (files) {
                  onChange(Array.from(files));
                }
              }}
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

          {/* Show in UI */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            {value &&
              value.length > 0 &&
              value.map((file: any, index: number) => (
                <Box
                  key={index}
                  sx={{
                    margin: "10px",
                    position: "relative",
                    border: `1px solid ${grey[300]}`,
                  }}
                >
                  <Image
                    width={100}
                    height={100}
                    src={URL.createObjectURL(file)}
                    alt={`selected-img-${index}`}
                    style={{ objectFit: "cover" }}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      translate: "50% -50%",
                    }}
                    onClick={() => handleRemoveImage(index, value)}
                  >
                    <CancelIcon sx={{ fontSize: "26px" }} color="secondary" />
                  </IconButton>
                </Box>
              ))}
          </Box>
        </>
      )}
    />
  );
};

export default CMultipleFileUploader;
