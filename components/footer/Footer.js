import { Box, Divider } from '@mui/material'
import React from 'react'
import CopyRight from './CopyRight'
import FooterGrid from './FooterGrid'

export default function Footer() {
  return (
    <Box
        width={'100%'}
        bgcolor={'secondary.dark'}
    >
        <FooterGrid />
        <Box sx={{width: '100%', backgroundColor: '#353535', height: '1px'}}>

        </Box>
        <CopyRight />
    </Box>
  )
}
