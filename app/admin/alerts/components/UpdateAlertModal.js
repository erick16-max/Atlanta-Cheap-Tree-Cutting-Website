import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Stack,
  Grid,
  TextField,
  Button,
  IconButton,
  CircularProgress,
  Rating,
} from "@mui/material";
import AppContext from "@/context/AppContext";
import ColorModeContext from "@/theme/CustomThemeProvider";
import RatingField from "@/app/contactus/RatingField";
import ApprovalCheckbox from "./ApproveCheckbox";

export default function UpdateAlertModal({ open, setOpen }) {
  const { isMobile } = useContext(ColorModeContext);
  const { alertObj, setAlertObj, selectedItemId } = useContext(AppContext);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)} // Allow closing by clicking outside
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(0, 0, 0, 0.9)", // Background overlay
      }}
    >
      <Box
        width={isMobile ? "94%" : 600}
        maxHeight="90vh" // Ensures modal doesn't overflow screen height
        bgcolor={"#ffffff"}
        borderRadius={2}
        boxShadow={3}
        p={3}
        sx={{
          overflowY: "auto", // Enables vertical scroll if content overflows
        }}
      >
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography sx={{ textDecoration: "underline" }} variant="h6">
            {alertObj?.type}
          </Typography>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              borderRadius: 1,
              width: 40,
              height: 40,
              fontSize: 22,
            }}
          >
            x
          </IconButton>
        </Box>

        <Stack gap={2} mt={3}>
          <Typography>
            <strong>Fullname:</strong> {alertObj?.fullname}
          </Typography>
          <Typography>
            <strong>Email:</strong> {alertObj?.email}
          </Typography>
          <Typography>
            <strong>Phone Number:</strong> {alertObj?.phone}
          </Typography>
          {alertObj?.address && (
            <Typography>
              <strong>Address:</strong> {alertObj?.address}
            </Typography>
          )}

            <Typography component={'div'}
                sx={{
                    display: alertObj?.rate ? 'flex' : 'none',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
              <strong>Rating:</strong>  <Rating name="disabled" value={alertObj?.rate} disabled />
            </Typography>

          <Typography>
            <strong>{alertObj?.type}:</strong>
            <br></br> {alertObj?.message}
          </Typography>
          {
            alertObj?.type === "Feedback" && (
                <ApprovalCheckbox 
            messageId={alertObj?.id}
            setOpen={setOpen}
          />
            )
          }
         
        </Stack>
      </Box>
    </Modal>
  );
}
