import React, { useContext, useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { bookingStatus } from "@/constants/AppConstants";
import AppContext from "@/context/AppContext";

const SelectUserField = ({status, setStatus}) => {
    const {userObj} = useContext(AppContext)

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const user = {
    ADMIN: 'Admin',
    USER: 'User'
  }
  return (
    <FormControl fullWidth>
      <InputLabel>User Type</InputLabel>
      <Select value={status } onChange={handleChange} label="Status">
        <MenuItem value={user.ADMIN}>Admin</MenuItem>
        <MenuItem value={user.USER}>User</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectUserField;
