import { Box, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import LoginForm from "../../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "75%",
            md: "60%",
            lg: "50%",
            xl: "30%",
          },
          padding: "50px",
          borderRadius: "4px",
          boxShadow: 1,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component={"h4"}
          sx={{
            fontSize: "32px",
            color: "primary.main",
            fontWeight: 700,
          }}
        >
          Welcome!
        </Typography>
        <Typography
          variant="h4"
          component={"h4"}
          sx={{
            fontSize: "20px",
            mb: "30px",
            color: grey[800],
          }}
        >
          Login to Dashboard
        </Typography>
        <LoginForm />
      </Box>
    </Stack>
  );
};

export default LoginPage;
