import React from 'react'
import { useFormContext } from 'react-hook-form';

function RHFAutoComplete({name, label,helperText, ...other}) {
    const {control, setValue} = useFormContext()
    return (
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Autocomplete
              {...field}
              onChange={(event, newValue) => setValue(name, newValue, { shouldValidate: true })}
              renderInput={(params) => (
                <TextField
                  label={label}
                  error={!!error}
                  helperText={error ? error?.message : helperText}
                  {...params}
                />
              )}
              {...other}
            />
          )}
        />
      );
}

export default RHFAutoComplete