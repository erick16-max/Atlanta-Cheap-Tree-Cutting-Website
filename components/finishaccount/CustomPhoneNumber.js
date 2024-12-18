import {
    MuiTelInput,
    MuiTelInputCountry,
    MuiTelInputInfo,
    MuiTelInputContinent,
    matchIsValidTel 
  } from 'mui-tel-input'
  import React from 'react'

  
  
    const PhoneNumberField = ({ phoneError, setPhoneError, setPhoneNumber, label}) => {
      const phoneRef = React.useRef();
      const [value, setValue] = React.useState('')
      const continents = ['EU']
      const excludedCountries = ['FR']


  
    const handleChange = (newValue, info) => {
      setValue(newValue)
      if (!matchIsValidTel(phoneRef.current?.value)) {
        setPhoneError('Invalid phone number');
      } else {
        setPhoneError('');
      }
      setPhoneNumber(newValue)
              
    }


  
    return (
      <MuiTelInput
        fullWidth
        variant="outlined"
        label={label ? label : "Phone Number"}
        placeholder="+254712345678"
        required
        value={value}
        onChange={handleChange}
        inputRef={phoneRef}
        error={phoneError !== ""}
        helperText={phoneError !== "" ? phoneError :  ""}
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
        defaultCountry='US'
      />
    )
  }

  export default PhoneNumberField