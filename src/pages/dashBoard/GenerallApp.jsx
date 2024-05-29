import { Box, Stack } from '@mui/material'
import React from 'react'
import Chats from './Chats'
import Conversation from '../../components/Conversation/Conversation'
import Contact from './Contact'


function GenerallApp() {
  return (
    <Stack direction={'row'} sx={{
        width:'100%'
    }}>
        <Chats></Chats>
        {/* Conversation */}
        <Box sx={{
            height:'100%',
            flexGrow:1

        }}>
            <Conversation></Conversation>
        </Box>
        {/* Contact */}
        <Contact></Contact>

    </Stack>
  )
}

export default GenerallApp