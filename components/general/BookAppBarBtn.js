import React, { useContext } from "react";
import { Button } from "@mui/material";
import AppContext from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { BsBookmarkPlus } from "react-icons/bs";
import ColorModeContext from "@/theme/CustomThemeProvider";
import { FcAdvertising } from "react-icons/fc";
import { IoIosAdd } from "react-icons/io";



export default function BookAppBarBtn() {

  const {isUser, setIsBookingModalOpen} = useContext(AppContext)
  const {isMobile} = useContext(ColorModeContext)
  const router = useRouter()

  return (
    <Button
      variant="contained"
      sx={{
        borderEndStartRadius: '12px',
        height: isMobile ? 36 : 40,
        px: isMobile ? '6px' : 2,
        fontSize: isMobile ? 11 : 12,
        fontWeight: "600",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
        backgroundColor: "#E10A12",
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

      endIcon={<BsBookmarkPlus fontSize={12}/> }
      onClick={() => {
        if(isUser){
          router.push('/booking')
        }else{
          setIsBookingModalOpen(true)
        }
      }}
    >
     BOOK <span
     style={{display: isMobile ? "none" : 'block'}}
     >US</span>
    </Button>
  );
}
