'use client'
import LogoBrand from '@/components/general/LogoBrand'
import { Box, Card, Stack, Typography} from '@mui/material'
import React from 'react'
import LoginForm from './LoginForm'
import ColorModeContext from '@/theme/CustomThemeProvider'
import PageLoader from '@/components/general/PageLoader'
import ChatFloatingButton from '@/components/general/ChatButton'
import AppContext from '@/context/AppContext'
import { useRouter } from 'next/navigation'



export default function Page() {
    const { isMobile} = React.useContext(ColorModeContext)
     const [loading,setLoading]  = React.useState(true)
     const {isUser} = React.useContext(AppContext)
     const router = useRouter()

     
    
      React.useEffect(() => {
        if(isUser){
          router.push('/')
          return
       }else{

         setLoading(false)
       }
      }, [])

      if(loading){
          return <PageLoader />
        }

 
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f5f5f5',
        overflow: 'auto', // Allow scrolling if content overflows
        py: 3,
      }}
    >
      <Card
        // variant="outlined"
        sx={{
          p: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: isMobile ? '96%' : 500,     
          boxShadow: 0,
          flexDirection: 'column',
          gap: 3
        }}
      >
             <Stack alignItems={'center'} justifyContent={'center'} gap={2}>
            <LogoBrand />
            <Typography fontWeight={600} variant='body1' color={'text.primary'}>Log in your account</Typography>
        </Stack>
        <LoginForm />
        
      </Card>
    </Box>
  )
}
