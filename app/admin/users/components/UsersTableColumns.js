import React, { useContext } from "react";
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
import { FaRegEdit } from "react-icons/fa";
import AppContext from "@/context/AppContext";
import UpdateUserModal from "./UpdateUserModal";

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
    width: 190,
  },
  {
    field: "isAdmin",
    renderHeader: () => (
      <Typography variant="body2" color={"text.primary"} fontWeight={600}>
        Type
      </Typography>
    ),
    width: 120,
    renderCell: (params) => {
      const isAdmin = params?.row?.isAdmin === true ? true : false;
      return (
        <Chip
          label={isAdmin ? "admin" : "user"}
          color={isAdmin ? "error" : "secondary"}
          size="small"
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
    width: 120,
    renderCell: (params) => {
      const {
        usersTableData,
        selectedItemId,
        setSelectedItemId,
        openUpdate,
        setOpenUpdate,
        userObj, setUserObj
      } = useContext(AppContext);
      const { id } = params.row;

     ;
      // handle action btn click
      const handleActionBtnClick = (event) => {
        event.stopPropagation();
        setSelectedItemId(id);
        const user = usersTableData?.find(user => user?.id === id)
        setUserObj(user)
        setOpenUpdate(true)

      };

      return (
        <Box>
          <Tooltip title="actions">
            <IconButton onClick={handleActionBtnClick} aria-haspopup="true" aria-label="action button">
              <FaRegEdit />
            </IconButton>
          </Tooltip>
          <UpdateUserModal  open={openUpdate} setOpen={setOpenUpdate}/>
        </Box>
      );
    },
  },
];
