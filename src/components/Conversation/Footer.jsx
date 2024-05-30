import { Box, IconButton, InputAdornment, Stack, TextField, useTheme } from '@mui/material'
import { LinkSimple, PaperPlaneTilt, Smiley } from 'phosphor-react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import React, { useState } from 'react'

function Footer() {
    const theme = useTheme()
    const [openEmoji,setOpenEmoji] = useState(false)
    return (
        <Box
            p={2}
            sx={{
                backgroundColor: '#fff',
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            }}
        >
            <Stack direction={'row'} sx={{ width: "100%" }} spacing={4}>
                {/* Chat Input */}
                <Stack sx={{
                    width:'100%'
                }}>
                    <Box position={'fixed'} sx={{
                        display: openEmoji?'block':'none',
                        zIndex: 10,
                        bottom:81,
                        right:100
                    }}>
                        <Picker data={data}></Picker>
                    </Box>
                    <TextField sx={{
                        "& .MuiInputBase-input": {
                            paddingTop: "12px !important",
                            paddingBottom: "12px !important",
                        },
                        width: '100%',
                        backgroundColor: '#F8FAFF',
                        borderRadius: '16px',
                        overflow: 'hidden'
                    }}
                        variant='filled'
                        placeholder='Write a message...'
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                                <Stack sx={{ width: "max-content" }}>
                                    <InputAdornment position='start' sx={{
                                        marginTop: '0 !important'
                                    }}>
                                        <IconButton
                                        >
                                            <LinkSimple />
                                        </IconButton>
                                    </InputAdornment>

                                </Stack>
                            ),
                            endAdornment: (
                                <Stack sx={{ position: "relative" }}>
  
                                    <InputAdornment position='end'>
                                        <IconButton onClick={()=>{
                                            setOpenEmoji(!openEmoji)
                                        }}>
                                            <Smiley />
                                        </IconButton>
                                    </InputAdornment>
                                </Stack>
                            ),
                        }}
                    >

                    </TextField>
                </Stack>
                {/* Send Button */}
                <Box
                    sx={{
                        height: 48,
                        width: 48,
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                    }}
                >
                    <Stack
                        sx={{ height: "100%" }}
                        alignItems={"center"}
                        justifyContent="center"
                    >
                        <IconButton
                        >
                            <PaperPlaneTilt color="#ffffff" />
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default Footer