import CreatePost from "@/components/Post/CreatePost";
import PostTable from "@/components/Post/PostTable";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, Stack, TextField } from "@mui/material";

const page = async () => {
  const res = await fetch(`http://localhost:5001/api/post`, {
    next: { tags: ["get-all-post"] },
  });
  const allPost = await res.json();
  console.log(allPost);

  return (
    <Box>
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
      <PostTable data={allPost} />
    </Box>
  );
};

export default page;
