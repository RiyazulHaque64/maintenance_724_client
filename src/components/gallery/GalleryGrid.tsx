import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import ImageActions from "./ImageActions";

const GalleryGrid = ({ data }: { data: any[] }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ position: "relative" }}>
        <Box sx={{ width: "100%", height: "200px", position: "relative" }}>
          <Image
            fill
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="Image"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "16px",
            left: "16px",
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: 0,
            transition: "opacity 0.2s ease-in-out",
            "&:hover": {
              opacity: 1,
            },
            display: "flex",
            alignItems: "end",
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: grey[300], fontSize: "16px" }}
            >
              Image Actions
            </Typography>
            <ImageActions />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ position: "relative" }}>
        <Box sx={{ width: "100%", height: "200px", position: "relative" }}>
          <Image
            fill
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="Image"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "16px",
            left: "16px",
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: 0,
            transition: "opacity 0.2s ease-in-out",
            "&:hover": {
              opacity: 1,
            },
            display: "flex",
            alignItems: "end",
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: grey[300], fontSize: "16px" }}
            >
              Image Actions
            </Typography>
            <ImageActions />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ position: "relative" }}>
        <Box sx={{ width: "100%", height: "200px", position: "relative" }}>
          <Image
            fill
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="Image"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "16px",
            left: "16px",
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: 0,
            transition: "opacity 0.2s ease-in-out",
            "&:hover": {
              opacity: 1,
            },
            display: "flex",
            alignItems: "end",
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: grey[300], fontSize: "16px" }}
            >
              Image Actions
            </Typography>
            <ImageActions />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ position: "relative" }}>
        <Box sx={{ width: "100%", height: "200px", position: "relative" }}>
          <Image
            fill
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="Image"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "16px",
            left: "16px",
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: 0,
            transition: "opacity 0.2s ease-in-out",
            "&:hover": {
              opacity: 1,
            },
            display: "flex",
            alignItems: "end",
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: grey[300], fontSize: "16px" }}
            >
              Image Actions
            </Typography>
            <ImageActions />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ position: "relative" }}>
        <Box sx={{ width: "100%", height: "200px", position: "relative" }}>
          <Image
            fill
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="Image"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "16px",
            left: "16px",
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: 0,
            transition: "opacity 0.2s ease-in-out",
            "&:hover": {
              opacity: 1,
            },
            display: "flex",
            alignItems: "end",
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: grey[300], fontSize: "16px" }}
            >
              Image Actions
            </Typography>
            <ImageActions />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GalleryGrid;
