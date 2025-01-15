"use client"
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { MdCopyright } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter, FaHeart } from "react-icons/fa6";
import ColorModeContext from "@/theme/CustomThemeProvider";
import Link from "next/link";


export default function CopyRight({bgColor}) {
  const { isTablet, isMobile} = useContext(ColorModeContext)
  const date = new Date()

  return (
    <Box
    width={"100%"}
    py={1}
    bgcolor={bgColor ? bgColor : "secondary.dark"}
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    color={"#f5f5f5"}
  >
    <Stack p={'2px'} gap={1}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        color={ bgColor ? '#555555' :'#dedede'}
      >
        <MdCopyright fontSize={15} />
        <Typography variant="body2" color={bgColor ? '#555555' :'#dedede'} fontWeight={400} fontSize={11} mt={"1px"}>
        {date.getFullYear()} · Atlanta Cheap Tree Solution · All rights reserved
        </Typography>
      </Box>
      <Box
         display={"flex"}
         alignItems={"center"}
         justifyContent={"center"}
      >
        <Typography variant="body2" color={bgColor ? '#555555' :'#dedede'} fontWeight={400} fontSize={11} mt={"1px"}>
            Made with <span><FaHeart fontSize={10} color="red"/></span>  by <Link target="__blank" href={'https://gegerick.com'} style={{color: bgColor ? '#555555' :'#dedede', fontWeight: 500}}>gegerick.com</Link>
        </Typography>
         
      </Box>
    </Stack>
  </Box>
  );
}