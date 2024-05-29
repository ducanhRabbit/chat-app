import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Stack, Switch, Typography, useColorScheme, useTheme } from '@mui/material'
import { Gear } from 'phosphor-react'
import React, { useState } from 'react'
import { Nav_Buttons, Profile_Menu } from '../../data/data'
import { faker } from '@faker-js/faker'

function SideNav() {
    const theme = useTheme()
    const [tabSelected, setTabSelected] = useState(0)
    const { mode, setMode } = useColorScheme()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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

                        <Avatar id="profileOptions-btn"
                            aria-controls={open ? 'profileOptions-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick} sx={{ width: '48px', height: '48px', border: `1px solid ${theme.palette.primary.main}` }} src={faker.image.avatar()}></Avatar>
                        <Menu
                            id="profileOptions-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'profileOptions-btn',
                            }}
                            anchorOrigin={{
                                vertical:'top',
                                horizontal:"right"
                            }}
                            transformOrigin={{
                                vertical:'bottom',
                                horizontal: 'left'
                            }}
                        >
                            {Profile_Menu.map((el, index) => {
                                return (<MenuItem key={index} onClick={handleClose}>
                                    <Stack sx={{
                                        width:100
                                    }} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography variant='body1'>{el.title}</Typography>
                                        {el.icon}
                                    </Stack>
                                </MenuItem>)
                            })}
                        </Menu>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default SideNav