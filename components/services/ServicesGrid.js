import React from "react";
import { Grid, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const ServiceImageGrid = ({ images }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container spacing={1} mt={3}>
      {/* First image: spans full width on smaller screens, half width on larger screens */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: isSmallScreen ? 200 : isMediumScreen ? 300 : 400, // Adjust height based on screen size
            overflow: "hidden",
            borderRadius: 0,
          }}
        >
          <Image
            src={images[0].src}
            alt={images[0].title}
            layout="fill"
            objectFit="cover"
            priority
          />
           <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "100%",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: 1,
              textAlign: "center",
            }}
          >
          </Box>
          <Box
            sx={{
              position: "absolute",
              // top: 0,
              bottom: 0,
              width: "100%",
              bgcolor: "rgba(0, 0, 0, 0.0)",
              color: "white",
              padding: 1,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" fontWeight={700} component="h3">
              {images[0].title}
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Remaining images: grid layout */}
      <Grid item xs={12} md={6}>
        <Grid container spacing={1} >
          {images.slice(1, 5).map((image, index) => (
            <Grid
              item
              xs={12} // Half width on small screens
              sm={6} // Half width on medium screens
              key={index}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: isSmallScreen ? 150 : 200, // Adjust height for smaller screens
                  overflow: "hidden",
                  borderRadius: 0,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                     <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "100%",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: 1,
              textAlign: "center",
            }}
          >
          </Box>
                
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    // top: 0,
                    width: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.0)",
                    color: "white",
                    padding: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    color={"#f5f5f5"}
                    variant="h6" // Adjust font size for smaller titles
                    fontWeight={700}
                    component="h3"
                  >
                    {image.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServiceImageGrid;
