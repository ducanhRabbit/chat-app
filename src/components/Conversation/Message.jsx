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
                Chat_History.map((el,index)=>{
                    switch(el.type){
                        case "divider":
                            // Time divider
                            return <TimeLine key={index}></TimeLine>
                        case "msg": switch(el.subtype){
                            case "img":
                                // Img message
                                return <ImgMsg key={index} el={el}></ImgMsg>
                            case "doc":
                                // Doc message
                                return <DocMsg key={index} el={el}></DocMsg>
                            case "link":
                                // Link message
                                return <LinkMsg key={index} el={el}></LinkMsg>
                            case "reply":
                                // Reply Message
                                return <ReplyMsg key={index} el={el}></ReplyMsg>
                            default:
                                return <TextMsg key={index} el={el}></TextMsg>
                        }
                    }
                })
            }
        </Stack>
            
    </Box>
  )
}

export default Message