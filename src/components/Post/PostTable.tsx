"use client";

import { authKey } from "@/constants/auth";
import { updatePost } from "@/services/actions/post";
import convertToFormData from "@/utils/convertToFormData";
import { getFromLocalStorage } from "@/utils/local-storage";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { Box, Switch } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import htmlReactParser from "html-react-parser";
import moment from "moment";
import Image from "next/image";
import { ChangeEvent } from "react";
import { toast } from "sonner";
import PostActions from "./PostActions";

const PostTable = ({ data }: { data: any }) => {
  const handlePublishedStatus = async (
    event: ChangeEvent<HTMLInputElement>,
    params: GridRenderCellParams
  ) => {
    try {
      const token = getFromLocalStorage(authKey);
      if (!token) {
        throw new Error("You are unauthorized!");
      }
      if (params.field === "published") {
        const data = convertToFormData({ published: event.target.checked });
        const response = await updatePost({
          token,
          id: params.id as string,
          data,
        });
        if (response?.success) {
          toast.success("Successfully updated the published status!");
        } else {
          toast.error(response?.message);
        }
      }
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong!");
    }
  };

  const columns: GridColDef<typeof data.data>[] = [
    {
      field: "thumbnail.path",
      headerName: "Image",
      width: 150,
      renderCell: ({ row }) =>
        row.thumbnail ? (
          <Image
            src={row.thumbnail.path}
            alt="Post Image"
            width={140}
            height={100}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <ImageOutlinedIcon />
          </Box>
        ),
      sortable: false,
      filterable: false,
    },
    {
      field: "title",
      headerName: "Title",
      width: 300,
    },
    {
      field: "content",
      headerName: "Content",
      flex: 1,
      renderCell: ({ row }) => {
        return <Box>{htmlReactParser(row.content)}</Box>;
      },
    },
    {
      field: "published",
      headerName: "Published",
      width: 100,
      type: "boolean",
      renderCell: (params: GridRenderCellParams) => (
        <Switch
          checked={params.row.published}
          onChange={(event) => handlePublishedStatus(event, params)}
        />
      ),
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 180,
      renderCell: ({ row }) =>
        moment(row.createdAt).format("DD-MM-YYYY HH:MM:SS"),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      type: "actions",
      renderCell: (params) => <PostActions params={params} />,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        autoHeight
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
      />
    </Box>
  );
};

export default PostTable;
