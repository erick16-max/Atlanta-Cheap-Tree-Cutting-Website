import React, { useContext } from "react";
import { Box, Menu, MenuItem } from "@mui/material";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import AppContext from "@/context/AppContext";

export default function ActionMenu({
  anchorEl,
  setAnchorEl,
  id,
  setOpenDelete,
  setOpenUpdate,
}) {
  const {bookings, bookingObj, setBookingObj} = useContext(AppContext)
  // close the action menu component
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteOpen = () => {
    setOpenDelete(true);
    setAnchorEl(null);
  };

  const handleOpenUpdate = () => {
    setAnchorEl(null);
    setOpenUpdate(true);
    const updateBooking = bookings?.find(booking => booking?.id === id)
    setBookingObj(updateBooking)
  }

  return (
    <Box width={"100%"}>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": `menu-${id}`,
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#f3f3f1",
          },
        }}
      >
        <MenuItem
          onClick={handleOpenUpdate}
        >
          <BiEditAlt style={{ fontSize: 18, marginRight: 5 }} />
          Update
        </MenuItem>
        <MenuItem onClick={handleDeleteOpen}>
          <MdDeleteOutline style={{ fontSize: 18, marginRight: 5 }} />
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
}
