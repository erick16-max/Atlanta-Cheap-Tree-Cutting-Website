import {
    Stack,
    TextField,
    InputAdornment,
    IconButton,
    Button,
    Typography,
    Box,
    Snackbar,
    CircularProgress,
  } from "@mui/material";
  import React, { useState } from "react";
  import { VscEye, VscEyeClosed } from "react-icons/vsc";
  import { FcGoogle } from "react-icons/fc";
  import Link from "next/link";
  import { resetPassword } from "@/firebase/Firebase";
import { MdClose } from "react-icons/md";
import SuccessSnackbarAlert from "@/components/header/SuccessSnackbarAlert";

  
  export default function ForgotPasswordForm() {
    const [loading, setLoading] = React.useState(false);
    const [isError, setIsError] = React.useState("");
    const [isSuccess, setIsSuccess] = React.useState(false)
    const [email, setEmail] = React.useState("");
    const [open, setOpen] = useState(false)

    
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
    

    const handleResetPassword =async(e) => {
      e.preventDefault()
      try {
        setLoading(true)
          await resetPassword(email)
          setIsSuccess(true)
          setEmail("")
        
      } catch (error) {
      const cleanError = error.message.replace("Firebase:", "").trim();

        setIsError( cleanError|| "Something went wrong -- try again!" )
      }
      setLoading(false)
      setTimeout(() => {
        setIsError("")
        setIsSuccess(false)
      }, 4000)
    }
  
    return (
      <Stack width={"100%"} component={"form"} gap={3} onSubmit={handleResetPassword}>
         {isError && (
                <Alert variant="filled" severity="error">
                  {isError}
                </Alert>
              )}
          
              {
                isSuccess && (
                  <SuccessSnackbarAlert 
                  setOpen={setIsSuccess}
                  open={isSuccess}
                  message={"Reset link sent to email successfully!"}
                
                />
                )
              }
        <TextField
            variant="outlined"
          label="Email"
          placeholder="Enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          sx={{
            borderRadius: 3,
           
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: 3,
            },
            "& .MuiInputBase-root": {
              "&:autofill": {
                borderRadius: 3,
                boxShadow: "0 0 0 1000px #eeeeee inset",
              },
            },
          }}
          helperText={'A password reset link was send to the email provided above. Please do not share this link with unauthorized people.'}
        />
  
       
  
        <Button
          variant="contained"
          fullWidth
          sx={{
            textTransform: "none",
            fontWeight: 600,
            height: 50,
            borderRadius: "12px",
          }}
          type="submit"
        >
          {loading ? <CircularProgress size={22} thickness={4} sx={{color: '#f5f5f5'}}/> : "Submit"}
          
        </Button>
      <Box
          display={"flex"}
          alignItems={"center"}
          gap={1}
          justifyContent={'center'}
          width={'100%'}
        >
          <Typography variant="body2" color={"text.secondary"} fontWeight={500}>
            Remembered credetials?
          </Typography>
          <Link style={{ textDecoration: "none" }} href={"/login"}>
            <Typography variant="body2" color={"text.primary"} fontWeight={500} sx={{textDecoration: 'underline'}}>
              Go to login
            </Typography>
          </Link>
  
        </Box>

      </Stack>
    );
  }
  