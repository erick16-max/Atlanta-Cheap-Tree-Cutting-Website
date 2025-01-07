import React, { useContext } from "react";
import { Button } from "@mui/material";
import { FaRegCalendarPlus } from "react-icons/fa";
import { MdOutlineEditCalendar } from "react-icons/md";
import AppContext from "@/context/AppContext";
import { useRouter } from "next/navigation";


export default function GetQuoteButton({ isSmallScreen }) {
  const {isUser} = useContext(AppContext)
  const router = useRouter()
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "12px",
        height: isSmallScreen ? 40 : 50,
        px: isSmallScreen ? 3 : 5,
        textTransform: "none",
        mt: 2,
        fontSize: isSmallScreen ? 14 : 16,
        fontWeight: "600",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
        backgroundColor: "#E10A12",
        width: 220,
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

      onClick={() => {
          router.push('/contactus')
      }}
    >
      Get Quote
    </Button>
  );
}
