import { Card, Grid, Typography, Container, Divider, Box, Stack, collapseClasses } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    Position: {
        fontWeight: 400,
        fontSize: "16px",
        pt: { xs: "", md: 1 },
        },
});

const Transactions = () => {
    const classes = useStyles();
    return (
        <>
            <Box mt={3}>
                <Stack pb={2}>
                    <Typography fontFamily={"Arial"} fontWeight={700} fontSize="22px" >Transactions</Typography>
                </Stack>
                <Card>
                    <Grid xs={12}>
                        <Grid container sx={{ pt: 1,p:3}}>
                            <Grid xs={6} md={12}>
                                <Grid container >
                                    <Grid xs={12} md={2}>
                                        <Typography color={"#9FA2AF"} textAlign={{ xs: "start", md: "center" }} className={classes.Position}>All</Typography>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <Typography color={"#9FA2AF"} textAlign={{ xs: "start", md: "center" }} className={classes.Position}>Total Value</Typography>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <Typography color={"#9FA2AF"} textAlign={{ xs: "start", md: "center" }} className={classes.Position}>Share Amount</Typography>
                                    </Grid>
                                    <Grid xs={12} md={2}>
                                        <Typography color={"#9FA2AF"} textAlign={{ xs: "start", md: "center" }} className={classes.Position}>Account</Typography>
                                    </Grid>
                                    <Grid xs={12} md={2}>
                                        <Typography color={"#9FA2AF"} textAlign={{ xs: "start", md: "center" }} className={classes.Position}>Time</Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ display: { xs: "none", md: "block" }, pt: { xs: "", md: 1 } }} />
                            </Grid>
                            <Grid xs={6} md={12} pt={{ xs: "none", md: 2 }}>
                                <Grid container>
                                    <Grid xs={12} md={2}>
                                        <Typography  className={classes.Position} textAlign={{ xs: "end", md: "center" }}>Above</Typography>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <Typography  className={classes.Position} textAlign={{ xs: "end", md: "center" }}>$60</Typography>
                                    </Grid>
                                    <Grid xs={12} md={3}>
                                        <Typography  className={classes.Position} textAlign={{ xs: "end", md: "center" }}>$20</Typography>
                                    </Grid>
                                    <Grid xs={12} md={2}>
                                        <Typography  className={classes.Position} textAlign={{ xs: "end", md: "center" }} >MetaMask</Typography>
                                    </Grid>
                                    <Grid xs={12} md={2}>
                                        <Typography  className={classes.Position} textAlign={{ xs: "end", md: "center" }}>6:30 PM</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </>
    )
}

export default Transactions