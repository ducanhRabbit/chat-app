import { useTheme } from '@emotion/react';
import { faker } from '@faker-js/faker';
import { Avatar, Badge, Box, Divider, IconButton, InputAdornment, InputBase, Stack, TextField, Typography, styled } from '@mui/material'
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, Smiley, VideoCamera } from 'phosphor-react';
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

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

  return (
    <Stack sx={{
      height: '100%',
      maxHeight: '100vh',
    }}>
      {/* Header */}
      <Header></Header>
      {/* Message */}
      <Box sx={{
        flexGrow: 1,
        backgroundColor: " #F0F4FA",
        overflow:'auto'
      }}>
        <Message></Message>
      </Box>
      {/* Footer */}
      <Footer></Footer>
    </Stack>
  )
}

export default Conversation