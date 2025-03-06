"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import Image from "next/image";
import DerivLogoImage from "../../public/visa.png";
import MpesaLogoImage from "../../public/mastercard.png";
import ZelleLogoImage from "../../public/zele.png";
import ColorModeContext from "@/theme/CustomThemeProvider";

export default function AcceptedPayments() {
  const { isMobile, isTablet } = useContext(ColorModeContext);
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      py={5}
      px={isTablet ? 2 : 0}
      flexDirection={"column"}
      gap={3}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        color={"text.primary"}
        className="interFont"
      >
        Accepted Payments
      </Typography>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        gap={isMobile ? 3 : 5}
      >
        <Image
          src={DerivLogoImage}
          height={isMobile ? 60 : 100}
          alt="visa logo"
        />
        <Image
          src={MpesaLogoImage}
          height={isMobile ? 60 : 100}
          style={{ marginTop: 25 }}
          alt="mastercard logo"
        />
        <Image
          src={ZelleLogoImage}
          height={isMobile ? 60 : 100}
          style={{ marginTop: 25, backgroundColor: "#9c27b0" }}
          alt="zele logo"
        />
      </Box>

      <Typography
        variant="body1"
        color={"text.secondary"}
        fontWeight={500}
        textAlign={"center"}
        px={isMobile ? 2 : 12}
      >
        Atlanta Cheap Tree Cutting Solution offers flexible payment options for
        your convenience. We accept Mastercard, Visa, Zelle, and many other
        forms of payment to make transactions easy and hassle-free. Contact us
        today for reliable and affordable tree-cutting services!
      </Typography>
    </Box>
  );
}
