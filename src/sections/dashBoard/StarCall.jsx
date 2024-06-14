import { Dialog, DialogContent, DialogTitle, Stack } from '@mui/material';
import React from 'react'

function StarCall({handleClose, open}) {
    const friendData = [...Array(6)]
    return (
        <Dialog
          fullWidth
          maxWidth="xs"
          open={open}
        //   TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          sx={{ p: 4 }}
        >
          <DialogTitle>{"Start New Conversation"}</DialogTitle>
          <Stack p={1} sx={{ width: "100%" }}>
            {/* <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search> */}
          </Stack>
          <DialogContent>
            <Stack sx={{ height: "100%" }}>
              <Stack spacing={2.4}>
                {friendData.map((el, index) => {
                  return <CallElement key={index} {...el} handleClose={handleClose} />;
                })}
              </Stack>
            </Stack>
          </DialogContent>
        </Dialog>
      );
}

export default StarCall