import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function AuthPanel({ children }) {
    return (
        <Stack sx={{
            width: '100%',
            height: '100%'
        }} justifyContent={'center'} alignItems={'center'}>
            <Stack spacing={2} p={3} sx={{
                width: 500, backgroundColor: 'rgba(255,255,255)',

                borderRadius: '16px'
            }}>
                <Stack>
                    <Stack justifyContent={'center'} gap={1} alignItems={'center'}>
                        <Box sx={{
                            width: 100,
                            height: 100,

                        }}>
                            <img className='w-full h-full' src='../src/assets/img/logo2.png'></img>
                        </Box>
                        <Typography sx={{
                            fontWeight: 700
                        }} variant='h4'>Moizz</Typography>
                    </Stack>
                    {children}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default AuthPanel