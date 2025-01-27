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

export const adminBookingsColumns = [
    {
        field: "fullname",
        sortable: false,
        width: 200,
        renderHeader: () => (
          <Typography variant="body2" color={"text.primary"} fontWeight={600}>
            Who booked?
          </Typography>
        ),
      },
  {
    field: "address",
    sortable: false,
    width: 200,
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Location
      </Typography>
    ),
  },
  {
    field: "budget",
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Budget
      </Typography>
    ),
    width: 100,
  },
  {
    field: "surveyTime",
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Survey Time
      </Typography>
    ),
    sortable: false,
    width: 140,
  },
  {
    field: "surveyDate",
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Date of Survey
      </Typography>
    ),
    sortable: false,
    width: 160,
  },
  {
    field: "status",
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Status
      </Typography>
    ),
    sortable: false,
    width: 180,
    renderCell: (params) => {
      console.log("params", params.value)
      const chipColor = params.value === bookingStatus.PENDING 
                          ? "warning.main" 
                          : params.value === bookingStatus.COMPLETED
                          ? "success.main"
                          : params.value === bookingStatus.REJECTED
                          ? "error.main" : "secondary.main"
      return (
        <Chip 
        label={params?.value}
         size="small"
        sx={{
          borderRadius: 1,
          backgroundColor: '#f5f5f5',
          color: chipColor,
          fontWeight: 500,
        }}
        />
      );
    },
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
