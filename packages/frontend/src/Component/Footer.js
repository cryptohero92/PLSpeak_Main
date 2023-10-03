import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Badge, Container, IconButton, Stack, Typography, Divider } from '@mui/material';
import { Card } from '@mui/material';
import Link from '@mui/material/Link';
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles, } from "@mui/styles";
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import logo from "../assets/logo 1.png"
import twit from "../assets/twit.png"
import vector from "../assets/Vector.png"
import whitevector from "../assets/discordw.png"

import Devid from "../assets/divider.png"
const useStyles = makeStyles({
    Txt: {
        fontWeight: 400,
        fontSize: '24px',
        lineHeight: '28px',
        // color: theme.palette.mode === 'dark' ? '#212121' : '#E5E5E5'
    },

});
const theme = createTheme({

    typography: {
        allVariants: {
            fontFamily: `"'Arial' !important"`,
            fontWeight: 600,
        },
    },
})



export default function Footer() {
    const navigate = useNavigate()
    const classes = useStyles();
    const themes = useTheme();


    return (

        <Container sx={{ py: 5, pt: 30 }}  >
            <footer style={{ marginTop: '50px' }}>

                <ThemeProvider theme={theme}>
                    <Grid xs={12}>
                        <Grid container alignItems={"center"} display={"flex"}>
                            <Grid item xs={12} md={4}>
                                <Grid container display={"flex"} justifyContent={{ xs: "center", md: "flex-start" }}>
                                    <img
                                        height="70px"
                                        width="225px"

                                        alt="The house from the offer."
                                        src={logo} />
                                </Grid>
                            </Grid>
                            <Grid xs={12} md={8}>
                                <Grid container display={"flex"} justifyContent="space-between">
                                    <Grid item xs={12} md={2.5}>
                                        <Typography color={themes.palette.mode === 'dark' ? '#fff' : '#000'} className={classes.Txt} textAlign={{ xs: "center", md: "flex-start" }}>Connect</Typography>
                                    </Grid>
                                    <Divider display={{ xs: "none", md: "block" }} orientation="vertical" color={themes.palette.mode === 'dark' ? '#fff' : '#000'} variant="middle" flexItem />
                                    <Grid item xs={12} md={2.5}>
                                        <Typography color={themes.palette.mode === 'dark' ? '#fff' : '#000'} className={classes.Txt} textAlign={{ xs: "center", md: "flex-start" }}>Privacy</Typography>
                                    </Grid>
                                    <Divider display={{ xs: "none", md: "block" }} orientation="vertical" color={themes.palette.mode === 'dark' ? '#fff' : '#000'} variant="middle" flexItem />
                                    <Grid item xs={12} md={2.5}>
                                        <Typography color={themes.palette.mode === 'dark' ? '#fff' : '#000'} className={classes.Txt} textAlign={{ xs: "center", md: "flex-start" }}>Terms of use</Typography>
                                    </Grid>
                                    <Divider display={{ xs: "none", md: "block" }} orientation="vertical" color={themes.palette.mode === 'dark' ? '#fff' : '#000'} variant="middle" flexItem />
                                    <Grid item xs={12} md={2.5}>
                                        <Typography color={themes.palette.mode === 'dark' ? '#fff' : '#000'} className={classes.Txt} textAlign={{ xs: "center", md: "flex-start" }}>How it works</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid xs={12}>
                                <Grid container mt={4}>
                                    <Grid xs={12} md={6}>
                                        <Grid container display={"flex"} justifyContent={{ xs: "center", md: "flex-start" }}>
                                            <Typography color={themes.palette.mode === 'dark' ? '#fff' : '#000'} fontWeight={400} fontSize={"18px"} fontStyle={"normal"} lineHeight={"21px"}>PLSPEAK.com © 2022</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} md={6} mt={{ xs: 1, md: 0 }} >
                                        <Stack direction={"row"} spacing={3} display={"flex"} justifyContent={{ xs: "center", md: "flex-start" }}>
                                            <Typography color={themes.palette.mode === 'dark' ? '#fff' : '#000'} className={classes.Txt}>Follow Us</Typography>
                                        </Stack>
                                        <Stack mt={{ xs: 1, md: 2 }} alignItems={'center'} direction={"row"} spacing={3} display={"flex"} justifyContent={{ xs: "center", md: "flex-start" }}>
                                            {themes.palette.mode === 'light' ? <img width={"36.5px"} height={"28px"} src={vector} />
                                                : <img width={"46.5px"} height={"40px"} src={whitevector} />
                                            }
                                            {themes.palette.mode === 'light' ? <TwitterIcon sx={{ color: "#2d2d2d", fontSize:40 }} />
                                                : <TwitterIcon sx={{ color: "#fff",fontSize:40 }} />
                                            }


                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </ThemeProvider >
            </footer>
        </Container>
    );
}