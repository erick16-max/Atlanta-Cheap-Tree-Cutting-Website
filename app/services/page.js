"use client";

import PageLoader from "@/components/general/PageLoader";
import AppContext from "@/context/AppContext";
import { Alert, Box, useMediaQuery, Stack, useTheme, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import CustomAppBar from "@/components/header/CustomAppBar";
import ChatFloatingButton from "@/components/general/ChatButton";
import ServicePageCard from "./ServicePageCard";
import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import Footer from "@/components/footer/Footer";

export default function page() {
  const { user } = useContext(AppContext);
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    setLoading(false);
  }, []);

  const isUser =
    user !== null && user && Object?.keys(user).length > 0 ? true : false;

  if (loading || user === null) {
    return <PageLoader />;
  }

  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      maxWidth={"1700px"}
      margin={"auto"}
      bgcolor={'#f5f5f5'}
    >
      <Box width={"100%"}>
        <CustomAppBar mainPage={true} />
      </Box>
      <Stack mt={"100px"} py={2} px={isSmallScreen ? 1 : 3}>
        <Box px={isSmallScreen ? 1 : 5} width={"100%"}>
          <CustomBreadcrumb current={"Services"} />
          <Typography
            variant="h5"
            color={"text.primary"}
            fontWeight={600}
            gutterBottom
            my={1}
          >
            Our Services
          </Typography>
          <ServicePageCard />
          <ChatFloatingButton />
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
}
