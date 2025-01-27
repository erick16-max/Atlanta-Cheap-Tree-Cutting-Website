'use client'
import React from 'react'
import AdminPageLayout from './AdminPageLayout'
import { Grid } from '@mui/material'
import BookingsOverviewCard from './components/BookingOverviewCard'
import AdminBookingCard from './bookings/components/AdminBookingCard'

export default function page() {
  return (
    <AdminPageLayout>
          <BookingsOverviewCard />
          <AdminBookingCard />
      
    </AdminPageLayout>
  )
}
