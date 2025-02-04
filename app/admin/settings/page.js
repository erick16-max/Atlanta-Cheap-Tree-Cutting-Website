"use client"
import React from 'react'
import AdminPageLayout from '../AdminPageLayout'
import SettingsCard from './components/SettingsCard'
import CustomBreadcrumb from '@/components/general/CustomBreadcrumb'
import UserProfileCard from '@/app/dashboard/settings/components/UserProfileCard'

export default function page() {
  return (
    <AdminPageLayout>
        <CustomBreadcrumb current={'Account Settings'} />
        <UserProfileCard />
    </AdminPageLayout>
  )
}
