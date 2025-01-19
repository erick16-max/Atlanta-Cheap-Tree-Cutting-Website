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

export const bookingsColumns = [
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
        Your Budget Estimate
      </Typography>
    ),
    width: 200,
  },
  {
    field: "surveyTime",
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Survey Time
      </Typography>
    ),
    sortable: false,
    width: 180,
  },
  {
    field: "surveyDate",
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Date of Survey
      </Typography>
    ),
    sortable: false,
    width: 180,
  },

  {
    field: "action",
    headerName: "Action",
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
