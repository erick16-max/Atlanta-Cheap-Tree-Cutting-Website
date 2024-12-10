import { Box, Button,useMediaQuery, useTheme} from '@mui/material'
import React from 'react'

export default function MenuList() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
        flexDirection={isSmallScreen ? 'column' : 'row'}
        gap={isSmallScreen ? 2 : 0}
        mt={isSmallScreen ? 3 : 0}
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
