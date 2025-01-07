import { Box, Button,useMediaQuery, useTheme} from '@mui/material'
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react'
import AppContext from '@/context/AppContext';
import Link from 'next/link';



export const menuItems = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard"
  },
  {
    id: 3,
    
    name: "About Us",
    path: '/aboutus'
  },
  {
    id: 4,

    name: "Services",
    path: '/services'
  },
  {
    id: 5,

    name: "Portfolio",
    path: '/portfolio'
  },
  {
    id: 6,
    name: "Contact Us",
    path: '/contactus'
  },
]

export default function MenuList() {
  const theme = useTheme();
  const isTabletisSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery("(max-width:900px)");

  const pathName = usePathname()

  const {user, isUser} = useContext(AppContext)



 
  return (
    <Box
        display={'flex'}
        width={'100%'}
        alignItems={'center'}
        flexDirection={isTablet ? 'column' : 'row'}
        gap={isTablet ? 2 : 1}
        mt={isTablet ? 3 : 0}
    >
       {
        menuItems.map(item => {
          return(
            <Button 
              key={item.id}
              color='secondary'
              sx={{
                textTransform: 'none',
                display: isUser && item.name === "Dashboard" ? 'none' : 'block',
                backgroundColor: item.path === pathName ? 'rgba(50, 110, 54, 0.6)' : ''
                
              }}
              LinkComponent={Link}
              href={item.path}
              >{item.name}</Button>
          )
        })
       }
       
    </Box>
  )
}
