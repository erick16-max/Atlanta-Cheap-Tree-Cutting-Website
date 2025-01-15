import { Box, Typography, Stack, Chip, Button, Divider } from "@mui/material";
import React, { useContext } from "react";
import { SiTicktick } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import { MdEditSquare } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import ColorModeContext from "@/theme/CustomThemeProvider";

export default function ConfirmBeforeSubmit() {
    const {isMobile} = useContext(ColorModeContext)
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };


  return (
    <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={3}>
      <Stack>
        <Typography variant="h6" color={"text.primary"} fontWeight={700}>
          Confirm your Booking
        </Typography>
        <Typography variant="body1" color={"text.secondary"} fontWeight={500}>
          Please confirm everything before submitting the your booking details.
        </Typography>
        <Divider />
      </Stack>
      <Stack>
        <Typography
          variant="body1"
          fontWeight={600}
          color={"text.primary"}
          gutterBottom
        >
          You selected <strong>2 services</strong>:
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
        >
          <TiTick fontSize={"small"} />
          Tree cutting
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
        >
          <TiTick fontSize={"small"} />
          Tree prunning
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
          822 Berne Street Unit 3, Atlanta
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
          USD 200.00
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
          25th, November 2025
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
          10: 25 pm
        </Typography>
          <Stack>
          <Typography
          variant="body2"
          fontWeight={400}
          color={"text.secondary"}
          
        >
         <strong> Additional Notes:</strong>
        </Typography>
        <Typography
          variant="body2"
          fontWeight={400}
          color={"text.secondary"}
        >
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem quos rerum deserunt amet animi aut magni veniam, fugiat, provident quae, perferendis optio assumenda placeat saepe expedita commodi quibusdam suscipit!
        </Typography>
          </Stack>

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
      <Button
        variant="contained"
        sx={{
            width: isMobile ? '100%' : 250,
            height: 50,
            borderRadius: '16px',
            textTransform: 'none',
            fontWeight: 600
        }}
      >
        Submit Booking
      </Button>
    </Box>
  );
}
