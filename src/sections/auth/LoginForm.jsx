import React from 'react'
import FormProvider from '../../../react-hook-form/FormProvider'
import RHFTextField from '../../../react-hook-form/RHFTextField'
import { useForm } from 'react-hook-form'
import { IconButton, InputAdornment, Stack } from '@mui/material'
import { EyeSlash } from 'phosphor-react'
import { LoadingButton } from '@mui/lab'

function LoginForm() {

    const method = useForm()
    const onSubmit = (data) => console.log(data)

    const {
        handleSubmit
    } = method

    return (
        <FormProvider method={method} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
                <RHFTextField name="Email" label="Email"></RHFTextField>

                <RHFTextField
                    name="password"
                    label="Password"
                    type={'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    // onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    <EyeSlash />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            {/* <Stack alignItems="flex-end" sx={{ my: 2 }}>
                <Link component={RouterLink} to="/auth/reset-password" variant="body2" color="inherit" underline="always">
                    Forgot password?
                </Link>
            </Stack> */}

            <LoadingButton
                fullWidth
                color="inherit"
                size="large"
                type="submit"
                variant="contained"
                loading='true'
            >
                Login
            </LoadingButton>
            </Stack>
        </FormProvider>
    )
}

export default LoginForm