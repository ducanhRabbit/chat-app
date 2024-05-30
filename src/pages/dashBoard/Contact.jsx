import { faker } from '@faker-js/faker'
import { Avatar, Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, XCircle } from 'phosphor-react'
import React from 'react'

function Contact() {
  return (
    <Box sx={{
      maxHeight: '100vh',
      width: '320px'
    }}>
      <Stack height={'100%'}>
        {/* Header */}
        <Stack sx={{
          height: '80px',
          boxShadow: "0 0 2px rgba(0,0,0,0.25)"
        }} p={2} spacing={2} direction={'row'} alignItems={'center'}>
          <XCircle size={24}></XCircle>
          <Typography variant='h6'>Contact Info</Typography>
        </Stack>
        {/* Body */}
        <Stack p={3} spacing={3} sx={{
          height: "100%",
          position: "relative",
          flexGrow: 1,
          overflow: "scroll",
        }}>
          <Stack direction={'row'} spacing={1.5} alignItems={'center'}>
            <Avatar sx={{
              width: 64,
              height: 64
            }} src={faker.image.avatar()}></Avatar>
            <Stack spacing={0.5}>
              <Typography sx={{
                fontWeight: 700
              }}>SAM</Typography>
              <Typography sx={{
                fontSize: 16,
              }}>+91 6265 081 928</Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-evenly"}
          >
            <Stack alignItems={"center"} spacing={1}>
              <IconButton>
                <Phone />
              </IconButton>

              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack alignItems={"center"} spacing={1}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider></Divider>
          <Stack spacing={0.5}>
            <Typography variant="article" fontWeight={600}>
              About
            </Typography>
            <Typography variant="body2" fontWeight={500}>
              Hi there, im using!
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Media, Links & Docs</Typography>
            <Button
              onClick={() => {
                // dispatch(UpdateSidebarType("SHARED"));
              }}
              endIcon={<CaretRight />}
            >
              401
            </Button>
          </Stack>
          <Stack direction={"row"} alignItems="center" spacing={2}>
            {[1, 2, 3].map((el) => (
              <Box>
                <img className='w-[74px] h-[74px]' src={faker.image.urlPicsumPhotos()} alt={faker.internet.userName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>

            <IconButton
              onClick={() => {
                // dispatch(UpdateSidebarType("STARRED"));
              }}
            >
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>

            {/* <AntSwitch /> */}
          </Stack>
          <Divider />
          <Typography variant="body2">1 group in common</Typography>
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <Avatar src={faker.image.url()} alt={faker.name.fullName()} />
            <Stack direction="column" spacing={0.5}>
              <Typography variant="subtitle2">Camel’s Gang</Typography>
              <Typography variant="caption">
                Owl, Parrot, Rabbit , You
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <Button
              onClick={() => {
                // setOpenBlock(true);
              }}
              fullWidth
              startIcon={<Prohibit />}
              variant="outlined"
            >
              Block
            </Button>
            <Button
              onClick={() => {
                // setOpenDelete(true);
              }}
              fullWidth
              startIcon={<Trash />}
              variant="outlined"
            >
              Delete
            </Button>
          </Stack>

        </Stack>
      </Stack>

    </Box>
  )
}

export default Contact