import AddImages from "@/components/gallery/AddImages";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const PostPage = async () => {
  const res = await fetch("http://localhost:5001/api/gallery");
  const galleryImages = await res.json();

  return (
    <Box>
      {galleryImages ? (
        galleryImages.data?.length > 0 ? (
          <>
            {" "}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: "20px" }}
            >
              <AddImages />
              <TextField
                size="small"
                placeholder="Search"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <GalleryGrid data={galleryImages} />
          </>
        ) : (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "calc(100vh - 110px)" }}
          >
            <AddImages />
          </Stack>
        )
      ) : (
        <Box>
          <Typography color="error">Something went wrong!</Typography>
        </Box>
      )}
    </Box>
  );
};

export default PostPage;
