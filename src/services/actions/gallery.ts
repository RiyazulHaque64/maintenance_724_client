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

export const updateImageCategory = async (
  token: string,
  id: string,
  data: Record<string, any>
) => {
  try {
    const res = await fetch(`http://localhost:5001/api/gallery/update/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const updatedGalleryImage = await res.json();
    revalidatePath("/dashboard/gallery");
    return updatedGalleryImage;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

export const deleteGalleryItem = async (token: string, id: string) => {
  try {
    const res = await fetch(`http://localhost:5001/api/gallery/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const deletedGalleryItem = await res.json();
    revalidatePath("/dashboard/gallery");
    return deletedGalleryItem;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};
