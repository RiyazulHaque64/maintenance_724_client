"use client";

import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputTypes = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  required?: boolean;
  sx?: SxProps;
  items: string[];
};

const CSelectField = ({
  items,
  name,
  label,
  size = "small",
  fullWidth,
  required,
  sx,
}: TInputTypes) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors["name"] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          select
          size={size}
          fullWidth={fullWidth}
          required={required}
          error={isError}
          helperText={
            isError ? (formState.errors["name"]?.message as string) : ""
          }
        >
          {items.map((item: any) => {
            return (
              <MenuItem key={item.id} value={item.id}>
                {item.title}
              </MenuItem>
            );
          })}
        </TextField>
      )}
    />
  );
};

export default CSelectField;
