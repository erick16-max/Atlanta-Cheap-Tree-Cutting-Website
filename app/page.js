"use client"
import React, { useContext } from "react";
import CustomAppBar from "@/components/header/CustomAppBar";
import { Box, Card, Stack, useMediaQuery, useTheme, Typography } from "@mui/material";
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
import { useInternetStatus } from "@/hooks/useInternetStatus";
import OnlineStatusModal from "@/components/general/OnlineStatusModal";
import WhyUs from "@/components/whyus/WhyUs";
import Footer from "@/components/footer/Footer";
import BookingModal from "./booking/components/BookingModal";
import Location from "@/components/location/Location";
import Testimonials from "./portfolio/Testimonials";
import { portfolioItems } from "./portfolio/page";
import CustomPortfolioGrid from "@/components/portfolio/CustomPortfolioGrid";
import ContactUsForm from "./contactus/ContactUsForm";
import AcceptedPayments from "@/components/payments/AcceptedPayments";
import PortfolioManager from "./admin/content/portfolio/PortfolioManager";


export default function Home() {
 
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading,setLoading]  = React.useState(true)
  const {user, isUserProfile, successAlert, setSuccessAlert, navBg, setNavBg} = useContext(AppContext)

  const isOnline = useInternetStatus()


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

  if(loading){
    return <PageLoader />
  }
  

  return (
   <Box
    width={'100%'}
    display={'flex'}
    flexDirection={'column'}
    maxWidth={'1700px'}
    margin={'auto'}
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
         <WhyUs />
         <Typography
            variant="h5"
            color={"text.primary"}
            fontWeight={600}
            gutterBottom
            my={1}
          >
            View Our Portfolio
          </Typography>
          {/* <PortfolioGrid /> */}
          {/* <CustomPortfolioGrid images={portfolioItems} /> */}
          <PortfolioManager />
          <AcceptedPayments />
         <Testimonials />
         <Location />
         <ContactUsForm />
     </Stack>
         <Footer />
         <FinishAccountModal />
        <SuccessSnackbarAlert 
          open={successAlert}
          setOpen={setSuccessAlert}
          message={'Profile saved successfully!'}
        />
        <OnlineStatusModal />
   </Box>
  );
}
