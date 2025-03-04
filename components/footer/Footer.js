import { Box, Divider } from '@mui/material'
import React, { useContext } from 'react'
import CopyRight from './CopyRight'
import FooterGrid from './FooterGrid'
import ColorModeContext from '@/theme/CustomThemeProvider'
import CallUsButton from '../general/CallUsButton'
import { usePathname } from 'next/navigation'
import CustomSupportButton from '../general/CustomSupportButton'
import BackTopButton from '../general/BackTopButton'
import AppContext from '@/context/AppContext'

export default function Footer() {
  const {isSmallScreen} = useContext(ColorModeContext)
  const {navBg} = useContext(AppContext)
  const pathname = usePathname()
  const isAdminPath = pathname.startsWith("/admin")


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
      {navBg && <BackTopButton />}
       {!isAdminPath &&  <CustomSupportButton />}
    </Box>
  )
}
