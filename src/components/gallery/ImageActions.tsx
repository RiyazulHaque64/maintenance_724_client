import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { IconButton, Stack } from "@mui/material";
import { grey, indigo, red } from "@mui/material/colors";

const ImageActions = () => {
  return (
    <Stack direction="row" gap={1}>
      <IconButton
        sx={{
          color: indigo[700],
          bgcolor: grey[300],
          width: 36,
          height: 36,
          transition: "all 0.5s ease",
          "& .MuiSvgIcon-root": {
            fontSize: 18,
          },
          "&:hover": { bgcolor: grey[100], color: indigo[500] },
        }}
      >
        <DriveFileRenameOutlineIcon />
      </IconButton>
      <IconButton
        sx={{
          color: red[700],
          bgcolor: grey[300],
          width: 36,
          height: 36,
          transition: "all 0.5s ease",
          "& .MuiSvgIcon-root": {
            fontSize: 18,
          },
          "&:hover": { bgcolor: grey[100], color: red[500] },
        }}
      >
        <DeleteOutlineIcon />
      </IconButton>
    </Stack>
  );
};

export default ImageActions;
