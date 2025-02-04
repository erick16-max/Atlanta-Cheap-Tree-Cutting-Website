import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert, CircularProgress } from "@mui/material";
import useBookings from "@/hooks/useBookings";
import AppContext from "@/context/AppContext";

export default function DeleteDialogModal({ open, setOpen, bookingId, type}) {
  const {actionLoading, deleteBooking, AdminDeleteBooking} = useBookings()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Want to delete booking?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <Alert severity="error">
                The booking will be permanently be removed from your listing once you click delete
           </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            color="secondary" 
            sx={{
                borderRadius: "12px",
                px: 2,
                py: 1,
                textTransform: "none",
                fontWeight: 600,
                color: 'text.primary'
              }}
            onClick={handleClose}
        >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              borderRadius: "12px",
              px: 2,
              py: 1,
              textTransform: "none",
              fontWeight: 600,
            }}
            onClick={() => {
              handleClose()
              type === 'admin' ? AdminDeleteBooking(bookingId) : deleteBooking(bookingId)}}
            autoFocus
            disabled={actionLoading}
          >
            {actionLoading ? <CircularProgress color="secondary" thickness={4} size={18} /> : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
