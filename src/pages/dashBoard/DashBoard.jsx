import { Avatar, Box, Divider, IconButton, Stack, Switch, colors, styled, useColorScheme, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Nav_Buttons } from '../../data/data'
import { Gear } from 'phosphor-react'
import { faker } from '@faker-js/faker'
import SideNav from '../../layouts/dashBoard/SideNav'
import { useDispatch, useSelector } from 'react-redux'

function DashBoard() {
    const dispatch = useDispatch()
    const {isLoggedIn} = useSelector(state => state.auth)

    // if(!isLoggedIn){
    //     return <Navigate to={'/'}></Navigate>
    // }
    return (
        <div>
            <Stack direction={'row'}>
                <SideNav></SideNav>
                <Outlet />
            </Stack>
        </div>
    )
}

export default DashBoard