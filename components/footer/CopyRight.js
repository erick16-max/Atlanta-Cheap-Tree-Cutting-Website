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


export default function CopyRight() {
  const { isTablet, isMobile} = useContext(ColorModeContext)

  return (
    <Box
    width={"100%"}
    py={1}
    bgcolor={"secondary.dark"}
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    color={"#f5f5f5"}
  >
    <Stack>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        color={'#b1b1b1'}
      >
        <MdCopyright fontSize={15} />
        <Typography variant="body2" color={'#b1b1b1'} fontWeight={400} fontSize={11} mt={"1px"}>
        2024 · Atlanta Cheap Tree Solution · All rights reserved
        </Typography>
      </Box>
      <Box
         display={"flex"}
         alignItems={"center"}
         justifyContent={"center"}
      >
        <Typography variant="body2" color={'#b1b1b1'} fontWeight={400} fontSize={11} mt={"1px"}>
            Made with <span><FaHeart fontSize={10} color="red"/></span>  by <Link target="__blank" href={'https://gegerick.com'} style={{color: '#dedede', fontWeight: 500}}>gegerick.com</Link>
        </Typography>
          {/* <IconButton>
              <FaSquareFacebook style={{fontSize: 20, color: '#dedede'}}/>
          </IconButton>
          <IconButton>
              <FaInstagramSquare style={{fontSize: 20, color: '#dedede'}}/>
          </IconButton>
          <IconButton>
              <FaSquareXTwitter style={{fontSize: 20, color: '#dedede'}}/>
          </IconButton> */}
      </Box>
    </Stack>
  </Box>
  );
}