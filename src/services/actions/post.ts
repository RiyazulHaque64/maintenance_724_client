"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const createPost = async (token: string, data: FormData) => {
  try {
    const res = await fetch("http://localhost:5001/api/post", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: data,
    });
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const newPost = await res.json();
    revalidatePath("/dashboard/post");
    return newPost;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

export const updatePost = async ({
  token,
  id,
  data,
}: {
  token: string;
  id: string;
  data: FormData;
}) => {
  try {
    const res = await fetch(`http://localhost:5001/api/post/update/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
      body: data,
    });
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const updatedPost = await res.json();
    revalidatePath("/dashboard/post");
    return updatedPost;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

export const deletePost = async (token: string, id: string) => {
  try {
    const res = await fetch(
      `http://localhost:5001/api/post/soft-delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const deletedPost = await res.json();
    revalidateTag("posts");
    return deletedPost;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};
