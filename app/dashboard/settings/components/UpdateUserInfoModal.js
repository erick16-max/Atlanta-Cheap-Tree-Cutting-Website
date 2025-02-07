import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Alert, CircularProgress, Stack, TextField } from "@mui/material";
import PhoneNumberField from "@/components/finishaccount/CustomPhoneNumber";
import ColorModeContext from "@/theme/CustomThemeProvider";
import AppContext from "@/context/AppContext";
import { updateUserInfo } from "@/firebase/FirebaseUser";
import { auth } from "@/firebase.config";

const CustomTextField = ({ label, type, setValue, value, placeholder }) => (
  <TextField
    label={label}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(e) => {
      setValue(e.target.value);
    }}
    required
    fullWidth
    sx={{
      backgroundColor: "#eeeeee",
      borderRadius: 3,
      "& .MuiOutlinedInput-root": {
        borderRadius: 3,
        "& fieldset": {
          border: "none",
        },
        "&:hover fieldset": {
          border: "none",
        },
        "&.Mui-focused fieldset": {
          border: "none",
        },
        "&.Mui-focused": {
          borderRadius: 3,
        },
      },
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
  />
);

export default function UpdateUserInfoModal({ open, setOpen }) {
  const [email, setEmail] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [phoneError, setPhoneError] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {isMobile} = useContext(ColorModeContext)
  const [loading, setLoading] = useState(false)
  const {error, setError, success, setSuccess,userProfile, setUserProfile} = useContext(AppContext)

  useEffect(() => {
    setEmail(userProfile?.email)
    setFullname(userProfile?.displayName)
    // setPhoneNumber(userProfile?.phoneNumber)
  }, [userProfile])


  const handleUpdateUser = async() => {
   try {
          setLoading(true)
        const response = await updateUserInfo(userProfile?.id, fullname, email, phoneNumber);
        if (response === "success") {
          setSuccess(true)
          setUserProfile((prev) => ({...prev, phoneNumber:PhoneNumberField, email: email, displayName: fullname}))
          setTimeout(() => {
              setError(false)
              setSuccess(false)
              setOpen(false)
          }, 4000)
        }else{
          setError(true)
        }
      } catch (error) {
          setError(error?.message)
      }finally{
          setLoading(false)
          setTimeout(() => {
              setError(false)
              setSuccess(false)
          }, 4000)
      }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? '100%' : 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update user information
          </Typography>
          <Alert severity="info">
            Your primary email, <strong>{auth?.currentUser?.email}</strong>,
            will not be changed, but you can add a contact secondary email
          </Alert>

          <Stack gap={2} >
            <CustomTextField
              label={"Fullname"}
              placeholder={"Enter your fullname"}
              value={fullname }
              setValue={setFullname}
            />
            <CustomTextField
              label={"Email"}
              placeholder={"Enter your Email"}
              value={email}
              setValue={setEmail}
            />
           <Stack>
           <PhoneNumberField
              label={"Update Number"}
              setPhoneError={setPhoneError}
              setPhoneNumber={setPhoneNumber}
              phoneError={phoneError}
            />
             <Typography  ml={1} variant="body2" color={'secondary'}>current number: {userProfile?.phoneNumber}</Typography>
           </Stack>
           {success && <Alert severity="success">User updated successfully</Alert>}
            {error && <Alert severity="error">{error || "Something went wrong"}</Alert>}
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                height: 55,
                borderRadius: "12px",
              }}
              disabled={loading}
              onClick={handleUpdateUser}
            >
              { loading ? <CircularProgress size={20} thickness={4} /> : "Submit Update"}

            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
