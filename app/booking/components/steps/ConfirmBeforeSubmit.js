import {
  Box,
  Typography,
  Stack,
  Chip,
  Button,
  Divider,
  Alert,
  CircularProgress,
  AlertTitle,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { SiTicktick } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import { MdEditSquare } from "react-icons/md";
import { MdEmail, MdPhone } from "react-icons/md";
import ColorModeContext from "@/theme/CustomThemeProvider";
import AppContext from "@/context/AppContext";
import { steps } from "@/constants/AppConstants";
import { isArray, usdFormatter } from "@/util/LogicFunctions";
import { SubmitBooking } from "@/firebase/Booking";
import SuccessBookingModal from "./SuccessBookingModal";
import { useRouter } from "next/navigation";
import PageLoader from "@/components/general/PageLoader";

export default function ConfirmBeforeSubmit() {
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)

  const { isMobile } = useContext(ColorModeContext);
  const router = useRouter()
  
  const {
    setActiveStep,
    address,
    budget,
    notes,
    surveyTime,
    surveyDate,
    userProfile,
    borkingServiceList,
  } = useContext(AppContext);

  const serviceCount = isArray(borkingServiceList) ? borkingServiceList?.length : 0

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDone = () => {
    try {
      setShow(true)
      localStorage.removeItem("address")
      localStorage.removeItem("budget")
      localStorage.removeItem("surveyDate")
      localStorage.removeItem("surveyTime")
      localStorage.removeItem("notes")
      localStorage.removeItem("bookingDetails")
      localStorage.removeItem("borkingServiceList")
      localStorage.removeItem("rawTime")
      setActiveStep(steps.step1)
      setOpen(false)
      router.push('/')
    } catch (error) {
      console.log(error)
    }finally{
      setTimeout(() => {
        setShow(false)
      }, 4000)
    }
    

 }


  const handleSubmitBooking = async () => {
    const bookingData = {
      contactInfo: {
        phoneNumber: userProfile?.phoneNumber,
        email: userProfile?.email,
        fullname: userProfile?.displayName
      },
      bookingInfo: {
        address, notes, surveyDate, surveyTime,budget
      },
      services: borkingServiceList?.map(item => item.title),
    }

    try {
      setLoading(true)
      const response = await SubmitBooking(bookingData)
      if(response === "success"){
        console.log("success")
        setOpen(true)
      }else{
        console.log(response)
        setError(`${response}`)
      }
    } catch (error) {
      console.log(error)
      setError(`${error}`)
    }finally{
      setLoading(false)
      setTimeout(() => {
        setError("")
        setOpen(false)
        handleDone()
      }, 8000)
    }
  }

  if(show) return <PageLoader />

  return (
    <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={3}>
      <Stack>
        <Typography variant="h6" color={"text.primary"} fontWeight={700}>
          Confirm your Booking
        </Typography>
        <Alert severity="warning">
          Please confirm everything before submitting your booking details.
        </Alert>
      </Stack>

      {/* contanct info */}
      <Stack>
        <Typography
          variant="body1"
          fontWeight={600}
          color={"text.primary"}
          gutterBottom
        >
          Contact info:
        </Typography>
        <Typography
          variant="body2"
          fontWeight={400}
          color={"text.secondary"}
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <MdPhone />
          {`+${userProfile?.phoneNumber}`}
        </Typography>
        <Typography
          variant="body2"
          fontWeight={400}
          color={"text.secondary"}
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <MdEmail />
          {userProfile?.email}
        </Typography>
        <Chip
          label="Edit"
          sx={{
            maxWidth: 100,
            mt: 2,
            fontWeight: 500,
          }}
          onClick={handleClick}
          icon={<MdEditSquare />}
        />
      </Stack>

      <Divider />

      {/* service info */}
      <Stack>
        <Typography
          variant="body1"
          fontWeight={600}
          color={"text.primary"}
          gutterBottom
        >
          You selected <strong>{serviceCount} {serviceCount > 1 ? 'services' : 'service'}</strong>:
        </Typography>
        {
          serviceCount > 0 && borkingServiceList?.map((item, index) => (
            <Typography
            key={index}
          variant="body2"
          fontWeight={400}
          color={"text.secondary"}
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TiTick fontSize={"small"} />
          {item.title}
        </Typography>
          ))
        }
        
        <Chip
          label="Edit"
          sx={{
            maxWidth: 100,
            mt: 2,
            fontWeight: 500,
          }}
          onClick={() => setActiveStep(steps.step1)}
          icon={<MdEditSquare />}
        />
      </Stack>
      <Divider />
      {/* booking info */}
      <Stack gap={1}>
        <Typography
          variant="body1"
          fontWeight={600}
          color={"text.primary"}
          gutterBottom
        >
          Booking details:
        </Typography>
        <Typography
          variant="body2"
          fontWeight={400}
          color={"text.secondary"}
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          gap={1}
          gutterBottom
        >
          <strong> Address:</strong>
          {address}
        </Typography>
        <Typography
          variant="body2"
          fontWeight={400}
          color={"text.secondary"}
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          gap={1}
          gutterBottom
        >
          <strong>Budget Estimate:</strong>
          {usdFormatter.format(budget)}
        </Typography>
        <Typography
          variant="body2"
          fontWeight={400}
          color={"text.secondary"}
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          gap={1}
          gutterBottom
        >
          <strong>Date for survey:</strong>
          {surveyDate}
        </Typography>
        <Typography
          variant="body2"
          fontWeight={400}
          color={"text.secondary"}
          component={"div"}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          gap={1}
          gutterBottom
        >
          <strong>Time for survey:</strong>
          {surveyTime}
        </Typography>
        <Stack>
          <Typography variant="body2" fontWeight={400} color={"text.secondary"}>
            <strong> Additional Notes:</strong>
          </Typography>
          {
            notes && (
              <Typography variant="body2" fontWeight={400} color={"text.secondary"}>
                {notes}
          </Typography>
            )
          }
        </Stack>

        <Chip
          label="Edit"
          sx={{
            maxWidth: 100,
            mt: 2,
            fontWeight: 500,
          }}
          icon={<MdEditSquare />}
          onClick={() => setActiveStep(steps.step2)}
        />
      </Stack>
      {error && <Alert severity="error">
        <AlertTitle>{error || "Something went wrong--Please try again!"}</AlertTitle>
      </Alert>}
      <Button
        variant="contained"
        sx={{
          width: isMobile ? "100%" : 250,
          height: 50,
          borderRadius: "16px",
          textTransform: "none",
          fontWeight: 600,
        }}
        onClick={handleSubmitBooking}
      >
       {
        isLoading ? (<CircularProgress size={20} thickness={4} sx={{color: '#f5f5f5'}} />) : "Submit Booking"
       }
      </Button>
      <SuccessBookingModal 
        open={open}
        setOpen={setOpen}
        handleDone={handleDone}
      />
    </Box>
  );
}
