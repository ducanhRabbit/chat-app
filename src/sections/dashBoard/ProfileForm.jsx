import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import FormProvider from '../../../react-hook-form/FormProvider';
import { Stack } from '@mui/material';
import RHFTextField from '../../../react-hook-form/RHFTextField';
import { LoadingButton } from '@mui/lab';
function ProfileForm() {
    const [file, setFile] = useState();

    const ProfileSchema = Yup.object().shape({
        firstName: Yup.string().required("Name is required"),
        about: Yup.string().required("About is required"),
        avatar: Yup.string().required("Avatar is required").nullable(true),
    });

    const defaultValues = {
        firstName: '',
        about: '',
        avatar: ""
    };

    const methods = useForm({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        control,
        setValue,
        handleSubmit,
        formState: { isSubmitting, isSubmitSuccessful },
    } = methods;

    const values = watch();

    const onSubmit = async (data) => {
        try {
            //   Send API request
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <FormProvider method={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
                {/* <RHFUploadAvatar name="avatar" maxSize={3145728} onDrop={handleDrop} /> */}

                <RHFTextField
                    helperText={"This name is visible to your contacts"}
                    name="firstName"
                    label="First Name"
                />
                <RHFTextField multiline rows={4} name="about" label="About" />

                <Stack direction={"row"} justifyContent="end">
                    <LoadingButton
                        color="primary"
                        size="large"
                        type="submit"
                        variant="contained"
                    // loading={isSubmitSuccessful || isSubmitting}
                    >
                        Save
                    </LoadingButton>
                </Stack>
            </Stack>
        </FormProvider>
    );
}

export default ProfileForm