import PhoneNumberField from "@/components/finishaccount/CustomPhoneNumber";
import { alertList } from "@/constants/AppConstants";
import { Card, Stack, Typography, TextField, Button, Alert, CircularProgress } from "@mui/material";
import React, {useEffect, useState} from "react";
import TypeRadioBtn from "./TypeRadioBtn";
import RatingField from "./RatingField";
import { SubmitMessage } from "@/firebase/FirebaseUser";
import { sendCustomSms } from "@/util/sendSms";





export default function ContactUsForm() {
      const initialData = {
        type: alertList.MESSAGE,
        fullname: "",
        email: "",
        phone: "",
        address: "",
        rate: "",
        message: "",
        isApproved: false,
      }
      const [phoneNumber, setPhoneNumber] = useState("")
      const [loading, setLoading] = useState(false)
        const [error, setError] = useState("")
        const [success, setSuccess] = useState("")
        const [phoneError, setPhoneError] = useState("")
        const [value, setValue] = React.useState(alertList.MESSAGE)
         const [rateValue, setRateValue] = React.useState(2);
        const [data, setData] = useState(initialData)

    

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
          setLoading(true)
         
          const response = await SubmitMessage(data)
          if(response === "success"){
            try {
              if (data.type !== alertList.MESSAGE) return
              const customMessage = `Fullname: ${data.fullname}, Phone Number: ${data.phone}, email: ${data.email}, message: ${data.message}`
              
              await sendCustomSms(customMessage, process.env.NEXT_PUBLIC_SMS_PHONE_NUMBER)
            } catch (error) {
              
            }
            setSuccess(`${value} submitted successfully!`)
            setTimeout(()=> {setData(initialData)}, 4000)
            setPhoneNumber("")
          }else{
            setError("Something went wrong -- try again!")
          }
        } catch (error) {
          setError("Something went wrong -- try again!")
          
        }finally{
          setLoading(false)
          setTimeout(() => {
            setError("")
            setSuccess("")
          }, 4000)
        }

       
    }

    useEffect(() => {
      console.log(phoneNumber);
      setData((prevData) => ({
        ...prevData,
        phone: phoneNumber.replace(/[^\d]/g, ""),
        type: value,
      }));
    }, [phoneNumber, value]);

  return (
    <Card
      sx={{
        backgroundColor: "#ffffff",
        width: "100%",
        display: "flex",
        boxShadow: 0,
        p: 3,
        flexDirection: "column",
        gap: 3,
        my: 2,
      }}
    >
      <Stack>
        <span
          style={{
            color: "#666",
            fontWeight: 400,
            fontSize: 14,
          }}
        >
          Write to us to get a free quote or leave some feedback 
        </span>
      </Stack>
          <Stack component={'form'} onSubmit={handleSubmit} width={'100%'} gap={3}>

            <TypeRadioBtn
            value={value}
            setValue={setValue} 
            />
             <TextField
                    label="Fullname"
                    placeholder="Enter your Fullname"
                    type="text"
                    value={data?.fullname}
                    onChange={(e) => setData({...data, fullname: e.target.value})}
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

                  {
                    value === alertList.MESSAGE && (
                      <TextField
                      label="Address"
                      placeholder="Enter your Address"
                      type="text"
                      value={data?.address}
                      onChange={(e) => setData({...data, address: e.target.value, rate: ""})}
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
                    )
                  }
                   <TextField
                    label="Email"
                    placeholder="Enter your Email"
                    type="email"
                    value={data?.email}
                    onChange={(e) => setData({...data, email: e.target.value})}
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

                  <PhoneNumberField 
                    phoneError={phoneError}
                    setPhoneError={setPhoneError}
                    setPhoneNumber={setPhoneNumber}
                  />

{
                    value === alertList.FEEDBACK && (
                      <TextField
                      label="Rate us(1 to 5)"
                      placeholder="Enter your rating from 1-5"
                      type="number"
                      value={data?.rate}
                      onChange={(e) => setData({...data, rate: e.target.value, address: ""})}
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
                    )
                  }

                
                <TextField
                    label="Message"
                    placeholder="Enter your Message"
                    type="text"
                    value={data?.message}
                    onChange={(e) => setData({...data, message: e.target.value})}
                    required
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
                
                {error && <Alert severity="error"><strong>{error}</strong></Alert>}
                {success && <Alert severity="success"><strong>{success}</strong></Alert>}

                <Button
                    variant="contained"
                    sx={{
                        height: 55,
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontWeight: 600
                    }}
                    type="submit"
                    disabled={loading}
                >
                    {loading ? (
                      <CircularProgress size={20} thickness={4} sx={{color: 'primary.main'}}/>
                    ): "Submit Details"}
                </Button>

          </Stack>
    </Card>
  );
}
