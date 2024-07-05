import CreatePost from "@/components/Post/CreatePost";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, Stack, TextField } from "@mui/material";

const page = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
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
    </Box>
  );
};

export default page;
