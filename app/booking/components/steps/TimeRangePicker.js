import React, { useContext, useEffect, useState } from 'react'
import { Typography, Box, Chip, Stack } from '@mui/material'
import AppContext from '@/context/AppContext'
import { timeRanges } from '@/constants/AppConstants'


export default function TimeRangePicker({activeLabel, setActiveLabel}) {

    const {setSurveyTime} = useContext(AppContext)


    useEffect(() => {
        if(activeLabel !== ""){
            const selectedTimeObj = timeRanges.find((item) => item.id === activeLabel)
            setSurveyTime(selectedTimeObj.name)

        }
    }, [activeLabel])
    
  return (
    <Stack gap={1}>
        <Typography color={'text.secondary'} variant='body1'>Choose Survey Time</Typography>
        <Box
        display={'flex'}
        width={'100%'}
        alignItems={'center'}
        gap={3}
        flexWrap={'wrap'}
    >
        {
            timeRanges.map(item => {
                return(
                    <Chip 
                        label={item.name} 
                        key={item.id} 
                        color={item.id === activeLabel ? 'primary' : 'default'}
                        onClick={() => setActiveLabel(item.id)}
                        />
                )
            })
        }

    </Box>
    </Stack>
  )
}
