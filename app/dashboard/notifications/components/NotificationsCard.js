import {
  Card,
  Stack,
  Typography,
  Avatar,
  Box,
  Chip,
  Divider,
  Button,
  IconButton,
  Alert, CircularProgress
} from "@mui/material";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import AppContext from "@/context/AppContext";
import ColorModeContext from "@/theme/CustomThemeProvider";
import moment from "moment";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { deleteCollectionObj } from "@/firebase/Notifications";
import { FaRegBellSlash } from "react-icons/fa6";



export default function NotificationsCard() {
  const { user, isUser, isUserProfile, userProfile, notifications } = useContext(AppContext);
  const { isMobile, isExtraMobile } = useContext(ColorModeContext);
  const listLength = notifications?.length
  const [deletedNotification, setDeletedNotification] = useState("")
    const [deleteLoading, setDeleteLoading] = useState(false)
    const [isDeleted, setIsDeleted] = useState("")

  const handleDeleteNotification = async(documentId) => {
      setDeletedNotification(documentId)
      try {
        setDeleteLoading(true)
        const response = await deleteCollectionObj("notifications", documentId)
        if(response === true){
          setIsDeleted("deleted successfully")
        }else{
          setIsDeleted("error occured")
        }
  
      } catch (error) {
        setIsDeleted("error occured")
      }finally{
        setTimeout(() => {
          setIsDeleted("")
        }, 3000)
      }
    }
 
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
         {isDeleted && <Alert severity="error">{isDeleted}</Alert>}
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
                      {/* <Typography
                        variant="body2"
                        fontWeight={600}
                        gutterBottom
                        sx={{ color: "primary.main" }}
                      >
                        {"Notification"}
                      </Typography> */}
                      <Typography
                        variant="body2"
                        color={"text.secondary"}
                        fontSize={12}
                        fontWeight={400}
                        gutterBottom
                      >
                       {moment.unix(notification?.timestamp?.seconds).fromNow()}
                      </Typography>
                      <IconButton
                        sx={{
                          width: 35,
                          height: 35,
                          borderRadius: 1,
                          backgroundColor: '#f5f5f5',
                          ":hover": {
                            backgroundColor: 'red',
                            color: '#f5f5f5',
                          }
                        }}
                        onClick={() => handleDeleteNotification(notification?.id)}
                      >
                        { deleteLoading && deletedNotification === notification?.id ? (
                                            <CircularProgress size={12} thickness={3} />
                                          ): (
                                            <MdOutlineDeleteOutline />
                                          )
                                          }
                      </IconButton>
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
       {notifications?.length === 0 && (
        <Box
          width={'100%'}
          height={200}
          display={'flex'}
          alignItems={'center'}
          justifyContent={"center"}
          color={'text.secondary'}
          flexDirection={'column'}
        >
          <FaRegBellSlash fontSize={64} />
          <Typography
            textAlign={'center'}
            fontWeight={600}


          >
            No Notifications
          </Typography>
        </Box>
       )}
      </Card>
    </Box>
  );
}
