import {
    Stack,
    TextField,
    InputAdornment,
    IconButton,
    Button,
    Typography,
    Box,
  } from "@mui/material";
  import React, { useContext } from "react";
  import { VscEye, VscEyeClosed } from "react-icons/vsc";
  import { FcGoogle } from "react-icons/fc";
  import Link from "next/link";
import ColorModeContext from "@/theme/CustomThemeProvider";
  
  export default function SignupForm() {
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
          label="Email"
          placeholder="Enter email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
  
        <TextField
          label="Password"
          placeholder="Enter your password"
          type={seePassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={() => setSeepassword(!seePassword)}>
                  {seePassword ? <VscEye /> : <VscEyeClosed />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "#eeeeee",
            borderRadius: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: 3,
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
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
        >
          Create Account
        </Button>
          <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={'center'}
          width={'100%'}
          gap={1}
        >
          <Typography variant="body2" color={"text.secondary"} fontWeight={500}>
            Already have an account?
          </Typography>
          <Link style={{ textDecoration: "none" }} href={"/login"}>
            <Typography variant="body2" color={"text.primary"} fontWeight={500} sx={{textDecoration: 'underline'}}>
              Login here
            </Typography>
          </Link>
  
        </Box>
  
  
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Box width={"44%"} height={"1px"} bgcolor={"divider"}></Box>
          <Typography
            variant="body2"
            textTransform={"none"}
            fontWeight={400}
            color={"text.secondary"}
          >
            OR
          </Typography>
          <Box width={"44%"} height={"1px"} bgcolor={"divider"}></Box>
        </Box>
        <Button
          variant="outlined"
          startIcon={<FcGoogle />}
          sx={{
            height: 54,
            boxShadow: 0,
            borderRadius: "16px",
            border: "1px #bebebe solid",
          }}
        >
          <Typography
            variant="body1"
            textTransform={"none"}
            fontWeight={500}
            color={"text.primary"}
          >
            Continue with Google
          </Typography>
        </Button>
      </Stack>
    );
  }
  