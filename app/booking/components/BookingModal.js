"use client"
import React, { useContext, useState } from 'react'
import { Modal, Typography, Box, Stack, TextField, CircularProgress, Button, Alert, Card} from '@mui/material'
import Image from 'next/image'
import { db } from '@/firebase.config'
import { addDoc, collection, getDocs, query, where, setDoc} from 'firebase/firestore'
import AppContext from '@/context/AppContext'
import BookingImage from "../../../public/booking.svg"
import { MdArrowRightAlt } from "react-icons/md";
import CopyRight from '@/components/footer/CopyRight'
import Link from 'next/link'
import ColorModeContext from '@/theme/CustomThemeProvider'


export default function BookingModal() {
    const {isBookingModalOpen, setIsBookingModalOpen} = useContext(AppContext)
    const {isMobile} = useContext(ColorModeContext)
  
   
    
    
  return (
    <Modal
        open={isBookingModalOpen}
    >
        <Box
            width={'100vw'}
            height={'100vh'}
            display={'flex'}
            bgcolor={'rgba(0,0,0, 0.6)'}
            justifyContent={'center'}
            alignItems={'center'}
        >
          <Card
            sx={{
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                py: 3,
                px: isMobile ? 3 : 10,
                minWidth: 260,
                maxWidth: 500,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                flexDirection: 'column',
            }}
          >
            <Image 
            
                src={BookingImage}
                alt='booking image'
                width={180}
                height={180}
            />
            <Typography
                variant='body1'
                fontWeight={600}
                color={'text.primary'}
                textAlign={'center'}
            >
                Choose one to start your booking.
            </Typography>
            <Button
                variant='contained'
                color='error'
                fullWidth
                endIcon={<MdArrowRightAlt />}
                sx={{
                    fontWeight: 600,
                    textTransform: 'none',
                    height: 55,
                    borderRadius: '16px'

                }}
                LinkComponent={Link}
                href='/login'
                onClick={() => setIsBookingModalOpen(false)}
            >
                Login First
            </Button>
            <Button 
            sx={{
                fontWeight: 600,
                textTransform: 'none',
                height: 55,
                borderRadius: '16px'

            }}
            variant='contained' 
            color='secondary'
            fullWidth
            LinkComponent={Link}
            href='/booking/guest'
            onClick={() => setIsBookingModalOpen(false)}
            >
                Continue as Guest User
            </Button>

            <CopyRight bgColor='#ffffff' />
          </Card>
        </Box>
    </Modal>
  )
}
