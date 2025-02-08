import React, { useContext, useEffect } from "react";
import { Grid, Box, Typography, useMediaQuery, useTheme, IconButton } from "@mui/material";
import Image from "next/image";
import AppContext from "@/context/AppContext";
import { GetAllPortfolio } from "@/firebase/Content";
import { MdDelete } from "react-icons/md";



const CustomPortfolioGrid = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {portfolioData: images, setPortfolioData, userProfile} = useContext(AppContext)

    useEffect(() => {
      const fetchPortfolio = async() => {
        const response = await GetAllPortfolio()
        setPortfolioData(response)
      }
      fetchPortfolio()
    }, [])


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
            src={images[0]?.images[0]}
            alt={images[0]?.title}
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
              display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
            }}
          >
            <Typography variant="h5" fontWeight={700} component="h3">
              {images[0]?.title}
            </Typography>
            <IconButton >
                    <MdDelete color="#f5f5f5" fontSize={20}/>
                  </IconButton>
          </Box>
        </Box>
      </Grid>

      {/* Remaining images: grid layout */}
      <Grid item xs={12} md={6} >
        <Grid container spacing={1}>
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
                  height: isSmallScreen ? 150 : 196, // Adjust height for smaller screens
                  overflow: "hidden",
                  borderRadius: 0,
                }}
              >
                <Image
                  src={image.images[0]}
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
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    
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
                 {
                  userProfile?.isAdmin && (
                    <IconButton >
                    <MdDelete color="#f5f5f5" fontSize={20}/>
                  </IconButton>
                  )
                 }
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomPortfolioGrid;
