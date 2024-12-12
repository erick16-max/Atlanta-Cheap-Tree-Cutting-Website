import React from 'react';
import Fab from '@mui/material/Fab';
import { Tooltip, Typography } from '@mui/material';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";

export default function ChatFloatingButton() {
  return (
    <Tooltip title="Chat with Host" arrow>
      <Fab
        color="primary"
        aria-label="chat"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
          width: 120, // Adjust for square shape
          height: 48, // Adjust for square shape
          borderRadius: 4, // Makes it square instead of round
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1b5e20'
        }}
      >
        <TbMessage2 style={{ marginRight: 8 }} size={20} />
        <Typography variant="button" sx={{ textTransform: 'None' }}>
          Chat Us
        </Typography>
      </Fab>
    </Tooltip>
  );
}