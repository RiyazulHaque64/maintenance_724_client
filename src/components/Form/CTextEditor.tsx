"use client";

import { Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import Tiptap from "../TextEditor/Tiptap";

type TCTextEditorProps = {
  name: string;
  placeholder?: string;
};

const CTextEditor = ({ name, placeholder }: TCTextEditorProps) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;
  const errorMessage: string = (formState.errors[name]?.message ||
    "This field is required") as string;
  return (
    <Controller
      {...control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <>
          <Tiptap
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            isError={isError}
          />
          {isError && (
            <Typography
              sx={{ ml: "14px", mt: "4px", fontSize: "14px" }}
              color="error"
            >
              {errorMessage}
            </Typography>
          )}
        </>
      )}
    />
  );
};

export default CTextEditor;
