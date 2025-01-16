"use client";
import React, { useContext, useState, useEffect } from "react";
import {
  Modal,
  Typography,
  Box,
  Stack,
  TextField,
  CircularProgress,
  Button,
  Alert,
  IconButton,
} from "@mui/material";
import PhoneNumberField from "./CustomPhoneNumber";
import FinishProfileAccountImage from "../../public/finishprofile.svg";
import Image from "next/image";
import ColorModeContext from "@/theme/CustomThemeProvider";
import { db } from "@/firebase.config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import AppContext from "@/context/AppContext";
import { FaLongArrowAltRight } from "react-icons/fa";
import { steps } from "@/constants/AppConstants";
import { useRouter } from "next/navigation";

export default function GuestUserAccountModal() {
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);
  const { isMobile } = useContext(ColorModeContext);
  const {
    user,
    isUser,
    successAlert,
    setSuccessAlert,
    guestUserModal,
    setGuestUserModal,
    fullname,
    setFullname,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    setActiveStep,
  } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    if (isUser) {
        setGuestUserModal(false);
    }else{
        if (!email || !fullname || !phoneNumber || phoneError) {
          setGuestUserModal(true);
          setActiveStep(steps.step1);
        }
    }
  }, [phoneNumber, fullname, email, router]);

  const handleNext = () => {
    setGuestUserModal(false);
  };

  return (
    <Modal open={guestUserModal}>
      <Box
        width={"100vw"}
        height={"100vh"}
        display={"flex"}
        bgcolor={"rgba(0,0,0, 0.6)"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          width={isMobile ? "96vw" : 500}
          bgcolor={"#ffffff"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          px={isMobile ? 3 : 5}
          py={3}
          gap={3}
          borderRadius={"12px"}
        >
          <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <IconButton
              onClick={() => router.push("/")}
              sx={{
                backgroundColor: "#eee",
                width: 30,
                height: 30,
                borderRadius: "6px",
                p: "2px,",
                fontSize: 22,
              }}
            >
              x
            </IconButton>
          </Box>
          <Stack
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            py={2}
          >
            <Image
              src={FinishProfileAccountImage}
              alt="finish account"
              height={100}
            />
            <Typography
              variant="h5"
              fontWeight={700}
              color={"text.primary"}
              gutterBottom
              textAlign={"center"}
            >
              Fill in your contact information
            </Typography>
            {error && (
              <Alert severity="error" variant="filled">
                {error}
              </Alert>
            )}
          </Stack>

          {/* fullname field */}

          <TextField
            label="Fullnames"
            placeholder="Enter Fullname"
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
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
          {/* phone field */}
          <PhoneNumberField
            label={"Phone Number"}
            setPhoneError={setPhoneError}
            setPhoneNumber={setPhoneNumber}
            phoneError={phoneError}
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
            disabled={phoneError || !fullname || !email}
            endIcon={<FaLongArrowAltRight />}
            onClick={handleNext}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
