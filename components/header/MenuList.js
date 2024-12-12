import { Box, Button,useMediaQuery, useTheme} from '@mui/material'
import React from 'react'

export default function MenuList() {
  const theme = useTheme();
  const isTabletisSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery("(max-width:900px)");

  const menuItems = [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "About Us"
    },
    {
      id: 3,
      name: "Services"
    },
    {
      id: 4,
      name: "Portfolio"
    },
    {
      id: 5,
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
                textTransform: 'none'
              }}
              >{item.name}</Button>
          )
        })
       }
       
    </Box>
  )
}
