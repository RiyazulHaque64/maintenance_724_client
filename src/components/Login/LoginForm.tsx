"use client";

import CForm from "@/components/Form/CForm";
import CTextInput from "@/components/Form/CTextInput";
import { authKey } from "@/constants/auth";
import { TLoginCredential } from "@/interfaces/auth";
import login from "@/services/actions/login";
import { saveInLocalStorage } from "@/utils/local-storage";
import { zodResolver } from "@hookform/resolvers/zod";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import { Alert, Grid, InputAdornment } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const loginFormValidationSchema = z.object({
  userName: z.string().min(1, { message: "User name is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (values: FieldValues) => {
    setLoading(true);
    try {
      const res = await login(values as TLoginCredential);
      if (res?.success) {
        setError("");
        const token = res.data.accessToken;
        saveInLocalStorage(authKey, token);
        toast.success(res.message);
        setLoading(false);
      } else {
        setError(res?.message);
        setLoading(false);
      }
    } catch (error: any) {
      setError(error?.message || "Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <>
      {error?.length > 0 && (
        <Alert severity="error" sx={{ mb: "20px" }}>
          {error}
        </Alert>
      )}
      <CForm
        onSubmit={handleSubmit}
        resolver={zodResolver(loginFormValidationSchema)}
        defaultValues={{ userName: "", password: "" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CTextInput
              fullWidth={true}
              name="userName"
              placeholder="User Name"
              startAdornment={
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12}>
            <CTextInput
              fullWidth={true}
              name="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  {showPassword ? (
                    <VisibilityIcon
                      sx={{
                        cursor: "pointer",
                        "&:hover": { color: grey[700] },
                      }}
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <VisibilityOffIcon
                      sx={{
                        cursor: "pointer",
                        "&:hover": { color: grey[700] },
                      }}
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton
              type="submit"
              variant="contained"
              loading={loading}
              fullWidth
              disabled={loading}
            >
              Login
            </LoadingButton>
          </Grid>
        </Grid>
      </CForm>
    </>
  );
};

export default LoginForm;
