"use client";
import Footer from "@/components/footer/Footer";
import CustomAppBar from "@/components/header/CustomAppBar";
import { Box, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import ColorModeContext from "@/theme/CustomThemeProvider";
import AppContext from "@/context/AppContext";
import { useRouter } from "next/navigation";
import PageLoader from "@/components/general/PageLoader";
import { auth } from "@/firebase.config";

export default function AdminPageLayout({children}) {
    const [loading, setLoading] = React.useState(true);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { isTablet } = useContext(ColorModeContext);
  const {user, isUser, isAdmin, userProfile} = useContext(AppContext)
  const router = useRouter()

  
    React.useEffect(() => {
      setLoading(false);
      if(!isUser && user !== null){
        router.push("/")
      }
    
      if (!userProfile?.isAdmin && user !== null) {
        router.push("/");
      }
     
    }, [userProfile]);

  
    if (loading || user === null) {
      return <PageLoader />;
    }

    
  

 

  


  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      minHeight={"100vh"}
      width={"100%"}
      maxWidth={"1700px"}
      margin={"auto"}
      bgcolor={"#f9f9f9"}
    >
      {/* Header */}
      <Box width={"100%"}>
        <CustomAppBar mainPage={true} />
      </Box>

      {/* Main Content */}
      <Stack mt={"80px"} py={2} px={isSmallScreen ? 1 : 3} flexGrow={1}>
        <Grid container flex={1} spacing={3}>
          {/* Sidebar */}
          <Grid
            item
            lg={2}
            md={0}
            sm={0}
            xs={0}
            display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
          >
            <Box
              sx={{
                position: "sticky",
                top: "80px", // Adjust based on your header height
                alignSelf: "flex-start",
              }}
            >
              <Sidebar />
            </Box>
          </Grid>

          {/* Content */}
          <Grid item lg={10} md={12} sm={12} xs={12}>
            <Box>
              {/* Content goes here */}
             {children}
            </Box>
          </Grid>
        </Grid>
      </Stack>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
