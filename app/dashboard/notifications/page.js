"use client";

import PageLoader from "@/components/general/PageLoader";
import AppContext from "@/context/AppContext";
import { Alert, Box, useMediaQuery, Stack, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import NotificationsCard from "./components/NotificationsCard";
import CustomAppBar from "@/components/header/CustomAppBar";
import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import Footer from "@/components/footer/Footer";
import ChatFloatingButton from "@/components/general/ChatButton";

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
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"} // Ensures footer stays at the bottom
      minHeight={"100vh"} // Ensures the Box covers the full viewport height
      width={"100%"}
      maxWidth={"1700px"}
      margin={"auto"}
      bgcolor={"#f9f9f9"}
    >
      <CustomAppBar mainPage={true} />

      <Stack mt={"80px"} py={2} px={isSmallScreen ? 1 : 3}>
               <CustomBreadcrumb current={'notifications'} nestedPath={'dashboard'} />
              <Box  width={"100%"}>
               <Stack py={2}>
               <NotificationsCard />
               </Stack>
                <ChatFloatingButton />
              </Box>
            </Stack>

      <Footer />
    </Box>
  );
}
  