import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import FormProvider from '../../../react-hook-form/FormProvider';
import { Button, IconButton, InputAdornment, Stack } from '@mui/material';
import RHFTextField from '../../../react-hook-form/RHFTextField';
import * as Yup from 'yup'
import { Eye, EyeSlash } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../redux/slices/auth';
import { useSearchParams } from 'react-router-dom';
function NewPasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const dispatch = useDispatch()
    const [queryParam] = useSearchParams()
    const VerifyCodeSchema = Yup.object().shape({
      
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      passwordConfirm: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });
  
    const defaultValues = {
      password: '',
      passwordConfirm: '',
    };
  
    const methods = useForm({
      mode: 'onChange',
      resolver: yupResolver(VerifyCodeSchema),
      defaultValues,
    });
  
    const {
      handleSubmit,
    } = methods;
  
    const onSubmit = async (data) => {
      try {
      //   Send API Request
        dispatch(resetPassword({
          ...data,
          token: queryParam.get('token')
        }))
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <FormProvider method={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
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
                      {showPassword ? <Eye /> : <EyeSlash />}
                    </IconButton>
                  </InputAdornment>
                ),
            }}
          />
  
          <RHFTextField
            name="passwordConfirm"
            label="Confirm New Password"
            type={showConfirmPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge="end"
                    >
                      {showConfirmPassword ? <Eye /> : <EyeSlash />}
                    </IconButton>
                  </InputAdornment>
                ),
            }}
          />
  
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color='primary'
            sx={{
              mt: 3,
            }}
          >
            Update Password
          </Button>
        </Stack>
      </FormProvider>
    )
}

export default NewPasswordForm