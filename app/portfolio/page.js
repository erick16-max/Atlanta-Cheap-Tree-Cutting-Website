"use client";

import PageLoader from "@/components/general/PageLoader";
import AppContext from "@/context/AppContext";
import { Alert, Box, useMediaQuery, Stack, useTheme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import CustomAppBar from "@/components/header/CustomAppBar";
import ChatFloatingButton from "@/components/general/ChatButton";
import PortfolioGrid from "./PortfolioGrid";
import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import {Typography} from "@mui/material";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import PortfolioImageOne from "../../public/portfolio/portfolio1.jpg";
import PortfolioImageTwo from "../../public/portfolio/portfolio2.jpg";
import PortfolioImageThree from "../../public/portfolio/portfolio3.jpg";
import PortfolioImageFour from "../../public/portfolio/portfolio4.jpg";
import PortfolioImageFive from "../../public/portfolio/portfolio5.jpg";
import PortfolioImageSix from "../../public/portfolio/portfolio6.jpg";
import PortfolioImageSeven from "../../public/portfolio/portfolio7.jpg";
import PortfolioImageEight from "../../public/portfolio/portfolio8.jpg";
import PortfolioImageNine from "../../public/portfolio/portfolio9.jpg";
import CustomPortfolioGrid from "@/components/portfolio/CustomPortfolioGrid";
import Testimonials from "./Testimonials";

export const portfolioItems = [
  { type: "image", src: PortfolioImageOne, title: "Project 1" },
  { type: "image", src: PortfolioImageTwo, title: "Project 2" },
  { type: "image", src: PortfolioImageThree, title: "Project 3" },
  { type: "image", src: PortfolioImageFour, title: "Project 4" },
  { type: "image", src: PortfolioImageFive, title: "Project 5" },
  { type: "video", src: "/portfolio/vid.mp4", title: "Portfolio Video" },
  // { type: "image", src: PortfolioImageFive, title: "Project 6" },
  // { type: "image", src: PortfolioImageSeven, title: "Project 7" },
  // { type: "image", src: PortfolioImageEight, title: "Project 8" },
  // { type: "image", src: PortfolioImageNine, title: "Project 9" },
];


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
      bgcolor={"#f9f9f9"}
      minHeight={'100vh'}
      justifyContent={'space-between'}
    >
      <Box width={"100%"}>
        <CustomAppBar mainPage={true} />
      </Box>
      <Stack mt={"80px"} py={2} px={isSmallScreen ? 1 : 3} flexGrow={1}>
        <Box px={isSmallScreen ? 1 : 5} width={"100%"}>
          <CustomBreadcrumb current={"portfolio"} />
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
          <CustomPortfolioGrid images={portfolioItems} />
          <Testimonials />

        </Box>
      </Stack>
      <Footer />
    </Box>
  );
}
