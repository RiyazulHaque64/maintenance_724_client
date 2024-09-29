"use client";

import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import htmlReactParser from "html-react-parser";
import moment from "moment";
import Image from "next/image";
import ServiceActions from "./ServiceActions";

const ServiceTable = ({ data }: { data: any }) => {
  const columns: GridColDef<typeof data.data>[] = [
    {
      field: "icon.path",
      headerName: "Icon",
      width: 150,
      renderCell: ({ row }) => (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            fill
            src={row.icon.path}
            alt="Service Icon"
            style={{ objectFit: "contain" }}
          />
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
      field: "description",
      headerName: "Description",
      flex: 1,
      renderCell: ({ row }) => {
        return <Box>{htmlReactParser(row.description)}</Box>;
      },
    },
    {
      field: "updatedAt",
      headerName: "Date",
      width: 180,
      renderCell: ({ row }) =>
        moment(row.updatedAt).format("DD-MM-YYYY HH:MM:SS"),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      type: "actions",
      renderCell: (params) => <ServiceActions params={params} />,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        autoHeight
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
      />
    </Box>
  );
};

export default ServiceTable;
