"use client"

import React from 'react'
import AdminPageLayout from '../AdminPageLayout'
import AdminAlertCard from './components/AlertTableCard'

export default function page() {
  return (
    <AdminPageLayout>
      <AdminAlertCard />
    </AdminPageLayout>
  )
}
