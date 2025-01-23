import {
  Card,
  Stack,
  Typography,
  Avatar,
  Box,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import React, { useContext } from "react";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import AppContext from "@/context/AppContext";
import ColorModeContext from "@/theme/CustomThemeProvider";
import moment from "moment";

export default function NotificationsCard() {
  const { user, isUser, isUserProfile, userProfile, notifications } = useContext(AppContext);
  const { isMobile, isExtraMobile } = useContext(ColorModeContext);
  const listLength = notifications?.length
 
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
    >
      <Card
        variant="outlined"
        sx={{
          width: isMobile ? "100%" : 600,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          alignItems: "center",
          backgroundColor: "#ffffff",
          boxShadow: 0,
          p: 3,
        }}
      >
       {notifications.map((notification, index) => {
                
                return (
                  <Box width={'100%'} px={2}  borderRadius={"12px"} key={notification?.id}>
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
       
      </Card>
    </Box>
  );
}
