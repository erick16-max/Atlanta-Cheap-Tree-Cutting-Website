import { AppBar, Box, IconButton, useMediaQuery, useTheme} from '@mui/material';
import React, { useState } from 'react';
import LogoBrand from '../general/LogoBrand';
import MenuList from './MenuList';
import { TiThMenuOutline } from "react-icons/ti";
import { LuSquareMenu } from "react-icons/lu";
import SidebarDrawer from './SidebarDrawer';
import UserAccount from './UserAccount';

export default function CustomAppBar({ navBg }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isTablet = useMediaQuery("(max-width:900px)");

  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        py: 1,
        px: isSmallScreen ? 1 : 3,
        backgroundColor: "#ffffff",
        boxShadow: navBg ? 3 : 0,
        mt: navBg ? 0 : "40px", // Adjust margin based on scroll
        transition: "margin-top 0.3s ease-in-out", // Smooth transition
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Box sx={{ flexGrow: 0 }}>
          <LogoBrand />
        </Box>
        <Box sx={{ flexGrow: 0 }} display={!isTablet ? 'flex' : 'none'}>
         <MenuList />
        </Box >
        <Box sx={{ flexGrow: 0 }}>
          <UserAccount setOpenDrawer={setOpenDrawer} isTablet={isTablet}/>
        </Box>
        <SidebarDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
      </Box>
    </AppBar>
  );
}
