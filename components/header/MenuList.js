import { Box, Button,useMediaQuery, useTheme} from '@mui/material'
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react'
import AppContext from '@/context/AppContext';

export default function MenuList() {
  const theme = useTheme();
  const isTabletisSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery("(max-width:900px)");

  const pathName = usePathname()

  const {user} = useContext(AppContext)



  const menuItems = [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "Dashboard"
    },
    {
      id: 3,
      
      name: "About Us"
    },
    {
      id: 4,

      name: "Services"
    },
    {
      id: 5,

      name: "Portfolio"
    },
    {
      id: 6,
      name: "Contact Us"
    },
  ]
  return (
    <Box
        display={'flex'}
        width={'100%'}
        alignItems={'center'}
        flexDirection={isTablet ? 'column' : 'row'}
        gap={isTablet ? 2 : 0}
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
                display: Object.keys(user)?.length < 1 && item.name === "Dashboard" ? 'none' : 'block'
              }}
              >{item.name}</Button>
          )
        })
       }
       
    </Box>
  )
}
