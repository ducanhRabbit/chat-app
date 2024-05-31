import { Box, Grid, IconButton, Link, Stack, Tab, Tabs, Typography, alpha, styled } from "@mui/material";
import { CaretLeft, Download, FileArrowDown } from "phosphor-react";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/appReducer";
import { faker } from "@faker-js/faker";
import { Shared_docs, Shared_links } from "../data/data";

function SharedMessage() {
  const dispatch = useDispatch()

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const LinkTag = styled(Box)(({ theme }) => ({
    borderRadius: '16px',
    backgroundColor: alpha('#d9d9d9', .7),
    overflow: 'hidden',
    minHeight: '80px'
  }))
  return (
    <Box
      sx={{
        height: "100vh",
        width: "320px",
      }}
    >
      <Stack sx={{
        height: '100%'
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
          <CaretLeft className="cursor-pointer" onClick={() => {
            dispatch(UpdateSidebarType('CONTACT'))
          }} />
          <Typography variant="h6">Media</Typography>
        </Stack>
        <Tabs sx={{
          px: 2,
          pt: 2,
          width: '100%'
        }} value={value} onChange={handleChange} centered>
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        <Stack p={3} spacing={3} sx={{
          height: "100%",
          position: "relative",
          flexGrow: 1,
          overflow: "scroll",
        }}>
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container columns={3} gap={1}>
                    {[0, 1, 2, 3, 4, 5, 6].map((el) => (
                      <Grid item >
                        <Box>
                          <img className="w-[80px] h-[80px] object-cover"
                            src={faker.image.avatar()}
                            alt={faker.internet.userName()}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                );
              case 1:
                return Shared_links.map((el) => <LinkTag>
                  <Stack sx={{
                    height: '100%',
                    cursor: 'pointer'
                  }} direction={'row'}>
                    <Box sx={{
                      width: '90px',
                      height: '100%'
                    }}>
                      <img className="w-full object-cover h-full" src={faker.image.urlPicsumPhotos()} />
                    </Box>
                    <Stack gap={0.5} justifyContent={'center'} sx={{
                      flex: 1,
                      px: 2
                    }}>
                      <Typography className="line-clamp-1 " fontSize={14} fontWeight={700}>{el.title}</Typography>
                      <Link sx={{
                        fontSize: 12
                      }}>{el.link}</Link>
                    </Stack>
                  </Stack>
                </LinkTag>);
              case 2:
                return Shared_docs.map((el) => (
                  <Box sx={{
                    borderRadius: '16px',
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                    p: 2
                  }}>
                    <Stack gap={1}>
                      <Box sx={{
                        width: '100%',
                        height: '180px',
                        borderRadius: '12px',
                        overflow: 'hidden'
                      }}>
                        <img className="object-cover w-full h-full" src={faker.image.url()} />
                      </Box>
                      <Stack direction={"row"} alignItems={'center'} justifyContent={'space-between'}>
                        <Stack gap={0.5} direction={'row'} alignItems={'center'}>
                        <FileArrowDown size={30}></FileArrowDown>
                        <Typography sx={{
                          fontWeight: 600,
                          fontSize:14
                        }}>MeoVid</Typography>
                        </Stack>
                        <IconButton>
                          <Download></Download>
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Box>
                ));
                break;
              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
}

export default SharedMessage;
