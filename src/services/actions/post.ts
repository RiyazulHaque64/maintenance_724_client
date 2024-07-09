"use server";

export const createPost = async (token: string, data: FormData) => {
  try {
    const res = await fetch("http://localhost:5001/api/post", {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: data,
    });
    const newPost = await res.json();
    return newPost;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};
