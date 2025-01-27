import { Avatar, Box, Button, IconButton, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import AvatarButton from "./AvatarButton";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/navigation";
import NotificationButton from "./NotificationButton";
import BookAppBarBtn from "../general/BookAppBarBtn";

export default function UserAccount({isTablet, setOpenDrawer, user}) {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isExtraMobileScreen = useMediaQuery("(max-width:446px)");
  const router = useRouter()


  return (
    <Box width={"100%"}>
     {
      user !==null && user && JSON.stringify(user) !== "{}" ? (
        <Stack direction={"row"} gap={1} alignItems={'center'}>
          <NotificationButton />
          <BookAppBarBtn />
          <AvatarButton/>
        </Stack>
      ):(
        <Stack direction={"row"} gap={1} alignItems={'center'}>
        <Button
          color="secondary"
          sx={{
            borderRadius: "12px",
            px: isExtraMobileScreen ? 1 : 3,
            py: 1,
            textTransform: "none",
            fontWeight: 600,
          }}
          onClick={() => router.push("/login")}
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
          onClick={() => router.push("/signup")}

        >
          Sign Up
        </Button>
      
      </Stack>
      )
     }
    </Box>
  );
}
