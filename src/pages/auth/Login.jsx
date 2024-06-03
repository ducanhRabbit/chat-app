import { Box, Divider, IconButton, InputAdornment, Link, Stack, TextField, Typography } from '@mui/material'
import { Eye, GithubLogo, GoogleLogo, TwitterLogo } from 'phosphor-react'
import React from 'react'
import AuthSocial from '../../sections/auth/AuthSocial'
import LoginForm from '../../sections/auth/LoginForm'

function Login() {
  return (
    <Stack sx={{
      width: '100%',
      height: '100%'
    }} justifyContent={'center'} alignItems={'center'}>
      <Stack spacing={2} p={3} sx={{
        width: 500, backgroundColor: 'rgba(255,255,255)',

        borderRadius: '16px'
      }}>
        <Stack>
          <Stack justifyContent={'center'} gap={1} alignItems={'center'}>
            <Box sx={{
              width: 100,
              height: 100,

            }}>
              <img className='w-full h-full' src='../src/assets/img/logo2.png'></img>
            </Box>
            <Typography sx={{
              fontWeight: 700
            }} variant='h4'>Moizz</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>

          <Link
            to={"/auth/register"}
            variant="subtitle2"
          >
            Create an account
          </Link>
        </Stack>
        <Stack spacing={2}>
          
        <LoginForm/>
        </Stack>

        <AuthSocial />
      </Stack>
    </Stack>
  )
}

export default Login