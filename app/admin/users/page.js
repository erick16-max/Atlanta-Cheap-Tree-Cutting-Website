"use client"
import React from 'react'
import AdminPageLayout from '../AdminPageLayout'
import UsersTableCard from './components/UsersTableCard'
import CustomBreadcrumb from '@/components/general/CustomBreadcrumb'

export default function page() {
  return (
    <AdminPageLayout>
      <CustomBreadcrumb current={'All Users'}/>
      <UsersTableCard />
    </AdminPageLayout>
  )
}
