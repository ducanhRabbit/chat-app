import { Avatar, Box, Divider, IconButton, Stack, Switch, colors, styled, useColorScheme, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Nav_Buttons } from '../../data/data'
import { Gear } from 'phosphor-react'
import { faker } from '@faker-js/faker'

function DashBoard() {

    const theme = useTheme()
    const [tabSelected, setTabSelected] = useState(0)
    const [checked, setChecked] = useState(true)
    const { mode, setMode } = useColorScheme()
    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 40,
        height: 20,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 20,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(20px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    //   backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 16,
            height: 16,
            borderRadius: 20,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 20 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
        },
    }));
    return (
        <div>
            <Stack direction={'row'}>
            <Box p={2} sx={{ width: 100, height:'100vh', boxShadow: "0 0 2px rgba(0,0,0,0.25)" }}>
                <Stack direction={'column'} justifyContent={'space-between'} sx={{height:'100%' }}>
                    <Stack sx={{ width: 'max-content' }} spacing={4} direction={'column'} alignItems={'center'}>
                        <Box sx={{
                            width: 64,
                            height: 64,
                            overflow: 'hidden',
                            borderRadius: 2.5,
                        }}>
                            <img className='w-[64px] h-[64px] object-cover' src='./src/assets/img/logo2.png' />
                        </Box>
                        <Stack spacing={3}>
                            {Nav_Buttons.map((btn, index) => {
                                return tabSelected === btn.index ? <Box key={index} p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: '12px' }}>
                                    <IconButton onClick={() => {
                                        setTabSelected(index)
                                    }} sx={{ width: 'max-content', color: '#fff' }} key={index}>
                                        {btn.icon}
                                    </IconButton>
                                </Box> : <Box key={index} p={1} sx={{ borderRadius: '12px' }}>
                                    <IconButton onClick={() => {
                                        setTabSelected(index)
                                    }} sx={{ width: 'max-content' }} key={index}>
                                        {btn.icon}
                                    </IconButton>
                                </Box>
                            })}
                            <Divider ></Divider>
                            {tabSelected === 3 ? <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: '12px' }}>
                                <IconButton onClick={() => {
                                    setTabSelected(3)
                                }} sx={{ color: '#fff' }}>
                                    <Gear />
                                </IconButton>
                            </Box> : <Box p={1} sx={{ borderRadius: '12px' }}>
                                <IconButton onClick={() => {
                                    setTabSelected(3)
                                }} sx={{ width: 'max-content' }}>
                                    <Gear />
                                </IconButton>
                            </Box>}
                        </Stack>
                    </Stack>
                    <Box sx={{
                        minHeight:0
                    }}>
                        <Stack spacing={4} direction={'column'} alignItems={'center'} >
                            <Switch defaultChecked onChange={() => {
                                setMode(mode === 'light' ? 'dark' : 'light')
                            }} ></Switch>

                            <Avatar sx={{ width: '48px', height: '48px', border: `1px solid ${theme.palette.primary.main}` }} src={faker.image.avatar()}></Avatar>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            <Outlet />
            </Stack>
        </div>
    )
}

export default DashBoard