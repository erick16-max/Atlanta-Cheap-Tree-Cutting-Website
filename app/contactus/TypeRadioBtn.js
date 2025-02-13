import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { alertList } from '@/constants/AppConstants';

export default function TypeRadioBtn({value, setValue}) {
    
  

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Type</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel value={alertList.MESSAGE} control={<Radio size='small'/>} label={"Get Free Quote"} />
        <FormControlLabel value={alertList.FEEDBACK} control={<Radio size='small'/>} label={alertList.FEEDBACK} />
      </RadioGroup>
    </FormControl>
  );
}
