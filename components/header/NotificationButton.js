import {
    Tooltip,
    IconButton,
    Badge,
    Menu,
    Box,
    Typography,
    Stack,
    Card,
    Alert,
    Chip,
  } from "@mui/material";
  import React, { useContext, useEffect } from "react";
  import { MdOutlineDarkMode } from "react-icons/md";
  import { FiBell } from "react-icons/fi";
  import { doc, onSnapshot, updateDoc } from "firebase/firestore";
  import { db, auth } from "@/firebase.config";
  import { PiSpeakerSimpleHighFill } from "react-icons/pi";
  import moment from "moment";
import AppContext from "@/context/AppContext";
import ColorModeContext from "@/theme/CustomThemeProvider";
  
  export default function NotificationButton() {
    const { isMobile } = useContext(ColorModeContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { notifications, setNotifications, userProfile } = useContext(AppContext);
  
    const handleClick = async (event) => {
      setAnchorEl(event.currentTarget);
      if (
        Object.keys(userProfile)?.length > 0 &&
        Object.keys(notification)?.length
      ) {
        const docRef = doc(
          db,
          "notifications",
          `254${userProfile?.phoneNumber?.slice(1)}`
        );
        await updateDoc(docRef, {
          read: true,
        });
      }
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
  
    // useEffect(() => {
    //   const unsub = onSnapshot(
    //     doc(db, "users", auth?.currentUser?.uid),
    //     (data) => {
    //       onSnapshot(
    //         doc(db, "notifications", `254${data?.data()?.phoneNumber?.slice(1)}`),
    //         async (info) => {
    //           if (info.exists()) {
    //             setNotification({
    //               id: info?.id,
    //               time: info?.data()?.time,
    //               message: info?.data()?.message,
    //               read: info?.data()?.read,
    //             });
    //           } else {
    //             setNotification({});
    //           }
    //         }
    //       );
    //     }
    //   );
    //   return unsub;
    // }, []);
  
    return (
      <Box>
        <IconButton
          sx={{
            borderRadius: 1,
          }}
          onClick={handleClick}
        >
          <Tooltip title="notification">
            <Badge
              badgeContent={1}
              color="error"
            >
              <FiBell />
            </Badge>
          </Tooltip>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Box width={240} p={2} minHeight={100} borderRadius={"12px"}>
            <Box
              display={"flex"}
              width={"100%"}
              justifyContent={"space-between"}
              gap={1}
              alignItems="center"
            >
              <Typography
                variant="body2"
                fontWeight={500}
                gutterBottom
                sx={{color: 'primary.light'}}
              >
                Notification
              </Typography>
              <Typography
                variant="body2"
                color={"text.secondary"}
                fontSize={12}
                fontWeight={400}
                gutterBottom
              >
                3 days ago
              </Typography>
            </Box>
            <Typography
              variant="body2"
              mt={"2px"}
              color={"text.primary"}
              fontWeight={400}
            >
             Your booking was submitted successfully! We will contact you soon.
            </Typography>
          </Box>
        </Menu>
      </Box>
    );
  }