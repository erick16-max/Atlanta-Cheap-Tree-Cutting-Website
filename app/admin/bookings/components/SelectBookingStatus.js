import React, { useContext, useEffect, useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { bookingStatus } from "@/constants/AppConstants";
import AppContext from "@/context/AppContext";

const SelectBookingStatus = ({status, setStatus}) => {
    const {bookingObj} = useContext(AppContext)

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

 useEffect(() => {
  setStatus(bookingObj?.status)
 }, [bookingObj])
 
  return (
    <FormControl fullWidth>
      <InputLabel>Status</InputLabel>
      <Select 
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
          },
          "&.Mui-focused": {
            borderRadius: 3,

          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderRadius: 3,
          border: 'none',

        },
        "& .MuiInputBase-root": {
          "&:autofill": {
            borderRadius: 3,
            boxShadow: "0 0 0 1000px #eeeeee inset",
          },
        },
      }}
      value={status || bookingObj?.status} onChange={handleChange} label="Status">
        <MenuItem value={bookingStatus.REJECTED}>Canceled/Rejected</MenuItem>
        <MenuItem value={bookingStatus.PENDING}>Pending</MenuItem>
        <MenuItem value={bookingStatus.COMPLETED}>Completed</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectBookingStatus;
