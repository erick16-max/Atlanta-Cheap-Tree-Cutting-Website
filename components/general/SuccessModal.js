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
} from "@mui/material";
import AppContext from "@/context/AppContext";
import DateFieldPicker from "@/app/booking/components/steps/DateFieldPicker";
import TimeFieldPicker from "@/app/booking/components/steps/TimeFieldPicker";
import useBookings from "@/hooks/useBookings";
import ColorModeContext from "@/theme/CustomThemeProvider";
import SelectBookingStatus from "./SelectBookingStatus";
import { updateBookingStatus } from "@/firebase/Booking";

export default function UpdateStatusModal({ open, setOpen }) {
  const { isMobile } = useContext(ColorModeContext);
  const { bookingObj, selectedItemId, setBookingTableData } =
    useContext(AppContext);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdateStatus = async () => {
    try {
      setLoading(true);
      const response = await updateBookingStatus(
        selectedItemId,
        status,
        setBookingTableData
      );
      if (response === "success") {
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        width={isMobile ? "94%" : 600}
        maxHeight="90vh"
        bgcolor={"#ffffff"}
        borderRadius={2}
        boxShadow={3}
        p={3}
        sx={{
          overflowY: "auto",
        }}
      >
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6">Update Booking Status</Typography>
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
          <SelectBookingStatus setStatus={setStatus} status={status} />
          <Button
            variant="contained"
            sx={{
              height: 55,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "12px",
            }}
            onClick={handleUpdateStatus}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={20} thickness={4} />
            ) : (
              "Update Status"
            )}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
