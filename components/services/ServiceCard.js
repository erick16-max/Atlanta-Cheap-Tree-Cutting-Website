import React from "react";
import { Grid, Box, Typography, useMediaQuery, useTheme, Card } from "@mui/material";
import Image from "next/image";
import { FcDoNotMix } from "react-icons/fc";

const ServiceCard = ({ images }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container spacing={1} mt={3}>
      {/* First image: spans full width on smaller screens, half width on larger screens */}
      <Grid item xs={12} md={6}>
        <Card
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: 1,
                boxShadow: 0,
                p :2 ,
                "&:hover": {
                    boxShadow: 1,
                    cursor: 'pointer',
                }
            }}
        >
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    width: isSmallScreen ? 100 : 150,
                    height: isSmallScreen ? 100 : 150,
                    backgroundColor: '#f5f5f5',
                    borderRadius: isSmallScreen ? 50 : 75,
                }}
            >
                 <Image 
                src={images[0].src}
                alt={images[0].title}
                width= {isSmallScreen ? 100 : 150}
                height={ isSmallScreen ? 100 : 150}
                style={{
                  borderRadius: isSmallScreen ? 50 : 75
                }}
              />
            </Box>
            <Typography
                variant="h6"
                fontWeight={600}
                color={'text.primary'}
            >Tree Cutting</Typography>

        </Card>
      </Grid>

      {/* Remaining images: grid layout */}
      <Grid item xs={12} md={6}>
        <Grid container spacing={1}>
          {images.slice(1).map((image, index) => (
            <Grid
              item
              xs={12} // Half width on small screens
              sm={6} // Half width on medium screens
              key={index}
            >
                     <Card
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: 1,
                p: 2,
                boxShadow: 0,
                cursor: 'pointer',
                "&:hover": {
                    boxShadow: 1,
                }
            }}
        >
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: '#f5f5f5',
                    borderRadius: 50,
                }}
            >
              <Image 
                src={image.src}
                alt={image.title}
                width={100}
                height={100}
                style={{
                  borderRadius: 50
                }}
              />
            </Box>
            <Typography
                variant="h6"
                fontWeight={600}
                color={'text.primary'}
            >{image.title}</Typography>

                </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServiceCard;
