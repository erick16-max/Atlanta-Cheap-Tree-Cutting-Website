import React, { useContext, useState } from "react";
import { Button, Avatar, Typography, Box, Stack } from "@mui/material";
import Image from "next/image";
import ProfileImage from "../../public/gegepic.jpg"
import { RiArrowDropDownFill } from "react-icons/ri";
import AppContext from "@/context/AppContext";
import MenuDropDown from "./MenuDropDown";

export default function AvatarButton() {
    const [profile, setProfile] = useState(false)
    const {user} = useContext(AppContext)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

  


  return (
   <d>
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
            !user ? (
                <Image src={ProfileImage} height={40}  alt="profile image"/>
            ): (

            <Typography variant="body1" color={"text.primary"} fontWeight={500}>
              {user?.displayName[0] || user?.email[0] }
            </Typography>
            )
        }
      </Avatar>
      <Stack direction={'row'} alignItems={'center'}>
        <Typography variant="body2" color={"text.primary"} fontSize={13}  fontWeight={400}>
          {user?.displayName || user?.email}
        </Typography>
        {/* <Typography variant="body2" color={"text.secondary"} fontSize={12} fontWeight={400} >
          +1 720067228
        </Typography> */}
        <RiArrowDropDownFill style={{color: '#242424'}}/>
      </Stack>
    </Box>
    <MenuDropDown
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        handleClick={handleClick}
      />

   </d>
  );
}
