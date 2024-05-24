import { useTheme } from '@emotion/react';
import { faker } from '@faker-js/faker';
import { Avatar, Badge, Box, Divider, IconButton, InputAdornment, InputBase, Stack, TextField, Typography, styled } from '@mui/material'
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, Smiley, VideoCamera } from 'phosphor-react';
import React from 'react'

function Conversation() {
  const theme = useTheme()
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.paper, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
    },
  }));
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  return (
    <Stack sx={{
      height: '100%',
      maxHeight: '100vh'
    }}>
      {/* Header */}
      <Box p={2} sx={{
        width: '100%',
        height: '80px',
      }}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          {/* Left */}
          <Stack spacing={2} direction={'row'} alignItems={'center'}>
            <StyledBadge variant='dot' anchorOrigin={{ vertical: "bottom", horizontal: "right" }} overlap='circular'>
              <Avatar src={faker.image.avatar()}></Avatar>
            </StyledBadge>
            <Stack>
              <Typography variant='subtitle1'>
                Jonathan
              </Typography>
              <Typography variant='subtitle2'>
                Online
              </Typography>
            </Stack>
          </Stack>
          {/* Right */}
          <Stack>
            <Stack direction={'row'} spacing={1.8} alignItems={'center'}>
              <IconButton>
                <VideoCamera></VideoCamera>
              </IconButton>
              <IconButton>
                <Phone></Phone>
              </IconButton>
              <IconButton>
                <MagnifyingGlass></MagnifyingGlass>
              </IconButton>
              <Divider orientation='vertical' variant="middle" flexItem></Divider>
              <IconButton>
                <CaretDown size={24}></CaretDown>
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {/* Message */}
      <Box sx={{
        flexGrow: 1,
        backgroundColor: " #F0F4FA"
      }}>

      </Box>
      {/* Footer */}
      <Box
        p={2}
        sx={{
          backgroundColor: '#fff',
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack direction={'row'} sx={{ width: "100%" }} spacing={4}>
          {/* Chat Input */}
          <TextField sx={{
            "& .MuiInputBase-input": {
              paddingTop: "12px !important",
              paddingBottom: "12px !important",
            },
            width: '100%',
            backgroundColor:'#F8FAFF'
          }}
        variant='filled'
            placeholder='Write a message...'
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <Stack sx={{ width: "max-content" }}>
                  <InputAdornment position='start'>
                    <IconButton
                    >
                      <LinkSimple />
                    </IconButton>
                  </InputAdornment>

                </Stack>
              ),
              endAdornment: (
                <Stack sx={{ position: "relative" }}>
                  <InputAdornment position='end'>
                    <IconButton>
                      <Smiley />
                    </IconButton>
                  </InputAdornment>
                </Stack>
              ),
            }}
          >

          </TextField>
          {/* Send Button */}
          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{ height: "100%" }}
              alignItems={"center"}
              justifyContent="center"
            >
              <IconButton
              >
                <PaperPlaneTilt color="#ffffff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Conversation