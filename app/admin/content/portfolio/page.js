"use client"
import { Box, Button, Card } from '@mui/material'
import React, { useContext, useEffect} from 'react'
import { IoIosArrowRoundBack, IoIosAdd  } from "react-icons/io";
import AddPortfolioModal from './AddPortfolioModal';
import AppContext from '@/context/AppContext';
import { GetAllPortfolio } from '@/firebase/Content';
import CustomPortfolioGrid from '@/components/portfolio/CustomPortfolioGrid';
import Link from 'next/link';

export default function page() {
    const [open, setOpen] = React.useState(false);
    const {portfolioData, setPortfolioData} = useContext(AppContext)

    useEffect(() => {
      const fetchPortfolio = async() => {
        const response = await GetAllPortfolio()
        setPortfolioData(response)
      }
      fetchPortfolio()
    }, [])
  
    console.log(portfolioData)
  return (
    <Box
        display={'flex'}
        width={'100%'}
        minHeight={'100vh'}
        bgcolor={'#f5f5f5'}
        justifyContent={'center'}
        p={3}
        sx={{
            overflowY: 'auto',
        }}
    >
        <Card
            variant='outlined'
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: 3,
                backgroundColor:'#ffffff'

            }}
        >
            <Box
                display={'flex'}
                width={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Button
                    color='secondary'
                    sx={{
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                        textTransform: 'none'
                    }}
                    startIcon={<IoIosArrowRoundBack />}
                    LinkComponent={Link}
                    href='/admin/content'
                >
                    Back
                </Button>
                <Button
                    variant='contained'
                    sx={{
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                        textTransform: 'none'
                    }}
                    startIcon={<IoIosAdd  />}
                    onClick={() => setOpen(true)}
                >
                    Add
                </Button>
            </Box>
                    <CustomPortfolioGrid />
            <AddPortfolioModal 
                open={open}
                setOpen={setOpen}
            />
        </Card>
    </Box>
  )
}
