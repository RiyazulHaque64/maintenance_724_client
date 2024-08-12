"use client";

import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, Stack } from "@mui/material";
import { green } from "@mui/material/colors";
import { GridRenderCellParams } from "@mui/x-data-grid";
import DeleteActions from "./DeleteActions";
import EditActions from "./EditActions";

type TPostActionsProps = {
  params: GridRenderCellParams;
};

const PostActions = ({ params }: TPostActionsProps) => {
  return (
    <>
      <Stack direction="row" alignItems="center">
        <IconButton
          sx={{
            color: green[500],
            "&:hover": { bgcolor: green[100], color: green[700] },
          }}
        >
          <VisibilityIcon />
        </IconButton>
        <EditActions params={params} />
        <DeleteActions params={params} />
      </Stack>
    </>
  );
};

export default PostActions;
