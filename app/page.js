"use client"
import React, { useContext } from "react";
import CustomAppBar from "@/components/header/CustomAppBar";
import { Box, Card, Stack, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import HeroSection from "@/components/hero/Hero";
import TopBar from "@/components/header/TopBar";
import AboutUs from "@/components/about/AboutUs";
import Services from "@/components/services/Services";
import PageLoader from "@/components/general/PageLoader";
import ChatFloatingButton from "@/components/general/ChatButton";
import AppContext from "@/context/AppContext";
import FinishAccountModal from "@/components/finishaccount/FinishAccountModal";
import SuccessSnackbarAlert from "@/components/header/SuccessSnackbarAlert";

export default function Home() {
  const [navBg, setNavBg] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading,setLoading]  = React.useState(true)
  const {user, isUserProfile, successAlert, setSuccessAlert} = useContext(AppContext)

  

  React.useEffect(() => {
        setLoading(false)
  }, [])


  const changeNavBg = () => {
    window.scrollY >= 10 ? setNavBg(true) : setNavBg(false);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  if(loading || user === null){
    return <PageLoader />
  }
  

  return (
   <Box
    width={'100vw'}
    display={'flex'}
    flexDirection={'column'}
   >
      <TopBar />
     <Box
      width={'100%'}
     >
        <CustomAppBar navBg={navBg}/>
     </Box>
     <Stack
      mt={'100px'}
      py={2}
      px={isSmallScreen ? 1 : 3}
     >
         <HeroSection />
         <AboutUs />
         <Services />
         <ChatFloatingButton />
         <FinishAccountModal />
        <SuccessSnackbarAlert 
          open={successAlert}
          setOpen={setSuccessAlert}
          message={'Profile saved successfully!'}
        />
     </Stack>
   </Box>
  );
}
