"use client"
import React from 'react'
import AdminPageLayout from '../AdminPageLayout'
import { useRouter } from 'next/navigation'
import PageLoader from '@/components/general/PageLoader'

export default function page() {
  const router = useRouter()
  router.push('/')
  return <PageLoader />
  // return (
  //   <AdminPageLayout>admin alerts page</AdminPageLayout>
  // )
}
