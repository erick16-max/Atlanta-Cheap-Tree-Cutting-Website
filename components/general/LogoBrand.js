import React from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { BiHomeSmile } from "react-icons/bi";
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from "../../public/logo.png"


export default function LogoBrand() {
    const theme = useTheme()
    const isExtraTablet = useMediaQuery("(max-width:1088px)");
    const isTablet = useMediaQuery("(max-width:900px)");
    const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Link href={'/'} style={{cursor: 'pointer', textDecoration: 'none'}}>
        <Box display={'flex'} alignItems={'center'}  color={'primary.main'} >
          <Image 
            src={LogoImage}
            alt='Logo'
            height={isMobile ? 36 : 60}
          />
        </Box>
    </Link>
  )
}