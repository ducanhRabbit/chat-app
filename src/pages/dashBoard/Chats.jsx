import { useTheme } from '@emotion/react'
import { faker } from '@faker-js/faker'
import { Avatar, Badge, Box, Button, Divider, IconButton, InputBase, Stack, Typography, alpha, styled } from '@mui/material'
import { ArchiveBox, CircleDashed, FlagBanner, MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { ChatList } from '../../data/data'
import { StyledInputBase } from '../../components/Styled/Search/Search'

function Chats() {
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

    // const StyledInputBase = styled(InputBase)(({ theme }) => ({
    //     color: "inherit",
    //     "& .MuiInputBase-input": {
    //         padding: theme.spacing(1, 1, 1, 0),
    //         // vertical padding + font size from searchIcon
    //         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    //         width: "100%",
    //     },
    // }));

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
        <Box
            sx={{
                height: '100%',
                width: 320,
                backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper,
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"

            }}>
            <Stack spacing={2} p={3} sx={{
                maxHeight: '100vh',
            }}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='h4' component={'h4'} sx={{
                        fontWeight: 600
                    }}>
                        Chats
                    </Typography>
                    <IconButton sx={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '100%',
                        overflow: 'hidden',
                        padding: 0
                    }}>
                        <CircleDashed />
                    </IconButton>
                </Stack>

                <Search>
                    <SearchIconWrapper >
                        <MagnifyingGlass />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder='Search...' inputProps={{ "aria-label": "search" }}></StyledInputBase>

                </Search>

                <Stack spacing={1} >
                    <Stack direction={'row'} spacing={1.5} alignItems={'center'}>
                        <ArchiveBox size={24} />
                        <Button sx={{
                            textTransform: 'none'
                        }}>
                            Archived
                        </Button>
                    </Stack>
                    <Divider></Divider>
                </Stack>
                <Stack spacing={2} direction={'column'} overflow={'scroll'}>
                    <Stack spacing={2}>
                        <Typography sx={{

                        }} variant='subtitle2'>Pinned</Typography>

                        {/* Chat element */}

                        <Stack p={2} direction={'row'}
                            alignItems={"center"}
                            justifyContent="space-between"
                            sx={{
                                backgroundColor: '#F8FAFF',

                            }}>
                            <Stack spacing={2} direction={'row'} alignItems={'center'}>
                                <StyledBadge overlap="circular"
                                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                    variant="dot">
                                    <Avatar src={faker.image.avatar()}></Avatar>
                                </StyledBadge>
                                <Stack spacing={0.3}>
                                    <Typography variant="subtitle2">SAM</Typography>
                                    <Typography variant="caption">Lorem ipsum dolor si</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack p={2} direction={'row'}
                            alignItems={"center"}
                            justifyContent="space-between"
                            sx={{
                                backgroundColor: '#F8FAFF',

                            }}>
                            <Stack spacing={2} direction={'row'}>
                                <StyledBadge overlap="circular"
                                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                    variant="dot">
                                    <Avatar src={faker.image.avatar()}></Avatar>
                                </StyledBadge>
                                <Stack spacing={0.3}>
                                    <Typography variant="subtitle2">SAM</Typography>
                                    <Typography variant="caption">Lorem ipsum dolor si</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography sx={{

                        }} variant='subtitle2'>All chats</Typography>

                        {/* Chat element */}
                        {ChatList.filter((chat) => !chat.pinned).map((chat, index) => {
                            return <Stack key={index} direction={'row'}
                                // alignItems={"center"}
                                justifyContent="space-between"
                                p={2}
                                borderRadius={2}
                                sx={{

                                    backgroundColor: '#fff',

                                }}>
                                <Stack spacing={2} direction={'row'} alignItems={'center'}>
                                    <StyledBadge overlap="circular"
                                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                        variant="dot">
                                        <Avatar src={faker.image.avatar()}></Avatar>
                                    </StyledBadge>
                                    <Stack spacing={0.3}>
                                        <Typography sx={{
                                            fontWeight: 600
                                        }} variant="subtitle2">{chat.name}</Typography>
                                        <Typography variant="caption">Lorem ipsum dolor si</Typography>
                                    </Stack>
                                </Stack>
                                <Stack spacing={2} alignItems={"center"} justifyContent={'space-between'}>
                                    <Typography sx={{ fontWeight: 600 }} variant="caption">{chat.time}</Typography>
                                    <Badge className="unread-count"
                                    sx={{
                                        "& .MuiBadge-badge":{
                                            position: 'relative',
                                        }
                                    }}
                                        color="primary"
                                        badgeContent={chat.unread}>
                                    </Badge>
                                </Stack>
                            </Stack>
                        })}
                    </Stack>
                </Stack>

            </Stack>

        </Box>
    )
}

export default Chats
