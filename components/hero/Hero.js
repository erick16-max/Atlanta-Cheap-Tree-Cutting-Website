import { Box, Button, Card, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Pagination styles
import "swiper/css/navigation"; // Import Navigation styles
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";

import HeroImage from "../../public/treecuttingone.jpg";
import HeroImageTwo from "../../public/treeup1.jpg";
import AboutUsImage from "../../public/aboutustwo.jpg"
import HoverEffectButton from "../general/HoverEffectButton";
import GoToDashboardBtn from "../general/GoToDashboardBtn";
import { useContext, useState } from "react";
import AppContext from "@/context/AppContext";

const HeroSection = () => {
  const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery("(max-width:698px)");
  const {user, isUser} = useContext(AppContext)



  return (
    <Box width="100%">
      <Card
        variant="outlined"
        sx={{
          position: "relative",
          width: "100%",
          height: isSmallScreen ? 400 : isMediumScreen ? 400 : 500, // Adjust height for smaller screens
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          style={{ width: "100%", height: "100%" }}
        >
          {[HeroImage, HeroImageTwo, AboutUsImage].map((image, index) => (
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
                    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black backdrop
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
                   Your Trusted, Licensed & Insured Family-Owned Tree Service
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
                    <Stack  
                      direction={ isSmallScreen ? 'column' : 'row'} 
                      gap={3}
                      alignItems={'center'}
                    >
                      <HoverEffectButton />
                     { isUser &&   <GoToDashboardBtn />}
                    </Stack>
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
