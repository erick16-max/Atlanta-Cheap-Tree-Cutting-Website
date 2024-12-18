import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { MdClose } from "react-icons/md";
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';
import AppContext from '@/context/AppContext';


export default function SuccessSnackbarAlert() {

  const {successAlert: open, setSuccessAlert: setOpen, isUserProfile, userProfile} = React.useContext(AppContext)

console.log(userProfile)

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <MdClose style={{color: '#f5f5f5'}}/>
      </IconButton>
    </React.Fragment>
  );


  return (
    <Snackbar 
      open={open} 
      autoHideDuration={4000} 
      onClose={handleClose}
      message={`Profile saved successfully!`}
      action={action}
      />
    
  );
}