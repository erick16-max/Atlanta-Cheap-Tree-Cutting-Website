import React from "react";
import Fab from "@mui/material/Fab";
import { Tooltip, Typography } from "@mui/material";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";
import Link from "next/link";

export default function ChatFloatingButton() {
  return (
    <Tooltip title="Message us" arrow>
      <Fab
        color="primary"
        aria-label="chat"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
          width: 120,
          height: 48,
          borderRadius: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1b5e20",
        }}
        LinkComponent={Link}
        href="https://wa.me/17705894000?text=Hello%20there!%20I%20would%20like%20to%20inquire%20about%20your%20tree%20services."
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbMessage2 style={{ marginRight: 8 }} size={20} />
        <Typography variant="button" sx={{ textTransform: "None" }}>
          Chat Us
        </Typography>
      </Fab>
    </Tooltip>
  );
}
