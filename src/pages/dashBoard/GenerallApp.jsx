import { Box, Stack } from '@mui/material'
import React from 'react'
import Chats from './Chats'
import Conversation from '../../components/Conversation/Conversation'


function GenerallApp() {
  return (
    <Stack direction={'row'} sx={{
        width:'100%'
    }}>
        <Chats></Chats>
        {/* Conversation */}
        <Box sx={{
            height:'100%',
            width:'100%'

        }}>
            <Conversation></Conversation>
        </Box>
    </Stack>
  )
}

export default GenerallApp