import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Stack,
  Grid,
  TextField,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import AppContext from "@/context/AppContext";
import ColorModeContext from "@/theme/CustomThemeProvider";
import SelectUserField from "./SelectUserField";
import { updateUserStatus } from "@/firebase/FirebaseUser";

export default function UpdateUserModal({ open, setOpen }) {
    const {isMobile} = useContext(ColorModeContext)
    const {userObj, selectedItemId, setUsersTableData} = useContext(AppContext)
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false)

    const handleUpdateUser = async() => {
        try {
            setLoading(true)
            const response = await updateUserStatus(selectedItemId, userObj?.email, status, setUsersTableData)
            if(response === 'success'){
              setOpen(false)
            }
            
        } catch (error) {
            console.log("error")
        }finally{
            setLoading(false)
        }
    }

  
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)} // Allow closing by clicking outside
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(0, 0, 0, 0.5)", // Background overlay
      }}
    >
      <Box
        width={isMobile ? "94%" : 600}
        maxHeight="90vh" // Ensures modal doesn't overflow screen height
        bgcolor={"#ffffff"}
        borderRadius={2}
        boxShadow={3}
        p={3}
        sx={{
          overflowY: "auto", // Enables vertical scroll if content overflows
        }}
      >
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6">Update user</Typography>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              borderRadius: 1,
              width: 40,
              height: 40,
              fontSize: 22,
            }}
          >
            x
          </IconButton>
        </Box>

        <Stack gap={2} mt={3}>
          <SelectUserField setStatus={setStatus} status={status}/>
          <Button
            variant="contained"
            sx={{
                height: 55,
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '12px'
            }}
            onClick={handleUpdateUser}
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} thickness={4} /> : "Update User"}
          </Button>
        </Stack>
       
      </Box>
    </Modal>
  );
}
