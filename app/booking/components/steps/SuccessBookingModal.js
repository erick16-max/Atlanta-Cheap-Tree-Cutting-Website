"use client"
import React, { useContext, useState } from "react";
import {
  Modal,
  Typography,
  Box,
  Stack,
  Button,
  CircularProgress,
  Alert,
  AlertTitle,
} from "@mui/material";
import { MdSignalWifiConnectedNoInternet1 } from "react-icons/md";
import { FcAcceptDatabase } from "react-icons/fc";
import AppContext from "@/context/AppContext";
import { steps } from "@/constants/AppConstants";
import ColorModeContext from "@/theme/CustomThemeProvider";

export default function SuccessBookingModal({open, setOpen}) {
  const { setActiveStep } = useContext(AppContext);
  const {isMobile} = useContext(ColorModeContext)




  return (
    <Modal open={open}>
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
          <Stack
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            py={2}
          >
            <FcAcceptDatabase fontSize={100} />
        <Stack>
        <Typography textAlign={'center'} variant="h6" fontWeight={700} color={"text.primary"} gutterBottom>
              Your booking was successfully received for review!
            </Typography>
            <Alert severity="info">
                <AlertTitle>
                    Once the review is complete, you will be notified through website, Email or SMS.
                </AlertTitle>
            </Alert>
        </Stack>
          </Stack>

          
            <Button
              variant="contained"
              fullWidth
              sx={{
                textTransform: "none",
                fontWeight: 600,
                height: 50,
                borderRadius: "16px",
                "&.Mui-disabled": {
                  backgroundColor: "primary.light",
                },
              }}
              onClick={() => {
                setOpen(false)
                setActiveStep(steps.step1)
                router.push("/")

              }}
            >
               Done
            </Button>
         
        </Box>
      </Box>
    </Modal>
  );
}
