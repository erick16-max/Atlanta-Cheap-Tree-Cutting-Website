import { Button, Card, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import AboutUsImage from "../../public/aboutus.jpg";
import Image from "next/image";
import { CgMore } from "react-icons/cg";
import Link from "next/link";

export default function AboutUs() {
  const isTablet = useMediaQuery("(max-width:1150px)");

  return (
    <Card
      // variant="outlined"
      sx={{
        width: "100%",
        height: isTablet ? '100%' : 400,
        display: "flex",
        justifyContent: "space-between",
        marginTop: 3,
        borderRadius: "12px",
        gap: 5,
        boxShadow: 0,
      }}
    >
      <Image 
        src={AboutUsImage} 
        alt="about us image" 
        height={isTablet ? 600 : 400}
        style={{display: isTablet ? 'none' : 'block', borderRadius: "12px",}}
         />
      <Stack flex={1} p={3}>
        <Typography variant="h4" color={"text.primary"} fontWeight={900}>
          Atlanta Cheap Tree Solutions
        </Typography>
        <Typography
          variant="body1"
          color={"#D4AF37"}
          fontWeight={700}
          gutterBottom
        >
          ESTABLISHED 2019
        </Typography>
        <Typography
            variant="body1"
            color={'text.secondary'}
            fontWeight={500}
            sx={{mt: 5}}
        >
          Welcome to Atlanta Cheap Tree Solutions, your trusted family-owned
          tree service provider. We are dedicated to offering top-notch tree
          care and yard services at affordable prices to North Atlanta and the
          surrounding areas. Our experienced team is committed to ensuring the
          health, safety, and beauty of your trees and landscape.
        </Typography>
        <Button
            variant="contained"
            endIcon={<CgMore />}
            sx={{
                height: 50,
                px: 3,
                borderRadius: '12px',
                maxWidth: 200,
                textTransform: 'none',
                mt: 5,
            }}
            LinkComponent={Link}
            href="/aboutus"
        >
            Learm More
        </Button>
      </Stack>
    </Card>
  );
}
