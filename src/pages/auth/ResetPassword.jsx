import { Link, Stack, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import React from 'react'
import ResetPasswordForm from '../../sections/auth/ResetPasswordForm'
import AuthPanel from '../../components/Auth/AuthPanel'

function ResetPassword() {
  return (
    <>
      <AuthPanel>
        <Typography sx={{
          mt: 2,
          fontWeight:600
        }} variant="h5">
          Forgot your password?
        </Typography>

        <Typography  sx={{ mb: 5, mt:1, fontSize:12 }}>
          Please enter the email address associated with your account and We
          will email you a link to reset your password.
        </Typography>

        <ResetPasswordForm />

        <Link
          to={"/auth/login"}
          color="inherit"
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
    </>
  )
}

export default ResetPassword