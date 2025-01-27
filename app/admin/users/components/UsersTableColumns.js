import React from "react";
import {
  Box,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Chip,
  Typography,
} from "@mui/material";
import { IoIosMore } from "react-icons/io";
import { bookingStatus } from "@/constants/AppConstants";

export const usersTableColumns = [
    {
        field: "displayName",
        sortable: false,
        width: 250,
        renderHeader: () => (
          <Typography variant="body2" color={"text.primary"} fontWeight={600}>
            Fullname
          </Typography>
        ),
      },
  {
    field: "email",
    sortable: false,
    width: 250,
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Email
      </Typography>
    ),
  },
  {
    field: "phoneNumber",
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Phone Number
      </Typography>
    ),
    width: 250,
  },
  

  {
    field: "action",
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Action
      </Typography>
    ),
    width: 180,
    renderCell: (params) => {
      return (
        <Box>
          <Tooltip title="actions">
            <IconButton aria-haspopup="true" aria-label="action button">
              <IoIosMore />
            </IconButton>
          </Tooltip>
        </Box>
      );
    },
  },
];
