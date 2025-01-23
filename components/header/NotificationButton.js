import {
  Tooltip,
  IconButton,
  Badge,
  Menu,
  Box,
  Typography,
 Divider,
 Button,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import {
  doc,
  onSnapshot,
  updateDoc,
  where,
  query,
  collection,
} from "firebase/firestore";
import { db, auth } from "@/firebase.config";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import AppContext from "@/context/AppContext";
import ColorModeContext from "@/theme/CustomThemeProvider";
import moment from "moment";
import Link from "next/link";

export default function NotificationButton() {
  const { isMobile } = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const { notifications, setNotifications, userProfile } =
    useContext(AppContext);

  useEffect(() => {
    const user = auth.currentUser;

    if (!user) return;

    // Listen to all notifications for the current user
    const notificationsRef = query(
      collection(db, "notifications"),
      where("email", "==", user.email)
    );

    const unsubscribe = onSnapshot(
      notificationsRef,
      (snapshot) => {
        const updatedNotifications = [];
        snapshot.forEach((doc) => {
          updatedNotifications.push({ id: doc.id, ...doc.data() });
        });
        setNotifications(updatedNotifications);
        // Update the unread count
        const unread = updatedNotifications.filter(
          (notif) => !notif.read
        ).length;
        setUnreadCount(unread);
      },
      (error) => {
        console.error("Error fetching notifications:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleClick = async (event) => {
    setAnchorEl(event.currentTarget);
    // Mark all notifications as read
    notifications.forEach(async (notification) => {
      if (!notification.read) {
        try {
          const notifDocRef = doc(db, "notifications", notification.id);
          await updateDoc(notifDocRef, { read: true });
        } catch (error) {
          console.error("Error marking notification as read:", error);
        }
      }
    });
    // Reset unread count
    setUnreadCount(0);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const listLength = notifications?.length


  return (
    <Box>
      <IconButton
        sx={{
          borderRadius: 1,
        }}
        onClick={handleClick}
      >
        <Tooltip title="notification">
          <Badge badgeContent={unreadCount} color="error">
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
        {notifications.map((notification, index) => {
          
          return (
            <Box width={240} px={2}  borderRadius={"12px"} key={notification?.id}>
              <Box
                display={"flex"}
                width={"100%"}
                justifyContent={"space-between"}
                gap={1}
                alignItems="center"
              >
                <Typography
                  variant="body2"
                  fontWeight={600}
                  gutterBottom
                  sx={{ color: "primary.main" }}
                >
                  {"Notification"}
                </Typography>
                <Typography
                  variant="body2"
                  color={"text.secondary"}
                  fontSize={12}
                  fontWeight={400}
                  gutterBottom
                >
                 {moment.unix(notification?.timestamp?.seconds).fromNow()}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                mt={"2px"}
                color={"text.primary"}
                fontWeight={400}
              >
                {notification?.message}
              </Typography>
             { listLength !== index + 1 &&  <Divider sx={{my: 2}}/> }
            </Box>
          );
        })}
        <Box
          width={'100%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
        <Button
          color="secondary"
          sx={{
            fontSize: 12,
            fontWeight: 500,
            textTransform: 'none',
            color: '#454545',
            my: 1,
            textDecoration: 'underline',
          }}
          LinkComponent={Link}
          href="/dashboard/notifications"
        >
          See more
        </Button>
        </Box>
      </Menu>
    </Box>
  );
}
