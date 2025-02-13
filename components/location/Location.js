import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { IoLocationOutline } from "react-icons/io5";
import GoogleMapEmbed from '../about/GoogleMap';

export default function Location() {
  return (
    <Stack width={"100%"} gap={2}>
        <Box width={"100%"} display={"flex"} alignItems={"center"} gap={1}>
        {/* <IoLocationOutline fontSize={32} /> */}
          <Typography
                 variant="h4"
                 color={"text.primary"}
                 fontWeight={900}
                 gutterBottom
                 mb={2}
                 textAlign={'center'}
               >
                Find our Location
               </Typography>
        </Box>
        <Typography variant="body1" color={"text.secondary"} fontWeight={500}>
          Based in North Atlanta, we proudly serve the local community and
          nearby areas. Our deep roots in the region allow us to understand the
          unique needs and challenges of tree care in this area. Whether you're
          a homeowner, business owner, or property manager, we are here to
          provide the solutions you need.
        </Typography>
        <GoogleMapEmbed />
      </Stack>
  )
}
