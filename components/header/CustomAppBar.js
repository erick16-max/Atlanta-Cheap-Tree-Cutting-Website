import {
  AppBar,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import LogoBrand from "../general/LogoBrand";
import MenuList from "./MenuList";
import { TiThMenuOutline } from "react-icons/ti";
import { LuSquareMenu } from "react-icons/lu";
import SidebarDrawer from "./SidebarDrawer";
import UserAccount from "./UserAccount";
import { FiMenu } from "react-icons/fi";
import AppContext from "@/context/AppContext";
import NotificationAlert from "../general/NotificationAlert";

export default function CustomAppBar({ navBg, mainPage }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isTablet = useMediaQuery("(max-width:900px)");

  const { user, setUser } = React.useContext(AppContext);

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        py: 1,
        px: isSmallScreen ? 1 : 3,
        backgroundColor: "#ffffff",
        boxShadow: navBg  ? 3 : 0,
        mt: navBg || mainPage ? 0 : "40px", // Adjust margin based on scroll
        transition: "margin-top 0.3s ease-in-out", // Smooth transition
        border: mainPage ? "1px solid #eeeeee" : "none"
      }}
    >
      <Box
        width={'100%'}
        maxWidth={'1700px'}
        display={'flex'}
        margin={'auto'}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box sx={{ flexGrow: 0 }} display={"flex"} alignItems={"center"}>
            <IconButton
              sx={{
                display: isTablet ? "block" : "none",
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
              onClick={() => setOpenDrawer(true)}
            >
              <FiMenu fontSize={24} />
            </IconButton>
            <LogoBrand />
          </Box>
          <Box sx={{ flexGrow: 0 }} display={!isTablet ? "flex" : "none"}>
            <MenuList />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <UserAccount
              setOpenDrawer={setOpenDrawer}
              isTablet={isTablet}
              user={user}
            />
          </Box>
        </Box>
        <SidebarDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <NotificationAlert />
      </Box>
    </AppBar>
  );
}
