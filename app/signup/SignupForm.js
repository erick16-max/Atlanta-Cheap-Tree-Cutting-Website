import {
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import ColorModeContext from "@/theme/CustomThemeProvider";
import { createUser } from "@/firebase/Firebase";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase.config";
import AppContext from "@/context/AppContext";
import { signInWithGoogle } from "@/firebase/Firebase";

export default function SignupForm() {
  const [loading, setLoading] = React.useState(false);
  const [googleLoading, setGoogleLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [seePassword, setSeepassword] = React.useState(false);

  const {user, setUser} = useContext(AppContext)

  const router = useRouter();

  useEffect(() => {
    // Liten to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Storse user in localStorage
        localStorage.setItem("user", JSON.stringify(user));
        const activeUser = JSON.parse(localStorage.getItem("user"));
        setUser(activeUser);
        router.push("/");
      } else {
        // Clear localStorage if no user is signed in
        localStorage.removeItem("user");
        setUser(null);
      }
    });

    return unsubscribe; // Clean up on unmount
  }, []);

  const handleCreateUser = async (e) => {
    e.preventDefault()
    try {
      setLoading(true);
      const user = await createUser(email, password);
      if (user) {
        localStorage.setItem('finishaccount', JSON.stringify({
          isProfile: true
        }))
        router.push("/");
        setPassword("")
        setEmail("")
      }
    } catch (error) {
      console.log(error);
      const cleanError = error.message.replace("Firebase:", "").trim();
      setIsError(cleanError);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setIsError("");
      }, 4000);
    }
  };

   // login with google auth
    const handleGoogleSignIn = async () => {
      try {
        setGoogleLoading(true);
        const user = await signInWithGoogle();
        // Redirect to the protected route or home page
        if (user) {
          localStorage.setItem('finishaccount', JSON.stringify({
            isProfile: true
          }))
          router.push("/");
          setPassword("")
          setEmail("")
        }
      } catch (error) {
        const cleanError = error.message.replace("Firebase:", "").trim();
        setIsError(cleanError);
      } finally {
        setGoogleLoading(false);
        setTimeout(() => {
          setIsError("");
        }, 3000);
      }
    };

  return (
    <Stack width={"100%"} component={"form"} gap={3} onSubmit={handleCreateUser}>
      {isError && (
        <Alert variant="filled" severity="error">
          {isError || "Something went wrong -- try again!"}
        </Alert>
      )}

      <Stack></Stack>
      <TextField
        label="Email"
        placeholder="Enter email"
        type="email"
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
          "&.Mui-disabled": {
            backgroundColor: "primary.light",
          },
        }}
        type="submit"
        disabled={loading || googleLoading}
        
      >
        {loading ? (
          <CircularProgress thickness={4} size={22} sx={{ color: "#f5f5f5" }} />
        ) : (
          "Create Account"
        )}
      </Button>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        gap={1}
      >
        <Typography variant="body2" color={"text.secondary"} fontWeight={500}>
          Already have an account?
        </Typography>
        <Link style={{ textDecoration: "none" }} href={"/login"}>
          <Typography
            variant="body2"
            color={"text.primary"}
            fontWeight={500}
            sx={{ textDecoration: "underline" }}
          >
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
        onClick={handleGoogleSignIn}
        disabled={loading || googleLoading}
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
