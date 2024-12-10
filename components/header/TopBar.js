import { Box, Stack, Typography, IconButton, Tooltip, useTheme, useMediaQuery} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export default function TopBar() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
        width={'100%'}
        height={"40px"}
        bgcolor={'#1b5e20'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        px={5}
        gap={1}
    >
            <Stack direction={'row'} gap={1} display={isSmallScreen ? "none" : 'flex'}>
               <Tooltip
                title="facebook"
                arrow
               >
                <IconButton>
                        <FaFacebookSquare
                            style={{
                                color: '#f5f5f5',
                                fontSize: 20
                            }}
                        />
                    </IconButton>
               </Tooltip>
               <Tooltip
                title="instagram"
                arrow
               >
                <IconButton>
                        <FaSquareInstagram
                            style={{
                                color: '#f5f5f5',
                                fontSize: 20
                            }}
                        />
                    </IconButton>
               </Tooltip>

               <Tooltip
                title="X(formely twitter)"
                arrow
               >
                <IconButton>
                        <BsTwitterX
                            style={{
                                color: '#f5f5f5',
                                fontSize: 20
                            }}
                        />
                    </IconButton>
               </Tooltip>
              
    
            </Stack>
        
            <Stack
                direction={'row'}
                gap={1}
            >
                <Typography
                    variant='body2'
                    className='interFont'
                    color={'#f5f5f5'}
                >Call Us For A Qoute:</Typography>
                <Link 
                    href="tel:770-589-4000"
                    style={{
                        textDecoration: 'none'
                    }}
                >
                
                    <Typography
                    variant='body2'
                    className='interFont'
                    color={'#fff'}
                    sx={{
                        textDecoration: 'underline'
                    }}
                >(770) 589-4000</Typography>
                </Link>
            </Stack>
    </Box>
  )
}
