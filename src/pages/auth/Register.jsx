import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import AuthSocial from '../../sections/auth/AuthSocial'
import RegisterForm from '../../sections/auth/RegisterForm'

function Register() {
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
        <Typography variant='h4'>
          Register
        </Typography>
        <Stack spacing={2}>
            <RegisterForm/>
        </Stack>
        <Typography
          component="div"
          sx={{mt: 3, typography: 'caption', textAlign: 'center' }}
        >
          {'By signing up, I agree to '}
          <Link underline="always" color="text.primary">
            Terms of Service
          </Link>
          {' and '}
          <Link underline="always" color="text.primary">
            Privacy Policy
          </Link>
          .
        </Typography>

        <AuthSocial />
      </Stack>
    </Stack>
  )
}

export default Register