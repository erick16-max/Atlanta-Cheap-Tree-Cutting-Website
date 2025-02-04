import React, { useContext, useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { bookingStatus } from "@/constants/AppConstants";
import AppContext from "@/context/AppContext";

const SelectBookingStatus = ({status, setStatus}) => {
    const {bookingObj} = useContext(AppContext)

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Status</InputLabel>
      <Select value={status || bookingObj?.status} onChange={handleChange} label="Status">
        <MenuItem value={bookingStatus.REJECTED}>Cancelled</MenuItem>
        <MenuItem value={bookingStatus.PENDING}>Pending</MenuItem>
        <MenuItem value={bookingStatus.COMPLETED}>Completed</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectBookingStatus;
