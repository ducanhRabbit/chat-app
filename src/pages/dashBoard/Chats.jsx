import { faker } from '@faker-js/faker'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function Chats() {
  return (
    <Box
    p={2}
     sx={{
        width:384

    }}>
        <Box>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant='h4' component={'h4'} sx={{
                fontWeight:600
            }}>
Chats
            </Typography>
            <Box sx={{
                width:'32px',
                height:'32px',
                borderRadius: '100%',
                overflow:'hidden'
            }}>
                <img className='w-full h-full object-cover' src={faker.image.urlLoremFlickr({ category: 'cats' })}/>
            </Box>
        </Stack>

        </Box>

    </Box>
  )
}

export default Chats