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
import AppContext from "@/context/AppContext";
import AlertActionMenu from "./AlertsActionMenu";
import { MdOutlineViewCompactAlt } from "react-icons/md";
import UpdateAlertModal from "./UpdateAlertModal";
import DeleteAlertDialogModal from "./DeleteAlertDialog";


export const AlertGridColumns = [
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
    field: "type",
    sortable: false,
    width: 200,
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Type
      </Typography>
    ),
  },
  {
    field: "email",
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Email
      </Typography>
    ),
    width: 150,
  },
  {
    field: "phone",
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Phone Number
      </Typography>
    ),
    width: 150,
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
          <AlertActionMenu
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            id={id}
            setOpenDelete={setOpenDelete}
            setOpenUpdate={setOpenUpdate}
          />
          <DeleteAlertDialogModal
            open={openDelete}
            setOpen={setOpenDelete}
            messageId={selectedItemId}
          />
        <UpdateAlertModal open={openUpdate} setOpen={setOpenUpdate} />
        </Box>
      );
    },
  },
];
