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
  Chip,
} from "@mui/material";
import AppContext from "@/context/AppContext";
import DateFieldPicker from "@/app/booking/components/steps/DateFieldPicker";
import TimeFieldPicker from "@/app/booking/components/steps/TimeFieldPicker";
import useBookings from "@/hooks/useBookings";
import ColorModeContext from "@/theme/CustomThemeProvider";
import SelectBookingStatus from "./SelectBookingStatus";
import { updateBookingStatus } from "@/firebase/Booking";
import { FaLongArrowAltRight } from "react-icons/fa";
import { bookingStatus } from "@/constants/AppConstants";

export default function ViewBookingModal({ open, setOpen, setOpenUpdate }) {
  const { isMobile } = useContext(ColorModeContext);
  const { bookingObj, selectedItemId, setBookingTableData } =
    useContext(AppContext);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // console.log(bookingObj);
  const chipColor =
    bookingObj?.status === bookingStatus.PENDING
      ? "warning.main"
      : bookingObj?.status === bookingStatus.COMPLETED
      ? "success.main"
      : bookingObj?.status === bookingStatus.REJECTED
      ? "error.main"
      : "secondary.main";

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
    } finally {
      setLoading(false);
    }
  };

  const goToUpdate = () => {
    setOpen(!open);
    setOpenUpdate(true);
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)} // Allow closing by clicking outside
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(0, 0, 0, 0.1)", // Background overlay
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
        gap={3}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
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
        <Stack width={"100%"}>
          <Stack>
            <Typography variant="h6" fontWeight={600}>
              Who Booked?
            </Typography>
            <Stack>
              <Typography
                color={"text.secondary"}
                variant="body2"
                fontSize={15}
                fontWeight={500}
              >
                <b>Name:</b> {bookingObj?.fullname}
              </Typography>
              <Typography
                color={"text.secondary"}
                variant="body2"
                fontSize={15}
                fontWeight={500}
              >
                <b>Email:</b> {bookingObj?.email}
              </Typography>
              <Typography
                color={"text.secondary"}
                variant="body2"
                fontSize={15}
                fontWeight={500}
              >
                <b>Phone:</b> {bookingObj?.phoneNumber}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack width={"100%"}>
          <Stack>
            <Typography variant="h6" fontWeight={600}>
              More Details...
            </Typography>
            <Stack>
              <Typography
                color={"text.secondary"}
                variant="body2"
                fontSize={15}
                fontWeight={500}
              >
                <b>Address:</b> {bookingObj?.address}
              </Typography>
              <Typography
                color={"text.secondary"}
                variant="body2"
                fontSize={15}
                fontWeight={500}
              >
                <b>Survey Date:</b> {bookingObj?.surveyDate}
              </Typography>
              <Typography
                color={"text.secondary"}
                variant="body2"
                fontSize={15}
                fontWeight={500}
              >
                <b>Survey Time:</b> {bookingObj?.surveyTime}
              </Typography>
              {bookingObj?.notes && (
                <Typography
                  color={"text.secondary"}
                  variant="body2"
                  fontSize={15}
                  fontWeight={500}
                >
                  <b>Additional notes:</b> {bookingObj?.notes}
                </Typography>
              )}
              <Box display={"flex"} alignItems={"center"} gap={1} mt={2}>
                <Typography
                  color={"text.secondary"}
                  variant="body2"
                  fontSize={15}
                  fontWeight={500}
                >
                  <b>Status:</b>
                </Typography>
                <Chip
                  label={bookingObj?.status}
                  size="small"
                  sx={{
                    borderRadius: 1,
                    backgroundColor: "#f5f5f5",
                    color: chipColor,
                    fontWeight: 600,
                  }}
                />
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Button
          variant="contained"
          sx={{
            height: 50,
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "12px",
          }}
          endIcon={<FaLongArrowAltRight />}
          onClick={goToUpdate}
        >
          Update Booking
        </Button>
      </Box>
    </Modal>
  );
}
