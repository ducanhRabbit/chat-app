import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormProvider from '../../../react-hook-form/FormProvider'
import { Alert, IconButton, InputAdornment, Stack } from '@mui/material'
import RHFTextField from '../../../react-hook-form/RHFTextField'
import { LoadingButton } from '@mui/lab'
import { Eye, EyeSlash } from 'phosphor-react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const LoginSchema = Yup.object().shape({
    firstName: Yup.string().required("First name required"),
    lastName: Yup.string().required("Last name required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });
  const method = useForm({
    resolver: yupResolver(LoginSchema)
  })
  const {
    reset,
    handleSubmit,
    setError,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = method
  const onSubmit = async (data) => {
    try {

    } catch (err) {
      setError('afterSubmit', {
        ...err,
        errMessage: err.message
      })
    }
  }
  

  return (
    <FormProvider method={method} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} mb={4}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.errMessage}</Alert>
        )}

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton
        fullWidth
        color="primary"
        size="large"
        type="submit"
        variant="contained"
      >
        Create Account
      </LoadingButton>
    </FormProvider>
  )
}

export default RegisterForm