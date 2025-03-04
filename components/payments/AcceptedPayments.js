"use client"
import { Box, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Image from 'next/image'
import DerivLogoImage from '../../public/visa.png'
import MpesaLogoImage from '../../public/mastercard.png'
import ColorModeContext from '@/theme/CustomThemeProvider'

export default function AcceptedPayments() {
    const { isMobile, isTablet} = useContext(ColorModeContext)
  return (
    <Box
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        py={5}
        px={ isTablet ? 2 : 10}
        flexDirection={'column'}
        gap={3}

    >
            <Typography
                 variant="h4"
                 fontWeight={700}
                 color={"text.primary"}
                 className="interFont"
                 
            >
                Accepted Payments
            </Typography>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                width={'100%'}
                gap={5}
            >
                    <Image 

                        src={DerivLogoImage}
                        height={100}
                        alt='deriv logo'
                        
                    />
                    <Image 

                        src={MpesaLogoImage}
                        height={ 100}
                        style={{marginTop: 25}}
                        alt='mpesa logo'
                        
                    />
            </Box>

            {/* <Typography
                variant='body1'
                color={'text.secondary'}
                fontWeight={500}
                textAlign={'center'}
                px={ isMobile ? 6 : 16}
            >
                At, Binary Mpesa Services, Our platform partner with Deriv and M-Pesa to facilitate seamless deposits,
                 withdrawals, and trading by leveraging their APIs for efficient and secure transactions.
            </Typography> */}
    </Box>
  )
}