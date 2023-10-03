import { Container, Typography } from '@mui/material'
import { Button, Card, Grid, Stack, Avatar } from '@mui/material'
import MovingIcon from '@mui/icons-material/Moving';
import { fontFamily, fontSize } from '@mui/system'
import React, { useState, useEffect } from "react";
import ApexChart from './chart';
import LineCharts from './LineCharts';
import Charts from './chart';

const data = [
    { xValue: '22', accountBalance: 5, totalEarnings: 5 },
    { xValue: 'Dec', accountBalance: 2, totalEarnings: 10 },
    { xValue: '8', accountBalance: 18, totalEarnings: 12 },
    { xValue: '15', accountBalance: 17, totalEarnings: 14 },
    { xValue: '22', accountBalance: 16, totalEarnings: 15 },
    { xValue: '2022', accountBalance: 15, totalEarnings: 17 },
    { xValue: '8', accountBalance: 14, totalEarnings: 19 },
    { xValue: '15', accountBalance: 13, totalEarnings: 22 },
    { xValue: 'Today', accountBalance: 12, totalEarnings: 24 },
    { xValue: 'Feb', accountBalance: 11, totalEarnings: 26 },
    { xValue: '8', accountBalance: 10, totalEarnings: 29 },
    { xValue: '15', accountBalance: 5, totalEarnings: 30 },
];

let dataKeys = [
    {
        name: 'Account balance',
        dataKey: 'accountBalance',
        stroke: '#8884d8',
        dot: false,
        type: 'monotone'
    },
    {
        name: 'Total earnings',
        dataKey: 'totalEarnings',
        stroke: '#82ca9d',
        dot: false,
        type: 'monotone'
    }
]
const filters = [
    {
        name: '30D',
        isActive: false
    },
    {
        name: '60D',
        isActive: false
    },
    {
        name: '90D',
        isActive: true
    },
    {
        name: '1Y',
        isActive: false
    },
    {
        name: 'All Time',
        isActive: false
    },
]

export const History = () => {
    return (
        <>
            <Container style={{ marginTop: 40 }}>
                <Grid container justifyContent="space-between" spacing={3}>

                    <Grid item xs={12} md={8} >
                        <Card style={{ minHeight: 10, borderRadius: "6px" }}>
                            <Grid container >
                                <Grid xs={3} sx={{ pb: 1 }} style={{ paddingTop: 10 }}>
                                    <Grid>
                                        <Typography style={{ textAlign: 'center' }} fontWeight={700} fontSize={"24px"} textAlign={"center"}>Profit & Loss</Typography>
                                        <Stack alignItems={"center"} display="flex" sx={{ py: 4 }}>
                                            <Avatar sx={{ bgcolor: "#3FC6F0", height: "62px", width: "62px", }} ><Typography fontSize={"36px"}>12</Typography></Avatar>
                                        </Stack>
                                    </Grid>
                                    <Grid>
                                        <Typography style={{ textAlign: 'center' }} fontWeight={400} fontSize={"18px"}>
                                            25 Bets Placed
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid xs={8} sx={{ pt: 1 }}>
                                    <Grid container display={"flex"} alignItems="center">
                                        <Grid xs={3}>
                                            <Button sx={{ borderRadius: 0, fontWeight: 400, fontSize: "18px" }} >History</Button>
                                        </Grid>
                                        <Grid xs={9}>
                                            <Grid container justifyContent={"end"} >
                                                <Grid xs={11} md={8}>
                                                    <Grid container>
                                                        <Grid xs={2} md={2}>
                                                            <Button sx={{ borderRadius: 0, fontWeight:400,fontSize:{xs:"12px", md:"16px"}}}>1h</Button>
                                                        </Grid>
                                                        <Grid xs={2} md={2}>
                                                            <Button sx={{ borderRadius: 0, fontWeight:400,fontSize:{xs:"12px", md:"16px"}}}>6h</Button>
                                                        </Grid>
                                                        <Grid xs={2} md={2}>
                                                            <Button sx={{ borderRadius: 0, fontWeight:400,fontSize:{xs:"12px", md:"16px"}}}>1D</Button>
                                                        </Grid>
                                                        <Grid xs={2} md={2}>
                                                            <Button sx={{ borderRadius: 0, fontWeight:400,fontSize:{xs:"12px", md:"16px"}}}>1W</Button>
                                                        </Grid><Grid xs={2} md={2}>
                                                            <Button sx={{ borderRadius: 0, fontWeight:400,fontSize:{xs:"12px", md:"16px"}}}>6M</Button>
                                                        </Grid>
                                                        <Grid xs={2} md={2}>
                                                            <Button sx={{ borderRadius: 0, fontWeight:400,fontSize:{xs:"12px", md:"16px"}}}>All</Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid xs={12}>
                                            <Charts data={data} dataKeys={dataKeys} filters={filters} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ p:4, height: "190px" }} style={{ borderRadius: 10 }}>
                            <Grid container>
                                <Grid item xs={6} >
                                    <Grid container display={"flex"} justifyContent={"center"} >
                                        <Grid >
                                            <Typography fontWeight={400} fontSize={"20px"} >UNMATCHED </Typography>
                                            <Typography textAlign={"center"} sx={{ fontWeight: 400,fontSize:"18px", py:3}} color="#007DEC" >Beds</Typography>
                                            <Typography variant='h3' style={{ textAlign: 'center' }} color="#007DEC">12</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} >
                                    <Grid container justifyContent="center">
                                        <Grid >
                                            <Typography style={{ textAlign: 'center' }} fontWeight={400} fontSize={"20px"}>MATCHED</Typography>
                                            <Typography style={{ textAlign: 'center' }} sx={{ fontWeight: 400,fontSize:"18px", py: 3 }} color="#007DEC">Beds</Typography>
                                            <Typography variant='h3' style={{ textAlign: 'center' }} color="#007DEC">5</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid xs={12} display={"flex"} justifyContent={"center"} >
                                    <Typography style={{ textAlign: 'center' }}><span style={{ color: '#3AAE27', fontWeight: 400,fontSize:"16px" }}><MovingIcon />2.0% </span>
                                        Matched beds 24hr Change
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
