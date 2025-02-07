import AppContext from "@/context/AppContext";
import ColorModeContext from "@/theme/CustomThemeProvider";
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
import React, { useContext, useState } from "react";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import ResetPasswordDialog from "./ResetPasswordDialog";
import { signOutUser } from "@/firebase/Firebase";
import UpdateUserInfoModal from "./UpdateUserInfoModal";

export default function UserProfileCard() {
  const { user, isUser, isUserProfile, userProfile } = useContext(AppContext);
  const { isMobile, isExtraMobile } = useContext(ColorModeContext);
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const topText = user?.displayName || user?.email || "";
  const topTextProfile = userProfile?.displayName || userProfile?.email || "";
  const truncatedNumber = isMobile ? 5 : 10;
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
    >
      <Card
        sx={{
          width: isMobile ? "100%" : 600,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          alignItems: "center",
          backgroundColor: "#f9f9f9",
          boxShadow: 0,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            width: "100%",
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color={"text.primary"} fontWeight={600}>
            Person Information
          </Typography>
          <Stack>
            <Avatar
              sx={{
                cursor: "pointer",
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: "#8daf90",
              }}
            >
              {userProfile?.photoURL || user?.photoURL ? (
                <Image
                  src={userProfile?.photoURL || user?.photoURL}
                  height={80}
                  width={80}
                  alt="profile image"
                />
              ) : (
                <Typography
                  variant="body1"
                  color={"text.primary"}
                  fontWeight={500}
                >
                  {isUserProfile ? topTextProfile[0] : topText[0]}
                </Typography>
              )}
            </Avatar>
          </Stack>
          <Stack gap={1} alignItems={"center"}>
            <Typography variant="body1" gutterBottom textAlign={"center"}>
              <strong>Fullname:</strong> {userProfile?.displayName}
            </Typography>
            <Typography variant="body1" gutterBottom textAlign={"center"}>
              <strong>Email:</strong> {userProfile?.email}
            </Typography>
           { userProfile?.secondaryEmail && <Typography variant="body1" gutterBottom textAlign={"center"}>
              <strong>Secondary Email:</strong> {userProfile?.secondaryEmail}
            </Typography>}
            <Typography variant="body1" gutterBottom textAlign={"center"}>
              <strong>Phone Number:</strong> {userProfile?.phoneNumber}
            </Typography>
            <Chip
              label={"Edit Info"}
              sx={{
                maxWidth: 140,
                fontWeight: 600,
                textTransform: "none",
              }}
              icon={<FaEdit />}
              component={Button}
              onClick={() => setOpenUpdate(true)}
            />
          </Stack>
        </Card>
        {/* <Divider sx={{width: '100%'}} /> */}
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={2}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              height: 50,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              mt: 2,
              px: 3,
            }}
            onClick={() => setOpen(true)}
          >
            Reset Password
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              height: 50,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              mt: 1,
              px: 3,
            }}
            onClick={signOutUser}
          >
            Logout
          </Button>
        </Box>
        <ResetPasswordDialog open={open} setOpen={setOpen} />

        <UpdateUserInfoModal open={openUpdate} setOpen={setOpenUpdate} />
      </Card>
    </Box>
  );
}
