import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { Dispatch, SetStateAction } from "react";

type TConfirmDialogProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  title: string;
  subTitle: string;
  onConfirm: () => void;
};

const ConfirmDialog = ({
  isOpen,
  setIsOpen,
  loading,
  title,
  subTitle,
  onConfirm,
}: TConfirmDialogProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      PaperProps={{
        style: {
          position: "absolute",
          top: "10%",
          left: "50%",
          translate: "-50% 0%",
          margin: 0,
          padding: "10px 5px 10px 5px",
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "center", py: 0 }}>
        <NotListedLocationIcon sx={{ fontSize: "100px", color: red[500] }} />
      </DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2">{subTitle}</Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={() => setIsOpen(false)}
          variant="contained"
          sx={{ bgcolor: grey[500], "&:hover": { bgcolor: grey[600] } }}
          disabled={loading}
        >
          No
        </Button>
        <LoadingButton
          onClick={onConfirm}
          loading={loading}
          variant="contained"
          sx={{ bgcolor: red[500], "&:hover": { bgcolor: red[700] } }}
        >
          Yes
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
