import React, { useState } from "react";
import { Button, Avatar, Typography, Box, Stack } from "@mui/material";
import Image from "next/image";
import ProfileImage from "../../public/gegepic.jpg"

export default function AvatarButton() {
    const [profile, setProfile] = useState(true)
  return (
    <Box
        display={'flex'}
        alignItems={'center'}
        gap={1}
    >
      <Avatar
        sx={{
          cursor: "pointer",
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: "#8daf90",
        }}
      >
        {
            profile ? (
                <Image src={ProfileImage} height={40}  alt="profile image"/>
            ): (

            <Typography variant="body1" color={"text.primary"} fontWeight={500}>
            EG
            </Typography>
            )
        }
      </Avatar>
      <Stack>
        <Typography variant="body2" color={"text.primary"} fontSize={13}  fontWeight={400}>Erick Gege</Typography>
        <Typography variant="body2" color={"text.secondary"} fontSize={12} fontWeight={400} >guest user</Typography>
      </Stack>
    </Box>
  );
}
