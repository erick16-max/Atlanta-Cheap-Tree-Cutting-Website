"use client"

import React from 'react'
import AdminPageLayout from '../AdminPageLayout'
import AdminBookingCard from './components/AdminBookingCard'
import CustomBreadcrumb from '@/components/general/CustomBreadcrumb'

export default function page() {
  return (
    <AdminPageLayout>
      <CustomBreadcrumb current={'All Bookings'}/>
      <AdminBookingCard />
    </AdminPageLayout>
  )
}
