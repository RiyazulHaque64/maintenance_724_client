"use client";

import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import htmlReactParser from "html-react-parser";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import PostActions from "./PostActions";

const PostTable = ({ data }: { data: any }) => {
  const [rowId, setRowId] = useState("");
  const columns: GridColDef<typeof data.data>[] = [
    {
      field: "thumbnail",
      headerName: "Image",
      width: 150,
      renderCell: ({ row }) => (
        <Image src={row.thumbnail} alt="Post Image" width={140} height={100} />
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
      editable: true,
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
      renderCell: (params) => <PostActions {...{ params, rowId, setRowId }} />,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data?.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        onCellEditStop={(params) => setRowId(params.id as string)}
      />
    </Box>
  );
};

export default PostTable;
