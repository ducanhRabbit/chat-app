import React from 'react'
import AuthPanel from '../../components/Auth/AuthPanel'
import NewPasswordForm from '../../sections/auth/NewPasswordForm'
import { Link, Stack, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'

function NewPassord() {
  return (
    <AuthPanel>
       <Stack sx={{mt:2, mb: 4, position: "relative" }}>
        <Typography variant="h5" sx={{
          fontWeight:600
        }}>
          Reset Password
        </Typography>

        <Typography sx={{fontSize:12 }}>
          Please set your new password.
        </Typography>
      </Stack>
      <NewPasswordForm/>
      <Link

        to={"/auth/login"}
        color="primary"
        variant="subtitle2"
        sx={{
          mt: 3,
          mx: "auto",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <CaretLeft size={24} />
        Return to sign in
      </Link>
    </AuthPanel>
  )
}

export default NewPassord