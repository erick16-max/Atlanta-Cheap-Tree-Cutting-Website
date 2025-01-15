import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import AppContext from '@/context/AppContext';
import dayjs from 'dayjs';

export default function TimeFieldPicker({formattedTime, setFormattedTime}) {

  const [rawTime, setRawTime] = React.useState(() => {
     if(typeof window === undefined) return
     return localStorage.getItem("rawTime") || "";
   })

  React.useEffect(() => {
    if (rawTime) {
      setFormattedTime(dayjs(rawTime).format('h:mm A'));
      localStorage.setItem("rawTime", rawTime);

    }
  }, [rawTime]);

  console.log(rawTime)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="Time for Survey"
        value={rawTime || formattedTime}
        onChange={(newValue) => {
          if (newValue) {
            setRawTime(newValue); 
          }
         
        }}
        renderInput={(params) => <TextField 
        {...params}
        fullWidth
        required
        error={false}
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
         />}
      />
    </LocalizationProvider>
  );
}
