import { Box, IconButton, Stack, Typography } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import React from 'react'
import ProfileForm from '../../sections/dashBoard/ProfileForm';

function Profile() {
    return (
        <>
          <Stack direction="row" sx={{ width: "100%" }}>
            {/* Left Pane */}
            <Box
              sx={{
                height: "100vh",
                width: 320,
                backgroundColor: "#F8FAFF",
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Stack p={4} spacing={5}>
                {/* Header */}
                <Stack direction="row" alignItems={"center"} spacing={3}>
                  <IconButton>
                    <CaretLeft size={24} color={"#4B4B4B"} />
                  </IconButton>
    
                  <Typography sx={{
                    fontWeight:600
                  }} variant="h4">Profile</Typography>
                </Stack>
    
                {/* Profile Edit Form */}
                <ProfileForm />
              </Stack>
            </Box>
    
            {/* Right Pane */}
          </Stack>
        </>
      );
}

export default Profile