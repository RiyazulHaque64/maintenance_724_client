"use client";
import { Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type TBTextEditorProps = {
  name: string;
  placeholder?: string;
  modules?: any;
  style?: Record<string, any>;
};

const CTextEditor = ({
  name,
  placeholder,
  modules,
  style,
}: TBTextEditorProps) => {
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
          <ReactQuill
            {...field}
            modules={modules}
            style={{ ...style }}
            theme="snow"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
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
