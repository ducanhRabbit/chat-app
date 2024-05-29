import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data/data'
import {DocMsg, ImgMsg, LinkMsg, MessageOptions, ReplyMsg, TextMsg, TimeLine} from './MsgType'
function Message() {
  return (
    <Box p={3} sx={{
        
    }}>
        <Stack spacing={3}>
            {
                Chat_History.map((el)=>{
                    switch(el.type){
                        case "divider":
                            // Time divider
                            return <TimeLine></TimeLine>
                        case "msg": switch(el.subtype){
                            case "img":
                                // Img message
                                return <ImgMsg el={el}></ImgMsg>
                            case "doc":
                                // Doc message
                                return <DocMsg el={el}></DocMsg>
                            case "link":
                                // Link message
                                return <LinkMsg el={el}></LinkMsg>
                            case "reply":
                                // Reply Message
                                return <ReplyMsg el={el}></ReplyMsg>
                            default:
                                return <TextMsg el={el}></TextMsg>
                        }
                    }
                })
            }
        </Stack>
            
    </Box>
  )
}

export default Message