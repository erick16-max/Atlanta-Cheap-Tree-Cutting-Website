import React from 'react'
import { Drawer, Box, Typography, Stack, IconButton, Divider } from '@mui/material'
import LogoBrand from '../general/LogoBrand'
import { MdOutlineCancelPresentation } from "react-icons/md"
import MenuList from './MenuList'

export default function SidebarDrawer({openDrawer, setOpenDrawer}) {
  return (
    <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor='right'
    >
        <Box
            width={'280px'}
            height={'100vh'}
        >
           <Stack
            width={'100%'}
            justifyContent={'space-between'}
            direction={'row'}
            p={2}
           >
            <LogoBrand />
                <IconButton
                    sx={{
                        backgroundColor: 'divider',
                        height: 30,
                        width: 30,
                        borderRadius: 1,
                    }}
                    onClick={() => setOpenDrawer(false)}
                >
                   <Typography
                    variant='body1'
                    color={'text.primary'}
                   >
                        X
                   </Typography>
                </IconButton>
           </Stack>
           <Divider />
           <MenuList />
        </Box>
    </Drawer>
  )
}
