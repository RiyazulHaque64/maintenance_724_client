"use client";
import CreatePost from "@/components/Post/CreatePost";
import PostTable from "@/components/Post/PostTable";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const PostPage = () => {
  const [rows, setRows] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);
  const [rowCount, setRowCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page: number, pageSize: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5001/api/post?page=${page + 1}&limit=${pageSize}`,
        {
          next: {
            tags: ["posts"],
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await res.json();
      console.log(result);
      // setRows(data);
      // setRowCount(meta.total); // Assuming your API returns a total count in meta
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page, pageSize);
  }, [page, pageSize]);

  return (
    <Box>
      {rows ? (
        rows?.length > 0 ? (
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
            <PostTable data={rows} />
          </>
        ) : (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "calc(100vh - 110px)" }}
          >
            <CreatePost />
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
