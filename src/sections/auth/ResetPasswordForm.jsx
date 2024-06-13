import React from 'react'
import { useForm } from 'react-hook-form';
import FormProvider from '../../../react-hook-form/FormProvider';
import RHFTextField from '../../../react-hook-form/RHFTextField';
import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
function ResetPasswordForm() {
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
  });

  const defaultValues = {
    email: '123@gmail.com'
  }
  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      //   Send API Request
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider method={methods} onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField name="email" label="Email address" />
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color='primary'
        sx={{
          mt:2
        }}
      >
        Send Request
      </LoadingButton>
    </FormProvider>
  )
}
export default ResetPasswordForm