import { Grid } from "@mui/material";
import ImageCard from "./ImageCard";

const GalleryGrid = ({ data }: { data: any }) => {
  return (
    <Grid container spacing={2}>
      {data?.data?.map((item: any) => (
        <ImageCard key={item.id} imageInfo={item} />
      ))}
    </Grid>
  );
};

export default GalleryGrid;
