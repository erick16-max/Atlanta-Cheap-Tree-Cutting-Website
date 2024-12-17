"use client"
import AppContext from '@/context/AppContext'
import React, { useContext } from 'react'

export default function page() {
    const {user} = useContext(AppContext)
  return (
    <div>
        hey, {user?.displayName ||user?.email}
    </div>
  )
}
