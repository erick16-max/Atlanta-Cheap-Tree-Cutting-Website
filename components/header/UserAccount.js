import { Avatar, Box, Button, IconButton, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import AvatarButton from "./AvatarButton";
import { FiMenu } from "react-icons/fi";

export default function UserAccount({isTablet, setOpenDrawer}) {
  const theme = useTheme()
  const [user, setUser] = useState(false)
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isExtraMobileScreen = useMediaQuery("(max-width:446px)");


  return (
    <Box width={"100%"}>
     {
      user ? (
     <AvatarButton />
      ):(
        <Stack direction={"row"} gap={1}>
        <Button
          color="secondary"
          sx={{
            borderRadius: "12px",
            px: isExtraMobileScreen ? 1 : 3,
            py: 1,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Log In
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "12px",
            px: isExtraMobileScreen ? 1 : 3,
            py: 1,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Sign Up
        </Button>
        <IconButton
          sx={{
            display: isTablet ?'block' : 'none'
          }}
          onClick={() => setOpenDrawer(true)}
        >
            <FiMenu fontSize={24}/>
        </IconButton>
      </Stack>
      )
     }
    </Box>
  );
}
