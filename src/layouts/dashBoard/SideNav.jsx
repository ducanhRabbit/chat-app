import { Avatar, Box, Divider, IconButton, Stack, Switch, useColorScheme, useTheme } from '@mui/material'
import { Gear } from 'phosphor-react'
import React, { useState } from 'react'
import { Nav_Buttons } from '../../data/data'
import { faker } from '@faker-js/faker'

function SideNav() {
    const theme = useTheme()
    const [tabSelected, setTabSelected] = useState(0)
    const { mode, setMode } = useColorScheme()
    return (
        <Box p={2} sx={{ width: 100, height: '100vh', boxShadow: "0 0 2px rgba(0,0,0,0.25)" }}>
            <Stack direction={'column'} justifyContent={'space-between'} sx={{ height: '100%' }}>
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
                    minHeight: 0
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
    )
}

export default SideNav