import {
    Stack,
    TextField,
    InputAdornment,
    IconButton,
    Button,
    Typography,
    Box,
  } from "@mui/material";
  import React from "react";
  import { VscEye, VscEyeClosed } from "react-icons/vsc";
  import { FcGoogle } from "react-icons/fc";
  import Link from "next/link";
  
  export default function ForgotPasswordForm() {
    const [loading, setLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [seePassword, setSeepassword] = React.useState(false);
  
    return (
      <Stack width={"100%"} component={"form"} gap={3}>
          <Stack>
  
          </Stack>
        <TextField
            variant="outlined"
          label="Email"
          placeholder="Enter email"
          type="text"
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
          Submit
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
  