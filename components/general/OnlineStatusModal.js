"use client"
import React, { useContext, useState } from "react";
import {
  Modal,
  Typography,
  Box,
  Stack,
  Button,
  CircularProgress,
} from "@mui/material";
import { useInternetStatus } from "@/hooks/useInternetStatus";
import AppContext from "@/context/AppContext";
import { MdSignalWifiConnectedNoInternet1 } from "react-icons/md";

export default function OnlineStatusModal() {
  const { isMobile } = useContext(AppContext);
  const isOnline = useInternetStatus();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleTryAgain = () => {
    // Show loader while refreshing
    setIsRefreshing(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000); // Optional delay for better UX
  };

  return (
    <Modal open={!isOnline}>
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
            <MdSignalWifiConnectedNoInternet1 fontSize={100} />
            <Typography variant="h6" fontWeight={500} color={"text.secondary"}>
              Oops! You are disconnected from the internet.
            </Typography>
          </Stack>

          {isRefreshing ? (
            <CircularProgress color="error" />
          ) : (
            <Button
              variant="contained"
              color="error"
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
              onClick={handleTryAgain}
            >
              Try again
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
}
