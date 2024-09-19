import AddImages from "@/components/gallery/AddImages";
import CreatePost from "@/components/Post/CreatePost";
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
              <CreatePost />
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
