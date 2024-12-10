import { Box,Typography } from "@mui/material"


export default function PageLoader({loaderText}){
    return (
        <Box 
            
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'100vh'}
            width={'100vw'}
            margin={'auto'}
            flexDirection={'column'}
            gap={2}
            >
                <Box className='loader' component='div'></Box>
                <Typography fontWeight={500} color={'secondary.main'} variant="h6">
                </Typography>
            </Box>
    )
}