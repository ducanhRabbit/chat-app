import { Avatar, Box, Divider, IconButton, Stack, Switch, colors, styled, useColorScheme, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Nav_Buttons } from '../../data/data'
import { Gear } from 'phosphor-react'
import { faker } from '@faker-js/faker'
import SideNav from '../../layouts/dashBoard/SideNav'

function DashBoard() {

    const theme = useTheme()
    const [tabSelected, setTabSelected] = useState(0)
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
                {/* Side Nav */}
                <SideNav></SideNav>
                <Outlet />
            </Stack>
        </div>
    )
}

export default DashBoard