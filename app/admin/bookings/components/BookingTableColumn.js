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
import AppContext from "@/context/AppContext";
import AdminActionMenu from "./AdminActionMenu";
import DeleteDialogModal from "@/app/dashboard/overview/components/bookinggrid/DeleteDialogModal";

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
      const chipColor =
        params.value === bookingStatus.PENDING
          ? "warning.main"
          : params.value === bookingStatus.COMPLETED
          ? "success.main"
          : params.value === bookingStatus.REJECTED
          ? "error.main"
          : "secondary.main";
      return (
        <Chip
          label={params?.value}
          size="small"
          sx={{
            borderRadius: 1,
            backgroundColor: "#f5f5f5",
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
      const { id } = params.row;
      const [anchorEl, setAnchorEl] = React.useState(null);
      const [loading, setLoading] = React.useState(false);
      const {
        selectedItemId,
        setSelectedItemId,
        openDelete,
        setOpenDelete,
        openUpdate,
        setOpenUpdate,
      } = React.useContext(AppContext);

      // handle menuitem click
      const handleClick = (event, id) => {
        setAnchorEl(event.currentTarget);
        setSelectedItemId(id);
      };
      // handle action btn click
      const handleActionBtnClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
        handleClick(event, id);
      };

      return (
        <Box>
          <Tooltip title="actions">
            <IconButton
              onClick={handleActionBtnClick}
              aria-haspopup="true"
              aria-label="action button"
            >
              <IoIosMore />
            </IconButton>
          </Tooltip>
          <AdminActionMenu
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            id={id}
            setOpenDelete={setOpenDelete}
            setOpenUpdate={setOpenUpdate}
          />
          <DeleteDialogModal
            open={openDelete}
            setOpen={setOpenDelete}
            bookingId={selectedItemId}
            type='admin'
          />
        </Box>
      );
    },
  },
];
