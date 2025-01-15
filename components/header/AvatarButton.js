import React, { useContext, useState } from "react";
import { Button, Avatar, Typography, Box, Stack } from "@mui/material";
import Image from "next/image";
import ProfileImage from "../../public/gegepic.jpg"
import { RiArrowDropDownFill } from "react-icons/ri";
import AppContext from "@/context/AppContext";
import MenuDropDown from "./MenuDropDown";
import { truncateString } from "@/util/LogicFunctions";

export default function AvatarButton() {
    const [profile, setProfile] = useState(false)
    const {user, isUser, isUserProfile, userProfile} = useContext(AppContext)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

  const topText = user?.displayName || user?.email || ""
  const topTextProfile = userProfile?.displayName || userProfile?.email || ""



  return (
   <div>
       <Box
        display={'flex'}
        alignItems={'center'}
        gap={1}
        sx={{
          cursor: 'pointer',
          width: 160,
          p: 1,
          "&:hover": {
            backgroundColor: 'divider',
            borderRadius: '12px',
          }
        }}
      onClick={handleClick}
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
            userProfile?.photoURL || user?.photoURL ? (
                <Image src={userProfile?.photoURL || user?.photoURL} height={40} width={40}  alt="profile image"/>
            ): (

            <Typography variant="body1" color={"text.primary"} fontWeight={500}>
              {isUserProfile ? topTextProfile[0] : topText[0]}
            </Typography>
            )
        }
      </Avatar>
      <Stack direction={'row'} alignItems={'center'}>
        <Typography variant="body2" color={"text.primary"} fontSize={13}  fontWeight={400}>
         { isUserProfile ? truncateString(topTextProfile, 10) : truncateString(topText, 10)}
        </Typography>
        <RiArrowDropDownFill style={{color: '#242424', fontSize: 16}}/>
      </Stack>
    </Box>
    <MenuDropDown
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        handleClick={handleClick}
      />

   </div>
  );
}
