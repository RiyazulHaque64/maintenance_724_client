"use client";

import { Controller, useFormContext } from "react-hook-form";
import Tiptap from "../TextEditor/Tiptap";

type TCTextEditorProps = {
  name: string;
  placeholder?: string;
};

const CTextEditor = ({ name, placeholder }: TCTextEditorProps) => {
  const control = useFormContext();
  return (
    <Controller
      {...control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Tiptap value={value} onChange={onChange} placeholder={placeholder} />
      )}
    />
  );
};

export default CTextEditor;
