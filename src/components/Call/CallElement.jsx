import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import { Phone, VideoCamera } from 'phosphor-react';
import React from 'react'

function CallElement() {
  return (
    <Box
      sx={{
        width: "100%",
        cursor:'pointer',
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {" "}
          <Avatar alt={name} src={img} />
          <Stack spacing={0.3} alignItems="center" direction={"row"}>
            <Typography variant="subtitle2">{name}</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <IconButton
            onClick={() => {
              // dispatch(StartAudioCall(id));
              handleClose();
            }}
          >
            <Phone style={{ color: theme.palette.primary.main }} />
          </IconButton>

          <IconButton
            onClick={() => {
              // dispatch(StartVideoCall(id));
              handleClose();
            }}
          >
            <VideoCamera style={{ color: theme.palette.primary.main }} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default CallElement