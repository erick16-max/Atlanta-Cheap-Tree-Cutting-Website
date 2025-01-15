import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AppContext from '@/context/AppContext';
import dayjs from 'dayjs';

export default function DateFieldPicker({value, setValue}) {
 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date for Survey"
          value={value || null}
        onChange={(newValue) => {
          const formattedDate = dayjs(newValue).format('YYYY-MM-DD');
          setValue(formattedDate);
        }}
        renderInput={(params) => <TextField 
            {...params} 
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

            />}
      />
    </LocalizationProvider>
  );
}