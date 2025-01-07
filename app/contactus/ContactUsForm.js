import PhoneNumberField from "@/components/finishaccount/CustomPhoneNumber";
import { Card, Stack, Typography, TextField, Button } from "@mui/material";
import React, {useState} from "react";

export default function ContactUsForm() {
      const [phoneNumber, setPhoneNumber] = useState("")
        const [error, setError] = useState("")
        const [phoneError, setPhoneError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handle submit")
    }


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
        <Typography variant="h6" color={"text.primary"} fontWeight={600}>
          Contact Us <br></br>
        </Typography>
        <span
          style={{
            color: "#666",
            fontWeight: 400,
            fontSize: 14,
          }}
        >
          Make an inquiry, give feedback or opinion
        </span>
      </Stack>
          <Stack component={'form'} onSubmit={handleSubmit} width={'100%'} gap={3}>
             <TextField
                    label="Fullname"
                    placeholder="Enter your Fullname"
                    type="text"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
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

                   <TextField
                    label="Address"
                    placeholder="Enter your Address"
                    type="text"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
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
                   <TextField
                    label="Email"
                    placeholder="Enter your Email"
                    type="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
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
                
                <TextField
                    label="Message"
                    placeholder="Enter your Message"
                    type="text"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
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

                <Button
                    variant="contained"
                    sx={{
                        height: 55,
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontWeight: 600
                    }}
                    type="submit"
                >
                    Submit Details
                </Button>

          </Stack>
    </Card>
  );
}
