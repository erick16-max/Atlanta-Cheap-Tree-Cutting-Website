import React from "react";
import { Button } from "@mui/material";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function GoToDashboardBtn({ isSmallScreen }) {
  const router = useRouter()
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{
        borderRadius: "16px",
        height: isSmallScreen ? 40 : 50,
        px: isSmallScreen ? 3 : 5,
        textTransform: "none",
        mt: 2,
        fontSize: isSmallScreen ? 14 : 16,
        fontWeight: "600",
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
        color: '#1c1e21',
        backgroundColor: "#f5f5f5",
        width: 220,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "50%",
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom,#aa8d2c, #aa8c2c)",
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

      endIcon={<FaLongArrowAltRight />}
      onClick={() => router.push("/dashboard")}
    >
    Dashboard
    </Button>
  );
}
