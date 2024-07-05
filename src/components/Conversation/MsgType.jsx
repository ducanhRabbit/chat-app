import { faker } from '@faker-js/faker'
import { Box, Divider, IconButton, Link, Menu, MenuItem, Stack, Typography, alpha, useTheme } from '@mui/material'
import {  DotsThreeVertical, DownloadSimple, Image } from 'phosphor-react'
import React, { useState } from 'react'
import { Message_options } from '../../data/data'

const TextMsg = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack spacing={1} direction={el.incoming ? 'row' : 'row-reverse'} justifyContent={el.incoming ? 'start' : 'end'}>
            <Box p={2} sx={{
                borderRadius: '16px',
                backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main
            }}>
                <Typography variant='body2' sx={{
                    color: el.incoming ? '#000' : '#fff'
                }}>{el.message}</Typography>
            </Box>
            <MessageOptions></MessageOptions>
        </Stack>
    )
}

const LinkMsg = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack spacing={1} direction={el.incoming ? 'row' : 'row-reverse'} justifyContent={el.incoming ? 'start' : 'end'}>
            <Stack>

                <Stack spacing={1} p={2} sx={{
                    borderRadius: '16px',
                    backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main
                }}>
                    <Stack spacing={1} p={1} sx={{
                        borderRadius: '14px',
                        backgroundColor: el.incoming ? alpha('#e4e4e4', .8) : alpha('#e4e4e4', .15),
                    }}>
                        <img className='max-h-[300px] rounded-[10px]' src={el.preview}></img>
                        <Typography variant='subtitle2' sx={{
                            fontWeight: 600
                        }}>
                            Creating chat app
                        </Typography>
                    </Stack>
                    <Typography variant='subtitle2' component={Link} sx={{
                        color: theme.palette.primary.main,
                        cursor: 'pointer'

                    }}>{el.message}</Typography>
                </Stack>
            </Stack>
            <MessageOptions></MessageOptions>
        </Stack>
    )
}

const ImgMsg = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack spacing={1} direction={el.incoming ? 'row' : 'row-reverse'} justifyContent={el.incoming ? 'start' : 'end'}>
            <Stack>

                <Box p={2} sx={{
                    borderRadius: '16px',
                    backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main
                }}>
                    <img className='max-h-[300px] rounded-[10px]' src={faker.image.url(400, 400)}></img>
                    <Typography variant='body2' sx={{
                        color: el.incoming ? '#000' : '#fff'
                    }}>{el.message}</Typography>
                </Box>
            </Stack>
            <MessageOptions></MessageOptions>
        </Stack>
    )
}

const ReplyMsg = ({ el }) => {
    const theme = useTheme()

    return (
        <Stack spacing={1} direction={el.incoming ? 'row' : 'row-reverse'} justifyContent={el.incoming ? 'start' : 'end'}>
            <Stack spacing={1} p={1.5} sx={{
                borderRadius: '16px',
                backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main
            }}>
                <Box p={1} sx={{
                    backgroundColor: el.incoming ? alpha('#e4e4e4', .8) : alpha('#e4e4e4', .15),
                    borderRadius: '8px',
                    color: el.incoming ? '#c5c5c5' : alpha('#c5c5c5', .7)
                }}>
                    {el.reply}
                </Box>
                <Typography variant='body2' sx={{
                    color: el.incoming ? '#000' : '#fff'
                }}>{el.message}</Typography>
            </Stack>
            <MessageOptions></MessageOptions>
        </Stack>
    )
}

const DocMsg = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack spacing={1} direction={el.incoming ? 'row' : 'row-reverse'} justifyContent={el.incoming ? 'start' : 'end'}>
            <Box p={2} sx={{
                borderRadius: '16px',
                backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main
            }}>
                <Stack spacing={2}>
                    <Stack p={1} direction={'row'} spacing={2.5} justifyContent={'center'} alignItems={'center'} sx={{
                        backgroundColor: alpha('#e4e4e4', .7),
                        borderRadius: 1,
                    }}>
                        <Image size={48}></Image>
                        <Typography variant='caption' sx={{
                            color: el.incoming ? '#000' : '#fff'
                        }}>{el.message}</Typography>
                        <IconButton>
                            <DownloadSimple></DownloadSimple>
                        </IconButton>

                    </Stack>
                    <Typography
                        variant="body2"
                        color={el.incoming ? theme.palette.text : "#fff"}
                    >
                        {el.message}
                    </Typography>
                </Stack>
            </Box>
            <MessageOptions></MessageOptions>
        </Stack>
    )
}

const TimeLine = ({ el }) => {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Divider sx={{
                width: '46%'
            }}></Divider>
            <Typography>Today</Typography>
            <Divider sx={{
                width: '46%'
            }}></Divider>
        </Stack>
    )
}

const MessageOptions = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<>
        <IconButton id="messageOptions-btn"
            aria-controls={open ? 'messageOptions-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
                width: 'fit-content',
                height: 'fit-content'
            }}>
            <DotsThreeVertical size={24}></DotsThreeVertical>
        </IconButton>
        <Menu
            id="messageOptions-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'messageOptions-btn',
            }}
        >
            {Message_options.map((el, index) => {
                return (<MenuItem key={index} onClick={handleClose}>
                    {el.title}
                </MenuItem>)
            })}
        </Menu>
    </>)
}

export { TimeLine, TextMsg, ImgMsg, ReplyMsg, LinkMsg, DocMsg, MessageOptions }