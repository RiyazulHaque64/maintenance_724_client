"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const addService = async (token: string, data: FormData) => {
  try {
    const res = await fetch("http://localhost:5001/api/service", {
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
    revalidatePath("/dashboard/service");
    return newService;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

export const updateService = async ({
  token,
  id,
  data,
}: {
  token: string;
  id: string;
  data: FormData;
}) => {
  try {
    const res = await fetch(`http://localhost:5001/api/service/update/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
      body: data,
    });
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const updatedService = await res.json();
    revalidatePath("/dashboard/service");
    return updatedService;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

export const deleteService = async (token: string, id: string) => {
  try {
    const res = await fetch(`http://localhost:5001/api/service/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const deletedPost = await res.json();
    revalidateTag("services");
    return deletedPost;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};
