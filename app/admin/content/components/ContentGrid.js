import { Box, Card, Grid, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'
import { LuImagePlay } from "react-icons/lu";

export default function ContentGrid() {
  return (
    <Box
        width={'100%'}
    >
        <Grid container spacing={2}>
            <Grid item lg={3} md={6} sm={6} xs={6}>
                <Card
                    variant='outlined'
                    sx={{
                        width: '100%',
                        p: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                    component={Link}
                    href={'/admin/content/portfolio'}
                >
                    <LuImagePlay fontSize={48} />
                    <Typography>Portfolio</Typography>

                </Card>
            </Grid>
        </Grid>
    </Box>
  )
}
