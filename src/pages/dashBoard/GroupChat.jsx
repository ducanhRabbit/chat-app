import { useTheme } from "@emotion/react";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Styled/Search/Search";
import { ChatList } from "../../data/data";
import StyledBadge from "../../components/StyledBadge";
import { faker } from "@faker-js/faker";
import Conversation from "../../components/Conversation/Conversation";

function GroupChat() {
  const theme = useTheme();
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* Left */}

        <Box
          sx={{
            overflowY: "scroll",
            height: "100vh",
            width: 320,
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
              <Typography variant="h5">Groups</Typography>
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
                Create New Group
              </Typography>
              <IconButton>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />

            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                Pinned
              </Typography>
              {/* Chat List */}
              {ChatList.filter((el) => el.pinned).map((el, idx) => {
                // return <ChatElement {...el} />;
              })}
              <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                All Chats
              </Typography>
              {/* Chat List */}
              {ChatList.filter((chat) => !chat.pinned).map((chat, index) => {
                return (
                  <Stack
                    key={index}
                    direction={"row"}
                    // alignItems={"center"}
                    justifyContent="space-between"
                    p={2}
                    borderRadius={2}
                    sx={{
                      backgroundColor: "#fff",
                    }}
                  >
                    <Stack spacing={2} direction={"row"} alignItems={"center"}>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <Avatar src={faker.image.avatar()}></Avatar>
                      </StyledBadge>
                      <Stack spacing={0.3}>
                        <Typography
                          sx={{
                            fontWeight: 600,
                          }}
                          variant="subtitle2"
                        >
                          {chat.name}
                        </Typography>
                        <Typography variant="caption">
                          Lorem ipsum dolor si
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      spacing={2}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography sx={{ fontWeight: 600 }} variant="caption">
                        {chat.time}
                      </Typography>
                      <Badge
                        className="unread-count"
                        sx={{
                          "& .MuiBadge-badge": {
                            position: "relative",
                          },
                        }}
                        color="primary"
                        badgeContent={chat.unread}
                      ></Badge>
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Box>

        {/* Right */}
        {/* Conversation component */}
        <Box sx={{
            height:'100%',
            flexGrow:1

        }}>
            <Conversation></Conversation>
        </Box>
      </Stack>
      {/* {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog} />} */}
    </>
  );
}

export default GroupChat;
