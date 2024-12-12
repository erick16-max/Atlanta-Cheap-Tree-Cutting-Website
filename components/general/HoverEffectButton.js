import React from "react";
import { Button } from "@mui/material";

export default function HoverEffectButton({ isSmallScreen }) {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "16px",
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
        width: 200,
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
    >
      Book Us Now!
    </Button>
  );
}
