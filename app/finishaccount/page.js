'use client'

import PageLoader from '@/components/general/PageLoader'
import AppContext from '@/context/AppContext'
import { Alert, Box } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function page() {
    const {user} = useContext(AppContext)
    const router = useRouter()
    const [loading,setLoading]  = React.useState(true)
  
    React.useEffect(() => {
          setLoading(false)
    }, [])

    const isUser = user !== null && user && Object?.keys(user).length > 0 ? true : false


     if(loading || user === null){
        return <PageLoader />
      }
      

   
  return (
    <Box
      p={5}
    >
      <Alert severity='info' sx={{my:2}}>
        The page is under development
      </Alert>
        Finish creating your account {isUser  && user?.displayName ? user?.displayName : user?.email},{" "}

        <Link href={'/'}>
          Go home
        </Link>
    </Box>
  )
}
