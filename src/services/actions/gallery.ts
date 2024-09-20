"use server";

import { revalidatePath } from "next/cache";

export const addImages = async (token: string, data: FormData) => {
  try {
    const res = await fetch("http://localhost:5001/api/gallery", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: data,
    });
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const newService = await res.json();
    revalidatePath("/dashboard/gallery");
    return newService;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};
