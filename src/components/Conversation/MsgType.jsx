import { faker } from '@faker-js/faker'
import { Box, Divider, IconButton, Link, Stack, Typography, alpha, useTheme } from '@mui/material'
import { DownloadSimple, Image } from 'phosphor-react'
import React from 'react'

const TextMsg = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
            <Box p={2} sx={{
                borderRadius: '16px',
                backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main
            }}>
                <Typography variant='body2' sx={{
                    color: el.incoming ? '#000' : '#fff'
                }}>{el.message}</Typography>
            </Box>
        </Stack>
    )
}

const LinkMsg = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
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
        </Stack>
    )
}

const ImgMsg = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
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
        </Stack>
    )
}

const ReplyMsg = ({ el }) => {
    const theme = useTheme()

    return (
        <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
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
        </Stack>
    )
}

const DocMsg = ({ el }) => {
    const theme = useTheme()
    return (
        <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
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

export { TimeLine, TextMsg, ImgMsg, ReplyMsg, LinkMsg, DocMsg }