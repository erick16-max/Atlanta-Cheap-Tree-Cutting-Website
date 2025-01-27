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
      color="primary"
      sx={{
        borderEndStartRadius: '12px',
        height: isMobile ? 36 : 40,
        px: isMobile ? '6px' : 2,
        fontSize: isMobile ? 12 : 13,
        fontWeight: 600,
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
        textTransform: 'none',
        
      }}

      endIcon={<BsBookmarkPlus fontSize={10}/> }
      onClick={() => {
        if(isUser){
          router.push('/booking')
        }else{
          setIsBookingModalOpen(true)
        }
      }}
    >
     Book
    </Button>
  );
}
