import { Box, Stack } from '@mui/material'
import React from 'react'
import Chats from './Chats'
import Conversation from '../../components/Conversation/Conversation'
import Contact from './Contact'
import { useSelector } from 'react-redux'
import SharedMessage from '../../components/SharedMessage'


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
        {sideBar.open &&
          (() => {
            switch (sideBar.type) {
              case "CONTACT":
                return <Contact />;

              case "STARRED":
                break

              case "SHARED":
                return <SharedMessage/>

              default:
                break;
            }
          })()}

    </Stack>
  )
}

export default GenerallApp