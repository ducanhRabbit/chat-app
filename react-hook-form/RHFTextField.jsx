import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useForm, useFormContext } from 'react-hook-form'

function RHFTextField({ name, ...other }) {
    const { control } = useFormContext()
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <TextField
                    fullWidth
                    {...field}
                    value={field.value || ''}
                    {...other}
                >

                </TextField>
            )}
        />

    )
}

export default RHFTextField