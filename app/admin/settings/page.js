"use client"
import React from 'react'
import AdminPageLayout from '../AdminPageLayout'
import SettingsCard from './components/SettingsCard'
import CustomBreadcrumb from '@/components/general/CustomBreadcrumb'

export default function page() {
  return (
    <AdminPageLayout>
        <CustomBreadcrumb current={'General Settings'} />
        <SettingsCard />
    </AdminPageLayout>
  )
}
