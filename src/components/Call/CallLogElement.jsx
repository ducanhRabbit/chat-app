import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import React from 'react'
import { StyledBadge } from '../Styled/Common/Badge';
import { faker } from '@faker-js/faker';
import { ArrowDownLeft, ArrowUpRight, Camera, Phone, PhoneCall, VideoCamera } from 'phosphor-react';
import { useTheme } from '@emotion/react';

function CallLogElement() {
    const theme = useTheme()
    return (
        <Box
            sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: theme.palette.background.paper,
            }}
            py={2}
            px={1.5}
        >
            <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
            >
                <Stack direction="row" alignItems={'center'} spacing={2}>
                    {" "}
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        variant="dot"
                    >
                        <Avatar alt={name} src={faker.image.avatar()} />
                    </StyledBadge>
                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2" sx={{
                            fontWeight: 600
                        }}>SAM</Typography>
                        <Stack spacing={0} alignItems="center" direction={"row"}>
                            <ArrowDownLeft color={"green"} />
                            <Typography variant="caption" sx={{
                                fontSize: 12
                            }}>Yesterday, 21:24</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction={'row'}>
                <IconButton size='medium'>
                    <Phone></Phone>
                </IconButton>
                <IconButton size='medium'>
                    <Camera></Camera>
                </IconButton>

                </Stack>
            </Stack>
        </Box>
    );
}

export default CallLogElement