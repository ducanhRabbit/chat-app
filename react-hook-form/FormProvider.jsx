import React from 'react'
import {FormProvider as Form} from 'react-hook-form'
function FormProvider({children, onSubmit,method}) {
  return (
    <Form {...method}>
        <form onSubmit={onSubmit}>{children}</form>
    </Form>
  )
}

export default FormProvider