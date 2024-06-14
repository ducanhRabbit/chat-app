import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Styled/Search/Search';
import { MagnifyingGlass, Phone } from 'phosphor-react';
import CallLogElement from '../../components/Call/CallLogElement';

function Call() {
    const [openDialog,setOpenDialog] = useState(false)

    const handleOpenDialog = ()=>{
        setOpenDialog(true)
    }

    const handleCloseDialog = ()=>{
        setOpenDialog(false)
    }

    const callLogData = [...Array(6)]
    return (
        <>
          <Stack direction="row" sx={{ width: "100%" }}>
            {/* Left */}
    
            <Box
              sx={{
                height: "100vh",
                width: 340,
                backgroundColor: "#F8FAFF",
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
                <Stack
                  alignItems={"center"}
                  justifyContent="space-between"
                  direction="row"
                >
                  <Typography variant="h5">Call Log</Typography>
                </Stack>
    
                <Stack sx={{ width: "100%" }}>
                  <Search>
                    <SearchIconWrapper>
                      <MagnifyingGlass color="#709CE6" />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Stack>
    
                <Stack
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  direction={"row"}
                >
                  <Typography variant="subtitle2" sx={{}} component={Link}>
                    Start a conversation
                  </Typography>
                </Stack>
                <Divider />
                <Stack sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
                    <Stack spacing={2.4}>
                      {callLogData.map((el, index) => {
                        return <CallLogElement key={index} {...el} />;
                      })}
                    </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </>
      );
}

export default Call