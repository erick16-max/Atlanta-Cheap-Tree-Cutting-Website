import { Grid, Stack, Typography, Box, IconButton } from '@mui/material'
import Image from 'next/image'
import React, { useContext } from 'react'
import LogoImage from "../../public/logo.png"
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import { IoCall } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter, FaHeart } from "react-icons/fa6";
import { menuItems } from '../header/MenuList';
import AppContext from '@/context/AppContext';
import { usePathname } from 'next/navigation';
import GetQuoteButton from './GetQuoteButton';


export default function FooterGrid() {
    const {isUser} = useContext(AppContext)
    const pathName = usePathname()
  return (
    <Grid container rowSpacing={5} columnSpacing={2} p={4}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
            <Stack width={'100%'} gap={1}>
                <Image 
                    src={LogoImage}
                    alt='Atlatanta Cheap Tree cutting solution'
                    width={150}
                />
                <Stack direction={'row'} color={'#dedede'} alignItems={'center'} gap={'4px'}>
                    {/* <MdEmail fontSize={20}/>  */}
                    <Typography variant='body2' color={'#dedede'} fontWeight={500}>Email:</Typography>
                    <Link href={'mailto:atlantacheaptreesolutions@gmail.com'} style={{color: 'inherit'}}>
                        <Typography variant='body2' color={'#eeeeee'} fontWeight={500}>atlantacheaptreesolutions@gmail.com</Typography>
                    </Link>
                </Stack>
                <Stack direction={'row'} color={'#dedede'} alignItems={'center'} gap={'4px'}>
                    {/* <IoCall fontSize={20}/>  */}
                    <Typography variant='body2' color={'#dedede'} fontWeight={500}>Call:</Typography>
                    <Link href={"tel:770-589-4000"} style={{color: 'inherit'}}>
                        <Typography variant='body2' color={'#eeeeee'} fontWeight={500}>770 589 4000</Typography>
                    </Link>
                </Stack>
                <Box
         display={"flex"}
         alignItems={"center"}
         gap={2}
      >

          <IconButton>
              <FaSquareFacebook style={{fontSize: 20, color: '#eeeeee'}}/>
          </IconButton>
          <IconButton>
              <FaInstagramSquare style={{fontSize: 20, color: '#eeeeee'}}/>
          </IconButton>
          <IconButton>
              <FaSquareXTwitter style={{fontSize: 20, color: '#eeeeee'}}/>
          </IconButton>
      </Box>
            </Stack>
        </Grid>
       
        <Grid item lg={4}  md={4} sm={12} xs={12}>
            <Stack gap={1}>
                <Typography variant='body1' fontWeight={600} color={'#eeeeee'} gutterBottom>Useful Links</Typography>

                {
                    menuItems.map(menu => {
                        return(
                            <Link 
                                key={menu.id}
                                href={menu.path} 
                                color='inherit' 
                                style={{
                                    textDecoration: 'none',
                                    display: menu.name === "Dashboard" && !isUser ? 'none' : ''
                                    }}
                            >
                                <Typography variant='body1' fontWeight={500} color={'#dedede'}>
                                    {menu.name}
                                </Typography>
                            </Link>
                        )
                    })
                }
                
            </Stack>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
            <Stack>
                <Typography variant='h6' fontWeight={600} color={'#eeeeee'} gutterBottom>
                    Get In Touch
                </Typography>
                <Typography variant='body1' fontWeight={400} color={'#dedede'} gutterBottom>
                Thank you for considering Atlanta Cheap Tree Solutions for your tree care and 
                yard cleanup needs. Contact us today to schedule a consultation or to learn more
                 about how we can help you maintain a beautiful and safe outdoor environment.
                </Typography>
                <GetQuoteButton />
            </Stack>
        </Grid>
    </Grid>
  )
}
