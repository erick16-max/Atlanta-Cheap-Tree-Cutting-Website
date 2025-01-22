import React from "react";
import Fab from "@mui/material/Fab";
import { Tooltip, Typography } from "@mui/material";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";
import Link from "next/link";
import { RiWhatsappLine } from "react-icons/ri";
import { MdOutlineCall } from "react-icons/md";



export default function CallUsButton() {
  return (
    <Tooltip title="Message us" arrow>
      <Fab
        color="primary"
        aria-label="chat"
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
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
        href="tel:770-589-4000"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdOutlineCall style={{ marginRight: 8 }} size={20} />
        <Typography variant="button" sx={{ textTransform: "None" }}>
          Call Us
        </Typography>
      </Fab>
    </Tooltip>
  );
}
