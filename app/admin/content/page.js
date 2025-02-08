"use client"
import React, { useContext, useEffect } from 'react'
import AdminPageLayout from '../AdminPageLayout'
import ContentGrid from './components/ContentGrid'
import AppContext from '@/context/AppContext'
import { GetAllPortfolio } from '@/firebase/Content'

export default function page() {
 
  return (
    <AdminPageLayout>
      <ContentGrid />
    </AdminPageLayout>
  )
}
