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

const Position = () => {
    const classes = useStyles();
    return (
        <>
            <Box mt={3}>
                <Stack pb={2}>
                    <Typography fontFamily={"Arial"} fontWeight={700} fontSize="22px" >Position</Typography>
                </Stack>
                <Card>
                    <Grid xs={12}>
                        <Grid container sx={{ pt: 1, p: 3 }}>
                            <Grid xs={6} md={12}>
                                <Grid container >
                                    <Grid xs={12} md={2}>
                                        <Typography color={"#9FA2AF"} className={classes.Position} textAlign={{ xs: "start", md: "center" }}>OutCome</Typography>
                                    </Grid>
                                    <Grid xs={12} md={2.5}>
                                        <Typography color={"#9FA2AF"} className={classes.Position} textAlign={{ xs: "start", md: "center" }}>Quantity Owned</Typography>
                                    </Grid>
                                    <Grid xs={12} md={2.5}>
                                        <Typography color={"#9FA2AF"} className={classes.Position} textAlign={{ xs: "start", md: "center" }}>Avg.Price Paid</Typography>
                                    </Grid>
                                    <Grid xs={12} md={2}>
                                        <Typography color={"#9FA2AF"} className={classes.Position} textAlign={{ xs: "start", md: "center" }}>Init. Value</Typography>
                                    </Grid>
                                    <Grid xs={12} md={2}>
                                        <Typography color={"#9FA2AF"} className={classes.Position} textAlign={{ xs: "start", md: "center" }}>Cur. Value</Typography>
                                    </Grid>
                                    <Grid xs={12} md={1}>
                                        <Typography color={"#9FA2AF"} className={classes.Position} textAlign={{ xs: "start", md: "center" }}> P/L </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ display: { xs: "none", md: "block" }, pt: { xs: "", md: 1 } }} />
                            </Grid>
                            <Grid xs={6} md={12} pt={{ xs: "none", md: 2 }}>
                                <Grid container>
                                    <Grid xs={12} md={2}>
                                        <Typography className={classes.Position} textAlign={{ xs: "end", md: "center" }}>Yes</Typography>
                                    </Grid>
                                    <Grid xs={12} md={2.5}>
                                        <Typography className={classes.Position} textAlign={{ xs: "end", md: "center" }}>3</Typography>
                                    </Grid>
                                    <Grid xs={12} md={2.5}>
                                        <Typography className={classes.Position} textAlign={{ xs: "end", md: "center" }}>$20</Typography>
                                    </Grid>
                                    <Grid xs={12} md={2}>
                                        <Typography className={classes.Position} textAlign={{ xs: "end", md: "center" }} >$30</Typography>
                                    </Grid>
                                    <Grid xs={12} md={2}>
                                        <Typography className={classes.Position} textAlign={{ xs: "end", md: "center" }} >$15</Typography>
                                    </Grid>

                                    <Grid xs={12} md={1}>
                                        <Typography className={classes.Position} textAlign={{ xs: "end", md: "center" }}>-11.5</Typography>
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

export default Position