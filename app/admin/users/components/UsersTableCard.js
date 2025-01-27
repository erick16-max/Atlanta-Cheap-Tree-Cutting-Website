import { Box, Button, Card, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineFilterAlt } from "react-icons/md";
import AppContext from '@/context/AppContext';
import UserDataTableGrid from './UsersDataTable';

export default function UsersTableCard() {
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
                    User Profiles
                </Typography>
                <Typography
                    variant='body2'
                    color={'text.secondary'}
                    fontWeight={500}
                >
                   List of all users with their profile details.
                </Typography>
            </Stack>
            <Button
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
            </Button>
        </Box>
        <UserDataTableGrid/>
    </Card>
  )
}
