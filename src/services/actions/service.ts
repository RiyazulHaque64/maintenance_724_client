"use server";

import { revalidateTag } from "next/cache";

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
    revalidateTag("services");
    return newService;
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
