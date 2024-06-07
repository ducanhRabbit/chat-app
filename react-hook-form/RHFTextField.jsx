import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useForm, useFormContext } from 'react-hook-form'

function RHFTextField({ name,helperText, ...other }) {
    const { control } = useFormContext()
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    fullWidth
                    {...field}
                    value={field.value}
                    helperText={error ? error?.message : helperText}
                    error={!!error}
                    {...other}
                    
                >

                </TextField>
            )}
        />

    )
}

export default RHFTextField