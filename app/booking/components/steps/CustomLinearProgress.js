import AppContext from '@/context/AppContext'
import { Box, LinearProgress } from '@mui/material'
import React, { useContext } from 'react'

export default function CustomLinearProgress({value}) {
  const {isTablet, isMobile} = useContext(AppContext)
  return (
    <Box flex={1} width={'100%'}> 
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: '8px',
        borderRadius: '12px',
        width: '90%',
      }}
    />
  </Box>
  )
}
