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
const CustomTextField = ({
  label,
  type,
  setValue,
  value,
  placeholder,
  keyValue,
}) => (
  <TextField
    label={label}
    placeholder={placeholder}
    type={type}
    value={value || ""}
    onChange={(e) => {
      setValue((prev) => ({ ...prev, [keyValue]: e.target.value }));
    }}
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
);

export default function UpdateBookingModal({ open, setOpen }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const {
    selectedItemId,
    bookings,
    bookingObj,
    setBookingObj,
    surveyTime,
    setSurveyTime,
    surveyDate,
    setSurveyDate,
  } = useContext(AppContext);

  const {updateBooking, actionLoading} = useBookings()


  useEffect(() => {
    setBookingObj((prev) => ({
      ...prev,
      surveyDate: surveyDate,
      surveyTime: surveyTime,
    }));
  }, [surveyDate, surveyTime]);

  const handleBookingUpdate = async() => {
    try {
        const response = await updateBooking(selectedItemId, bookingObj)
        if(response === "success"){
            setOpen(false)
        }
    } catch (error) {
        console.log(error)
    }
    
  }

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)} // Allow closing by clicking outside
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(0, 0, 0, 0.5)", // Background overlay
      }}
    >
      <Box
        width={600}
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
          <Typography variant="h6">Update Booking</Typography>
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
        {/* Your form or content here */}
        <Stack width={"100%"} component={"div"} mt={4} gap={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <CustomTextField
                value={bookingObj?.fullname}
                type={"text"}
                label={"Who booked?"}
                placeholder={"Enter fullname"}
                keyValue={"fullname"}
                setValue={setBookingObj}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                value={bookingObj?.email}
                type={"text"}
                label={"Contact email"}
                placeholder={"Enter email"}
                keyValue={"email"}
                setValue={setBookingObj}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                value={bookingObj?.address}
                type={"text"}
                label={"Address"}
                placeholder={"Enter location"}
                keyValue={"address"}
                setValue={setBookingObj}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                value={bookingObj?.phoneNumber}
                type={"number"}
                label={"Contact Number"}
                placeholder={"Enter number"}
                keyValue={"phoneNumber"}
                setValue={setBookingObj}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                value={bookingObj?.budget}
                type={"number"}
                label={"Your Budget(USD)"}
                placeholder={"Enter Budget in USG"}
                keyValue={"budget"}
                setValue={setBookingObj}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <DateFieldPicker
                value={bookingObj?.surveyDate}
                setValue={setSurveyDate}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TimeFieldPicker
                label={bookingObj?.surveyTime}
                formattedTime={bookingObj?.surveyTime}
                setFormattedTime={setSurveyTime}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={"Additional Notes"}
                placeholder={
                  "Provide more info , instructions or additional notes...."
                }
                type={"text"}
                value={bookingObj?.notes}
                onChange={(e) => {
                  setBookingObj((prev) => ({ ...prev, notes: e.target.value }));
                }}
                fullWidth
                multiline
                rows={3}
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
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{
              height: 55,
              width: "100%",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "12px",
            }}
            onClick={handleBookingUpdate}
            disabled={actionLoading}
          >
            {actionLoading ? <CircularProgress size={20} thickness={4}/> : "Update"}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
