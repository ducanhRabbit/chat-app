import { Box, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";

import React from "react";

function SharedMessage() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "320px",
      }}
    >
        <Stack sx={{
            height:'100%'
        }}>
      <Stack
        sx={{
          height: "80px",
          boxShadow: "0 0 2px rgba(0,0,0,0.25)",
        }}
        p={2}
        spacing={3}
        direction={"row"}
        alignItems={"center"}
      >
        <CaretLeft/>
        <Typography variant="h6">Media</Typography>
      </Stack>
        </Stack>
    </Box>
  );
}

export default SharedMessage;
