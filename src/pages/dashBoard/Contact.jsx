import { Box, Stack, Typography } from '@mui/material'
import { XCircle } from 'phosphor-react'
import React from 'react'

function Contact() {
  return (
    <Box sx={{
        height: '100%',
        width:'320px'
    }}>
        {/* Header */}
        <Stack sx={{
            height:'80px',
            boxShadow: "0 0 2px rgba(0,0,0,0.25)"
        }} p={2} spacing={2} direction={'row'} alignItems={'center'}>
            <XCircle size={24}></XCircle>
            <Typography variant='h6'>Contact Info</Typography>
        </Stack>
    </Box>
  )
}

export default Contact