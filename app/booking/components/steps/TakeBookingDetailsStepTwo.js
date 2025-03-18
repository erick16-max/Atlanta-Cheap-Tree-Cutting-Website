import {
  Card,
  Grid,
  Checkbox,
  Stack,
  Typography,
  LinearProgress,
  Box,
  Button,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import CustomLinearProgress from "./CustomLinearProgress";
import DateFieldPicker from "./DateFieldPicker";
import TimeFieldPicker from "./TimeFieldPicker";
import AppContext from "@/context/AppContext";
import { steps } from "@/constants/AppConstants";


const CustomTextField = ({ label, type, setValue, value, placeholder }) => (
  <TextField
    label={label}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(e) => {
      setValue(e.target.value)
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
export default function TakeBookingDetailsStepTwo() {

  
  const { setActiveStep, address, setAddress, budget, notes, setNotes, setBudget, surveyTime, setSurveyTime, surveyDate, setSurveyDate} = useContext(AppContext);
  
  const isDisabled = !address || !surveyTime || !surveyDate 
  





  return (
    <Stack width={"100%"} component={"div"} gap={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CustomTextField
            value={address}
            setValue={setAddress}
            type={"text"}
            label={"Address"}
            placeholder={"Enter location"}
          />
        </Grid>
        {/* <Grid item  xs={12} sm={12} md={6} lg={6}>
          <CustomTextField
            value={budget}
            setValue={setBudget}
            type={"number"}
            label={"What's your Budget?"}
            placeholder={"Enter amount in USD here.."}
          />
        </Grid> */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <DateFieldPicker value={surveyDate} setValue={setSurveyDate} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <TimeFieldPicker formattedTime={surveyTime} setFormattedTime={setSurveyTime} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={"Additional Notes"}
            placeholder={
              "Provide more info , instructions or additional notes...."
            }
            type={"text"}
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value)
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
      <Stack
        direction="row"
        width="100%" // Ensure the parent has a width
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            py: 1,
            px: 3,
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
          }}
          onClick={() => setActiveStep(steps.step1)}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          sx={{
            py: 1,
            px: 3,
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
          }}
          endIcon={<MdArrowRightAlt />}
          onClick={() => setActiveStep(steps.step4)}
          disabled={isDisabled}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
}
