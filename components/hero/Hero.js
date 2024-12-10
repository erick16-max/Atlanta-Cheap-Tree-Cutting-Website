import { Box, Button, Card, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Pagination styles
import "swiper/css/navigation"; // Import Navigation styles
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import HeroImage from "../../public/treecuttingone.jpg";
import HeroImageTwo from "../../public/treecuttinghero.jpg";

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
        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          style={{ width: "100%", height: "100%" }}
        >
          {[HeroImage, HeroImageTwo].map((image, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={image}
                  alt={`Hero Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "12px" }}
                />
                {/* Backdrop */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black backdrop
                    zIndex: 1,
                  }}
                ></Box>

                {/* Hero Words */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: isSmallScreen ? "50%" : "35%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    textAlign: isSmallScreen ? "center" : "left",
                    px: isSmallScreen ? 2 : 0,
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    width: isSmallScreen ? "90%" : "auto",
                    zIndex: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: isSmallScreen ? 24 : isMediumScreen ? 36 : 54,
                      fontWeight: 700,
                    }}
                  >
                    Your Trusted Family-owned Tree Service
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: isSmallScreen ? 14 : 16,
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
                      height: isSmallScreen ? 40 : 50,
                      px: isSmallScreen ? 3 : 5,
                      textTransform: "none",
                      mt: 2,
                      fontSize: isSmallScreen ? 14 : 16,
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
    </Box>
  );
};

export default HeroSection;
