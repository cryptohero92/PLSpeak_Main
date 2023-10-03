import { Card, CardContent, Container, Divider, Grid, Typography, Box, Avatar, Stack } from '@mui/material'
import React from 'react'
import politics from "../assets/building.png"
import sports from "../assets/sports.png"
import movie from "../assets/movie.png"
import finance from "../assets/finance.png"
import pls from "../assets/pls.png"


const Bets = () => {
    return (
        <>
            <Container >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Card style={{ borderRadius: "6px" }} >
                            <CardContent >
                                <Grid container>
                                    <Grid>
                                        <Typography style={{ fontWeight: 700, fontSize: "25px", color: "#5147CE", display: "flex", alignItems: "center" }} variant="h6">
                                            Congratulations Watson!<img src={pls} />
                                        </Typography>
                                    </Grid>
                                    <Grid container sx={{ pt: 1 }}>
                                        <Typography>
                                            You were <span style={{ color: "#2499ef" }}>76%</span> accurate on our prediction market.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider />
                            <Grid container justifyContent='center'>
                                <Grid xs={6}>
                                    <Grid sx={{ pt: 1 }} >
                                        <Typography style={{ textAlign: 'center' }} variant='h6'>Potential Winnings</Typography>
                                        <Stack alignItems={"center"} display="flex">
                                            <Avatar sx={{ bgcolor: "#3FC6F0", height: "62px", width: "62px" }} ><Typography fontSize={"36px"} >12</Typography></Avatar>
                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Grid xs={12} sx={{ pb: 2, pt: 2 }} >
                                    <Typography style={{ textAlign: 'end', marginRight: 30 }} fontWeight={800}>$124 Total Exposure</Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Grid>
                                    <Card style={{ borderRadius: "6px", minHeight: 116, display: 'flex', alignItems: 'center', justifyContent: "center", paddingTop: 6 }} >
                                        <CardContent>
                                            <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                                                <Grid xs={6}>
                                                    <Typography variant="p" style={{ fontWeight: 900 }} >Sports</Typography>
                                                    <Typography sx={{ pt: 1, color: "#7D7D7D" }} >1905 Markets</Typography>
                                                </Grid>
                                                <Grid xs={6}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            height: "58px",
                                                            width: "111px",

                                                        }}
                                                        alt="The house from the offer."
                                                        src={sports}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid>
                                    <Card style={{ borderRadius: "6px", maxHeight: 116, display: 'flex', alignItems: 'center', justifyContent: "center", paddingTop: 6 }}   >
                                        <CardContent>
                                            <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                                                <Grid xs={6} >
                                                    <Typography variant="p" style={{ fontWeight: 800 }} >Finance</Typography>
                                                    <Typography sx={{ pt: 1, color: "#7D7D7D" }} >879 Markets</Typography>
                                                </Grid>
                                                <Grid xs={6}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            height: "91px",
                                                            width: "101px",

                                                        }}
                                                        alt="The house from the offer."
                                                        src={finance}
                                                    />
                                                </Grid>
                                                
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid>
                                    <Card style={{ borderRadius: "6px", maxHeight: 116, display: 'flex', alignItems: 'center', justifyContent: "center", paddingTop: 6 }}   >
                                        <CardContent>
                                            <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                                                <Grid xs={8}>
                                                    <Typography variant="p" style={{ fontWeight: 800 }} >Politics</Typography>
                                                    <Typography sx={{ pt: 1, color: "#7D7D7D" }} >904 Markets</Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            height: "91px",
                                                            width: "89px",

                                                        }}
                                                        alt="The house from the offer."
                                                        src={politics}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid>
                                    <Card style={{ borderRadius: "6px", minHeight: 116, display: 'flex', alignItems: 'center', justifyContent: "center", paddingTop: 6 }}   >
                                        <CardContent>
                                            <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                                                <Grid xs={8}>
                                                    <Typography variant="p" style={{ fontWeight: 800 }} >Enterteinment</Typography>
                                                    <Typography sx={{ pt: 1, color: "#7D7D7D" }} >860 Markets</Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            height: "60px",
                                                            width: "96px",

                                                        }}
                                                        alt="The house from the offer."
                                                        src={movie}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Bets