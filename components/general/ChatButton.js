import React from "react";
import Fab from "@mui/material/Fab";
import { Tooltip, Typography } from "@mui/material";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";
import Link from "next/link";
import { RiWhatsappLine } from "react-icons/ri";

export default function ChatFloatingButton() {
  return (
    <Tooltip title="Whatsapp us" arrow>
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
          backgroundColor: "#075E54",
        }}
        LinkComponent={Link}
        href="https://wa.me/17705894000?text=Hello%20there!%20I%20would%20like%20to%20inquire%20about%20your%20tree%20services."
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiWhatsappLine style={{ marginRight: 8 }} size={20} />
        <Typography variant="button" sx={{ textTransform: "None" }}>
          Whatsapp
        </Typography>
      </Fab>
    </Tooltip>
  );
}
