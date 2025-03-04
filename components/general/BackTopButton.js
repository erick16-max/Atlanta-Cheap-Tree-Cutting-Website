import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import { Tooltip, Typography, Menu, MenuItem } from '@mui/material';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FcSms } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import { FaLongArrowAltUp } from "react-icons/fa";
import { amber } from '@mui/material/colors';




export default function BackTopButton() {
  const [anchorEl, setAnchorEl] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="back to top" arrow>
        <Fab
          color="secondary"
          aria-label="chat"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 70,
            right: 16,
            zIndex: 1000,
            width: 44,
            height: 48,
            borderRadius: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            textTransform: 'none',
          }}
          
        >
           <FaLongArrowAltUp />
          
        </Fab>
      </Tooltip>
    </>
  );
}