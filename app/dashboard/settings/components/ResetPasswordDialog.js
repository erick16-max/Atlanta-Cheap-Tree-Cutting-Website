import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { auth } from "@/firebase.config";
import { resetPassword } from "@/firebase/Firebase";
import { Alert, CircularProgress } from "@mui/material";
import AppContext from "@/context/AppContext";
import { signOutUser } from "@/firebase/Firebase";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ResetPasswordDialog({ open, setOpen }) {
  const [loading, setLoading] = React.useState(false);
  const { error, setError, success, setSuccess } = React.useContext(AppContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleResetPassWord = async () => {
    try {
        setLoading(true)
      const response = await resetPassword(auth?.currentUser?.email);
      if (response === "success") {
        setSuccess(true)
        setTimeout(() => {
            setError(false)
            setSuccess(false)
            handleClose()
            signOutUser()
        }, 4000)
      }else{
        setError(true)
      }
    } catch (error) {
        setError(true)
    }finally{
        setLoading(false)
        setTimeout(() => {
            setError(false)
            setSuccess(false)
            handleClose()
        }, 4000)
    }
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {error && <Alert severity="error">Something went wrong --- Please try again</Alert>}
        {success && <Alert severity="success">Password reset link was send to your email</Alert>}
        <DialogTitle>{"Do you want to reset your password?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            A password reset link will be send the email that you signed in
            with, <strong>{auth?.currentUser?.email}</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" sx={{color: 'text.primary'}} onClick={handleClose}>
            cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleResetPassWord}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={20} thickness={4} />
            ) : (
              "Send Reset Link"
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
