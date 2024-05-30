import { Box, Stack } from '@mui/material'
import React from 'react'
import Chats from './Chats'
import Conversation from '../../components/Conversation/Conversation'
import Contact from './Contact'
import { useSelector } from 'react-redux'


function GenerallApp() {
  const {sideBar} = useSelector(state => state.app)
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
        {sideBar.open && sideBar.type === 'CONTACT' && <Contact></Contact>}

    </Stack>
  )
}

export default GenerallApp