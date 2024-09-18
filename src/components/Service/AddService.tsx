"use client";

import { Button } from "@mui/material";
import { useState } from "react";
import ServiceModal from "./ServiceModal";

const AddService = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Add Service</Button>
      <ServiceModal open={open} setOpen={setOpen} title="Add Service" />
    </>
  );
};

export default AddService;
