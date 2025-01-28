import { signOutUser } from '@/firebase/Firebase';
import { Button, Card } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { ImProfile } from "react-icons/im";
import { MdOutlineEventSeat } from "react-icons/md";

export default function SettingsCard() {
    const router = useRouter()
     const handleLogout =async() => {
            try {
                await signOutUser()
                router.push('/')
                localStorage.removeItem("user")
    
            } catch (error) {
                console.log(error)
            }
        }
  return (
    <Card
        sx={{
            boxShadow: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            p: 3,
            my: 2,
            gap: 2,
            backgroundColor: '#f9f9f9'
        }}
    >
        <Button
            variant='contained'
            color='secondary'
            sx={{
                backgroundColor: '#ffffff',
                color: 'secondary.main',
                fontWeight: 600,
                textTransform: 'none',
                height: 55,
                fontSize: 16,
                borderRadius: '12px',
                '&:hover': {
                    color: '#ffffff',
                }
            }}
            startIcon={<ImProfile fontSize={'small'} />}
            LinkComponent={Link}
            href="/dashboard/settings"
        >
            Change Profile Info
        </Button>
        <Button
            variant='contained'
            color='secondary'
            sx={{
                backgroundColor: '#ffffff',
                color: 'secondary.main',
                fontWeight: 600,
                textTransform: 'none',
                height: 55,
                fontSize: 16,
                borderRadius: '12px',
                '&:hover': {
                    color: '#ffffff',
                }
            }}
            startIcon={<MdOutlineEventSeat fontSize={'small'} />}
            LinkComponent={Link}
            href="/dashboard/settings"
        >
            Events
        </Button>
        <Button
            variant='contained'
            color='error'
            sx={{
                fontWeight: 600,
                textTransform: 'none',
                height: 55,
                fontSize: 16,
                borderRadius: '12px',
                
            }}
            onClick={handleLogout}
        >
            Log Out
        </Button>
    </Card>
  )
}
