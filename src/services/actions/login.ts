import { TLoginCredential } from "@/interfaces/auth";

const login = async (credential: TLoginCredential) => {
  console.log(process.env.NEXT_PUBLIC_SERVER_URL);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(credential),
      credentials: "include",
    }
  );
  const data = await res.json();
  return data;
};

export default login;
