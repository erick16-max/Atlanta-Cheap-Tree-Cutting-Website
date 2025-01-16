import AppContext from "@/context/AppContext";
import { Card, Typography, Stack, Alert } from "@mui/material";
import React, { useContext } from "react";
import ChooseServiceStepOne from "./steps/ChooseServiceStepOne";
import TakeBookingDetailsStepTwo from "./steps/TakeBookingDetailsStepTwo";
import { steps } from "@/constants/AppConstants";
import CustomLinearProgress from "./steps/CustomLinearProgress";
import ChooseImagesStepThree from "./steps/ChooseImagesStepThree";
import ConfirmBeforeSubmit from "./steps/ConfirmBeforeSubmit";
import GuestUserAccountModal from "@/components/finishaccount/GuestUserModal";

export default function BoorkingSteps() {
  const { userProfile, activeStep, setActiveState, fullname } = useContext(AppContext);

  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        p: 3,
        boxShadow: 0,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        mt: 2,
      }}
    >
      {steps.step4 !== activeStep && (
        <Stack>
          <Typography variant="h6" color={"text.primary"} fontWeight={700}>
            {activeStep === steps.step1
              ? `Hey, ${userProfile?.displayName || userProfile?.email || fullname} 👋`
              : activeStep === steps.step2
              ? `Provide more details, ${
                  userProfile?.displayName || userProfile?.email || fullname
                }!`
              : activeStep === steps.step3
              ? `Almost there, ${
                  userProfile?.displayName || userProfile?.email || fullname
                }!`
              : ""}
          </Typography>
          <Typography variant="body1" color={"text.secondary"} fontWeight={500}>
            {activeStep === steps.step1
              ? `Choose atleast one service to proceed.`
              : activeStep === steps.step2
              ? `Fill in the details for us to get more info.`
              : activeStep === steps.step3
              ? `Provide upto 5 images images of the place`
              : ""}
          </Typography>
          <CustomLinearProgress
            value={
              activeStep === steps.step1
                ? 0
                : activeStep === steps.step2
                ? 50
                : activeStep === steps.step3
                ? 67
                : activeStep === steps.step4
                ? 100
                : 100
            }
          />
        </Stack>
      )}
      {steps.step1 === activeStep ? (
        <ChooseServiceStepOne />
      ) : steps.step2 === activeStep ? (
        <TakeBookingDetailsStepTwo />
      ) : steps.step3 === activeStep ? (
        <ChooseImagesStepThree />
      ) : steps.step4 === activeStep ? (
        <ConfirmBeforeSubmit />
      ) : null}
      <GuestUserAccountModal />
    </Card>
  );
}
