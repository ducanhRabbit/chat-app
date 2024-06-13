import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import FormProvider from '../../../react-hook-form/FormProvider';
import { Button, Stack } from '@mui/material';
import RHFTextField from '../../../react-hook-form/RHFTextField';
function CreateGroupForm({handleClose}) {
    const NewGroupSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        members: Yup.array().min(2, "Must have at least 2 members"),
      });
    
      const defaultValues = {
        title: "",
        tags: [],
      };
    
      const methods = useForm({
        resolver: yupResolver(NewGroupSchema),
        defaultValues,
      });
    
      const {
        handleSubmit,
      } = methods;
    
      const onSubmit = async (data) => {
        try {
          //  API Call
        } catch (error) {
          console.error(error);
        }
      };
    
      return (
        <FormProvider method={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <RHFTextField name="title" label="Title" />
            {/* <RHFAutocomplete
              name="members"
              label="Members"
              multiple
              freeSolo
              options={TAGS_OPTION.map((option) => option)}
              ChipProps={{ size: "medium" }}
            /> */}
            <Stack
              spacing={2}
              direction={"row"}
              alignItems="center"
              justifyContent={"end"}
            >
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained">
                Create
              </Button>
            </Stack>
          </Stack>
        </FormProvider>
      );
}

export default CreateGroupForm