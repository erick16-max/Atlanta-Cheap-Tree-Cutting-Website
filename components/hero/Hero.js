import { Box, Button, Card, Typography, useMediaQuery, useTheme } from "@mui/material";
import HeroImage from "../../public/treecuttingone.jpg";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box width="100%">
      <Card
        variant="outlined"
        sx={{
          position: "relative",
          width: "100%",
          height: isSmallScreen ? 300 : isMediumScreen ? 400 : 500, // Adjust height for smaller screens
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        {/* Wrapper for the Image to fill the container */}
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={HeroImage}
            alt="Hero Image"
            layout="fill" // Makes the image cover the container
            objectFit="cover" // Ensures the image covers the entire container
            style={{ borderRadius: "12px" }}
          />
          {/* Hero Words */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: isSmallScreen ? "50%" : "35%", // Center the text on smaller screens
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: isSmallScreen ? "center" : "left", // Center text alignment for smaller screens
              px: isSmallScreen ? 2 : 0, // Add padding for smaller screens
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              width: isSmallScreen ? "90%" : "auto", // Ensure content fits on small screens
            }}
          >
            <Typography
              sx={{
                fontSize: isSmallScreen ? 24 : isMediumScreen ? 36 : 54, // Adjust font size
                fontWeight: 700,
              }}
            >
              Your Trusted Family-owned Tree Service
            </Typography>
            <Typography
              sx={{
                fontSize: isSmallScreen ? 14 : 16, // Adjust font size for the description
                fontWeight: 500,
                mt: 1,
              }}
            >
              We are dedicated to offering top-notch tree care and yard services
              at affordable prices to North Atlanta and the surrounding areas.
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "16px",
                height: isSmallScreen ? 40 : 50, // Adjust button height
                px: isSmallScreen ? 3 : 5, // Adjust button padding
                textTransform: "none",
                mt: 2,
                fontSize: isSmallScreen ? 14 : 16, // Adjust button text size
              }}
              endIcon={<FaLongArrowAltRight />}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default HeroSection;
