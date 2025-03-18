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
import TimeRangePicker from "@/app/booking/components/steps/TimeRangePicker";
import { bookingStatus, timeRanges } from "@/constants/AppConstants";
import { sendCustomEmail, sendEmail } from "@/util/sendEmail";

export default function UpdateStatusModal({ open, setOpen }) {
  const { isMobile } = useContext(ColorModeContext);
  const {
    bookingObj,
    selectedItemId,
    activeLabel,
    setActiveLabel,
    setBookingTableData,
    setSurveyDate,
    setSurveyTime,
    surveyDate,
    surveyTime,
  } = useContext(AppContext);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeLabel === "") return;
    const currentSurveyTime = timeRanges.find(
      (time) => time.id === activeLabel
    ).name;
    setSurveyTime(currentSurveyTime);
  }, [activeLabel]);

  useEffect(() => {
    setSurveyDate(bookingObj?.surveyDate)
  }, [bookingObj])

  let message =
    status === bookingStatus.COMPLETED
      ? "Your booking was approved successfully for survey"
      : status === bookingStatus?.REJECTED
      ? "Your booking was rejected, please call us for further information"
      : "Your booking is still under review. We promise to provide feedback as soon as possible";
    console.log(surveyDate)
  const handleUpdateStatus = async () => {
    try {
      setLoading(true);
      const response = await updateBookingStatus(
        selectedItemId,
        status,
        setBookingTableData,
        surveyDate,
        surveyTime
      );
      if (response === "success") {
        try {
          if(status === bookingStatus.COMPLETED){
            
            sendCustomEmail(bookingObj?.email, message, surveyTime, surveyDate, bookingObj?.fullname, bookingObj?.address);
          }else{
            sendEmail(bookingObj?.email, message)
          }
        } catch (error) {
          console.log("error sending update emails:", error)
        }finally{
         setOpen(false);

       }
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
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
          <DateFieldPicker
            value={surveyDate || bookingObj?.surveyDate}
            setValue={setSurveyDate}
          />
          <TimeRangePicker
            activeLabel={activeLabel}
            setActiveLabel={setActiveLabel}
          />
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
              "Update Booking"
            )}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
