import { Box, Button, Card, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineFilterAlt } from "react-icons/md";
import AdminBookingDataTable from './AdminBookingGridData';
import { GetAllUserBookings } from '@/firebase/Booking';
import AppContext from '@/context/AppContext';

export default function AdminBookingCard() {
    const {userProfile} = useContext(AppContext)



  return (
    <Card
        variant='outlined'
        sx={{
            width: '100%',
            p: 3,
            my: 2,
        }}
    >
        <Box
            display={'flex'}
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
            px={2}
            py={1}
        >
            <Stack>
                <Typography
                    variant='body1'
                    color={'text.primary'}
                    fontWeight={700}
                >
                    Recent Bookings
                </Typography>
                <Typography
                    variant='body2'
                    color={'text.secondary'}
                    fontWeight={500}
                >
                   All your bookings events.
                </Typography>
            </Stack>
            {/* <Button
            color='secondary'
                sx={{
                    backgroundColor: '#f5f5f5',
                    px: 2,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 600,
                    color: '#666666',
                    borderRadius: '12px',
                }}
                endIcon={<MdOutlineFilterAlt />}
            >
                Filter
            </Button> */}
        </Box>
        <AdminBookingDataTable/>
    </Card>
  )
}
