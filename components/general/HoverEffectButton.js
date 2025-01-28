import React, { useContext } from "react";
import { Button } from "@mui/material";
import AppContext from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { BsBookmarkPlus, BsBookmarkPlusFill } from "react-icons/bs";
import ColorModeContext from "@/theme/CustomThemeProvider";



export default function HoverEffectButton({ isSmallScreen, dashboardText }) {
  const {isUser, setIsBookingModalOpen} = useContext(AppContext)
  const {isMobile} = useContext(ColorModeContext)
  const router = useRouter()
  return (
    <Button
      variant="contained"
      sx={{
        borderEndStartRadius: '12px',
        height: isSmallScreen ? 40 : 50,
        px: isSmallScreen && !dashboardText ? 3 : isMobile && dashboardText ? 2 : 5,
        textTransform: "none",
        mt: 2,
        fontSize: isSmallScreen ? 14 : 16,
        fontWeight: "600",
        color: "#f5f5f5",
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
        // backgroundColor: "#E10A12",
        backgroundColor: "primary.dark",
        width: isMobile && dashboardText ? 120 : 220,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "50%",
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, #aa8c2c, #aa8c2c)",
          transform: "translate(-50%, -100%)",
          zIndex: -1,
          transition: "transform 0.3s ease-in-out",
        },
        "&:hover::before": {
          transform: "translate(-50%, 0)",
        },
        "&:hover": {
          backgroundColor: "#aa8c2c", // Prevents default hover flash
        },
      }}

      endIcon={<BsBookmarkPlusFill fontSize={16}/>}
      onClick={() => {
        if(isUser){
          router.push('/booking')
        }else{
          setIsBookingModalOpen(true)
        }
      }}
    >
      {dashboardText && isMobile ? dashboardText : "Book us now"}
    </Button>
  );
}
