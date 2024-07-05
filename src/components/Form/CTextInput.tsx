"use client";

import { SxProps, TextField } from "@mui/material";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

type TCTextInputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  size?: "medium" | "small";
  fullWidth?: boolean;
  sx?: SxProps;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

const CTextInput = ({
  name,
  label,
  type = "text",
  size = "small",
  placeholder,
  fullWidth,
  sx,
  startAdornment,
  endAdornment,
}: TCTextInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      {...control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          size={size}
          placeholder={placeholder}
          fullWidth={fullWidth}
          sx={{ ...sx }}
          InputProps={{
            startAdornment: startAdornment || false,
            endAdornment: endAdornment || false,
          }}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default CTextInput;
