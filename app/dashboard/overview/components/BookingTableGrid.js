import { Card } from '@mui/material'
import React from 'react'
import BookingDataTable from './bookinggrid/GridTable'

export default function BookingTableGrid() {
  return (
    <Card
        variant='outlined'
        sx={{
            width: '100%',
            p: 3,
            height: 300
        }}
    >
        <BookingDataTable />
    </Card>
  )
}
