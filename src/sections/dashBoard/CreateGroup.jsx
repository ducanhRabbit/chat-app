import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react'
import CreateGroupForm from './CreateGroupForm';

function CreateGroup({handleClose , open}) {
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
          <DialogTitle>{"Create New Group"}</DialogTitle>
    
          <DialogContent sx={{pt:4 }}>
            {/* Create Group Form */}
            <CreateGroupForm handleClose={handleClose} />
          </DialogContent>
        </Dialog>
      );
}

export default CreateGroup