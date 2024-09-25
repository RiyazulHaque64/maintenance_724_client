import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import ImageActions from "./ImageActions";

const ImageCard = ({ imageInfo }: { imageInfo: any }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ position: "relative" }}>
      <Box sx={{ width: "100%", height: "200px", position: "relative" }}>
        <Image
          fill
          src={imageInfo.image.path}
          alt="Image"
          style={{ objectFit: "cover", borderRadius: "4px" }}
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
          borderRadius: "4px",
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
          <Typography variant="h6" sx={{ color: grey[300], fontSize: "16px" }}>
            {imageInfo.category.title}
          </Typography>
          <ImageActions imageInfo={imageInfo} />
        </Box>
      </Box>
    </Grid>
  );
};

export default ImageCard;
