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
        sx={{
            borderBottom: '1px solid #e0e0e0',
            boxShadow: 0,
        }}
    >
     <Box
        width={'100%'}
        height={"40px"}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        px={isSmallScreen ? 1 : 3}
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
                                fontSize: 20,
                                color: '#424242'
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
                                fontSize: 20,
                                color: '#424242'
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
                                fontSize: 20,
                                color: '#424242'
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
                >Call us for a qoute:</Typography>
                <Link 
                    href="tel:770-589-4000"
                    style={{
                        textDecoration: 'none'
                    }}
                >
                
                    <Typography
                    variant='body2'
                    className='interFont'
                    color={'text.primary'}
                    sx={{
                        textDecoration: 'underline',
                        fontWeight: 600
                    }}
                > (770) 589-4000</Typography>
                </Link>
            </Stack>
    </Box>
    </Box>
  )
}
