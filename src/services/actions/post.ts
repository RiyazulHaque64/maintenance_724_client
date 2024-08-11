"use server";

import { revalidateTag } from "next/cache";

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
    revalidateTag("posts");
    return newPost;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

export const updatePublishedStatus = async ({
  token,
  id,
  status,
}: {
  token: string;
  id: string;
  status: boolean;
}) => {
  try {
    console.log(status, id);
    const res = await fetch(`http://localhost:5001/api/post/update/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({ published: status }),
    });
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const newPost = await res.json();
    revalidateTag("posts");
    return newPost;
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
