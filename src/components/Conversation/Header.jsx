import { faker } from '@faker-js/faker';
import { Avatar, Badge, Box, Divider, IconButton, Stack, Typography, styled } from '@mui/material'
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { ToggleSidebar } from '../../redux/slices/appReducer';
import { StyledBadge } from '../Styled/Common/Badge';

function Header() {
  const dispatch = useDispatch()
  return (
    <Box p={2} sx={{
        width: '100%',
        height: '80px',
      }}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          {/* Left */}
          <Stack onClick={()=>{
            dispatch(ToggleSidebar())
          }} spacing={2} direction={'row'} alignItems={'center'}>
            <StyledBadge variant='dot' anchorOrigin={{ vertical: "bottom", horizontal: "right" }} overlap='circular'>
              <Avatar src={faker.image.avatar()}></Avatar>
            </StyledBadge>
            <Stack>
              <Typography variant='subtitle1'>
                Jonathan
              </Typography>
              <Typography variant='subtitle2'>
                Online
              </Typography>
            </Stack>
          </Stack>
          {/* Right */}
          <Stack>
            <Stack direction={'row'} spacing={1.8} alignItems={'center'}>
              <IconButton>
                <VideoCamera></VideoCamera>
              </IconButton>
              <IconButton>
                <Phone></Phone>
              </IconButton>
              <IconButton>
                <MagnifyingGlass></MagnifyingGlass>
              </IconButton>
              <Divider orientation='vertical' variant="middle" flexItem></Divider>
              <IconButton>
                <CaretDown size={24}></CaretDown>
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Box>
  )
}

export default Header