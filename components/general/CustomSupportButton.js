import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import { Tooltip, Typography, Menu, MenuItem } from '@mui/material';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FcSms } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";

export default function CustomSupportButton() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Call or Message us" arrow>
        <Fab
          color="primary"
          aria-label="chat"
          onClick={handleClick}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1000,
            width: 120,
            height: 48,
            borderRadius: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            backgroundColor: 'primary.dark',
            textTransform: 'none',
          }}
        >
            Contact Us
          {Boolean(anchorEl) ? (
            <IoMdArrowDropup style={{ marginLeft: 8, color: '#f5f5f5' }} size={16} />
          ) : (
            <IoMdArrowDropdown style={{ marginLeft: 8, color: '#f5f5f5' }} size={16} />
          )}
        </Fab>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem
          onClick={handleClose}
          component="a"
          href="tel:+17705894000" // Replace with the actual phone number
        >
          <FcCallback style={{ marginRight: 8 }} />
          Call Us
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component="a"
          href="https://wa.me/17705894000?text=Hello%20there!%20I%20would%20like%20to%20inquire%20about%20your%20tree%20services."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp style={{ marginRight: 8, color: "green" }} />
          WhatsApp Us
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component="a"
          href="sms:+117705894000" 
        >
          <FcSms style={{ marginRight: 8 }} />
          Message Us
        </MenuItem>
      </Menu>
    </>
  );
}