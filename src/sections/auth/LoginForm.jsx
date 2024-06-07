import React, { useState } from 'react'
import FormProvider from '../../../react-hook-form/FormProvider'
import RHFTextField from '../../../react-hook-form/RHFTextField'
import { useForm } from 'react-hook-form'
import { Alert, IconButton, InputAdornment, Stack } from '@mui/material'
import { Eye, EyeSlash } from 'phosphor-react'
import { LoadingButton } from '@mui/lab'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
function LoginForm() {
    const loginSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email must be a valid email adress'),
        password: Yup.string().required('Password is required')
    })

    const defaultValues = {
        email: "demo@tawk.com",
        password: "demo1234",
      };
    
    const method = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues
    })
    const onSubmit = async (data) => {
        try {
            console.log(data)
        } catch (err) {
            console.log(err)
            reset()
            setError("afterSubmit", {
                ...err,
                errMessage: err.message
            })
        }
    }



    const {
        reset,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = method

    const [showPassword, setShowPassword] = useState(false)

    return (
        <FormProvider method={method} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>

                {errors.afterSubmit && <Alert severity='error'>{errors?.afterSubmit?.errMessage}</Alert>}
                <RHFTextField name="email" label="Email"></RHFTextField>

                <RHFTextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <Eye></Eye> : <EyeSlash />}
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
                    color="primary"
                    size="large"
                    type="submit"
                    variant="contained"
                // loading='true'
                >
                    Login
                </LoadingButton>
            </Stack>
        </FormProvider>
    )
}

export default LoginForm