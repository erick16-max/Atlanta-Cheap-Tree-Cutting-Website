import { Box, Divider } from '@mui/material'
import React, { useContext } from 'react'
import CopyRight from './CopyRight'
import FooterGrid from './FooterGrid'
import ColorModeContext from '@/theme/CustomThemeProvider'

export default function Footer() {
  const {isSmallScreen} = useContext(ColorModeContext)
  return (
    <Box
        width={'100%'}
        bgcolor={'secondary.dark'}
        px = {isSmallScreen ? 1 : 3}
        
    >
        <FooterGrid />
        <Box sx={{width: '100%', backgroundColor: '#353535', height: '1px'}}>

        </Box>
        <CopyRight />
    </Box>
  )
}
