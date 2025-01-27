import { Box, Button, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import BookingDataTable from './bookinggrid/GridTable'
import { MdOutlineFilterAlt } from "react-icons/md";

export default function BookingTableGrid() {
  return (
    <Card
        variant='outlined'
        sx={{
            width: '100%',
            p: 3,
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
        <BookingDataTable />
    </Card>
  )
}
