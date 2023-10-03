import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Card, Container, Grid, Stack, Button, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import coin from "../assets/coin.png"
import eth from "../assets/Eth.png"
import plus from "../assets/+.png"


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ariaLabel = { 'aria-label': 'description' };

export const Market = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [age, setAge] = React.useState('');

    const Change = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <Container sx={{ pt: 10 }}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <Box sx={{ borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab sx={{ textTransform: 'none', fontWeight: 400, fontSize: "20px" }} label="Position" {...a11yProps(0)} />
                            <Tab sx={{ textTransform: 'none', fontWeight: 400, fontSize: "20px" }} label="Liquidity" {...a11yProps(1)} />
                            <Tab sx={{ textTransform: 'none', fontWeight: 400, fontSize: "20px" }} label="History" {...a11yProps(2)} />

                        </Tabs>

                    </Box>

                    <TabPanel value={value} index={0}>
                        <Stack sx={{ py: 3 }}>
                            <FormControl variant="standard" sx={{ m: 1, maxWidth: 200 }}>
                                <InputLabel id="demo-simple-select-standard-label">All Markets</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={age}
                                    onChange={Change}
                                >
                                    <MenuItem value="">
                                        <em>Market</em>
                                    </MenuItem>
                                    <MenuItem value={10}> Chess</MenuItem>
                                    <MenuItem value={20}> Business</MenuItem>
                                    <MenuItem value={30}> Coronavirus</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Grid Container sx={{ pt: 5 }}>
                            <Grid item xs={12}>
                                <Card sx={{ p: 2, mt: 3 }}>
                                    <Grid container justifyContent={"center"}>
                                        <Grid item xs={11}>
                                            <Grid container display={"flex"} alignItems="center">

                                                <Grid item xs={12} md={10}>
                                                    <Stack direction={"row"} alignItems="center" spacing={1} sx={{ pl: { xs: "", md: 2 } }}>
                                                        <Avatar alt="Bitcoin" sx={{ width: { xs: 30, md: 51 }, height: { xs: 30, md: 51 } }} src={coin} />
                                                        <Typography fontWeight={400} fontSize={{ sx: "12px", md: "18px" }}>When will Ethereum Merge to Proof-of-Stake?</Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} md={2} display="flex" justifyContent={{ xs: "center", md: "center" }}>
                                                    <Button variant='contained' sx={{ borderRadius: "38px", color: "#fff", my: { xs: 1, md: "none" }, height: { xs: "20px", md: "40px" }, width: { xs: "50px", md: "109px" }, bgcolor: "#47C6CE", textTransform: 'none', }}>Trade</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container sx={{ pt: 1 }}>
                                            <Grid xs={6} md={12}>
                                                <Grid container>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>OutCome</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Price Avg.</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Price Cur</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>P/L$</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>%</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Init Value</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Cur.Value </Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Max Payout </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Divider sx={{ display: { xs: "none", md: "block" }, pt: { xs: "", md: 1 } }} />
                                            </Grid>
                                            <Grid xs={6} md={12}>
                                                <Grid container>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>Yes</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$0.54</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$0.50</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>-11.43</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>-7.73%</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$155.00 </Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$145.00</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$287.00</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Card>
                                <Card sx={{ p: 2, mt: 3 }}>
                                    <Grid container justifyContent={"center"}>
                                        <Grid item xs={11}>
                                            <Grid container display={"flex"} alignItems="center">

                                                <Grid item xs={12} md={10}>
                                                    <Stack direction={"row"} alignItems="center" spacing={1} sx={{ pl: { xs: "", md: 2 } }}>
                                                        <Avatar alt="Bitcoin" sx={{ width: { xs: 30, md: 51 }, height: { xs: 30, md: 51 } }} src={coin} />
                                                        <Typography fontWeight={400} fontSize={{ sx: "12px", md: "18px" }}>When will Ethereum Merge to Proof-of-Stake?</Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} md={2} display="flex" justifyContent={{ xs: "center", md: "center" }}>
                                                    <Button variant='contained' sx={{ borderRadius: "38px", color: "#fff", my: { xs: 1, md: "none" }, height: { xs: "20px", md: "40px" }, width: { xs: "50px", md: "109px" }, bgcolor: "#47C6CE", textTransform: 'none', }}>Trade</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container sx={{ pt: 1 }}>
                                            <Grid xs={6} md={12}>
                                                <Grid container>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>OutCome</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Price Avg.</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Price Cur</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>P/L$</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>%</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Init Value</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Cur.Value </Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Max Payout </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Divider sx={{ display: { xs: "none", md: "block" }, pt: { xs: "", md: 1 } }} />
                                            </Grid>
                                            <Grid xs={6} md={12}>
                                                <Grid container>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>Yes</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$0.54</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$0.50</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>-11.43</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>-7.73%</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$155.00 </Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$145.00</Typography>
                                                    </Grid>
                                                    <Grid xs={12} md={1.5}>
                                                        <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$287.00</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Stack sx={{ py: 3 }}>
                            <FormControl variant="standard" sx={{ m: 1, maxWidth: 200 }}>
                                <InputLabel id="demo-simple-select-standard-label">Sort by:</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={age}
                                    onChange={Change}>
                                    <MenuItem value="">
                                        <em>Value</em>
                                    </MenuItem>
                                    <MenuItem value={10}> Chess</MenuItem>
                                    <MenuItem value={20}> Business</MenuItem>
                                    <MenuItem value={30}> Coronavirus</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Grid container >

                            <Grid xs={12}>
                                <Card sx={{ p: 2, mt: 3 }}>
                                    <Grid container sx={{ pt: 1 }}>
                                        <Grid xs={12} md={8}>
                                            <Grid container>
                                                <Grid xs={6} md={12}>
                                                    <Grid container>
                                                        <Grid xs={12} md={3}>
                                                            <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Token Tolls</Typography>
                                                        </Grid>
                                                        <Grid xs={12} md={3} sx={{ pt: { xs: 1.5, md:0 } }}>
                                                            <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Exchange Rate</Typography>
                                                        </Grid>
                                                        <Grid xs={12} md={3}>
                                                            <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Amount of deals</Typography>
                                                        </Grid>
                                                        <Grid xs={12} md={3}>
                                                            <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Pool Pressure</Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Divider sx={{ display: { xs: "none", md: "block" }, pt: { xs: "", md: 1 } }} />
                                                </Grid>
                                                <Grid xs={6} md={12}>
                                                    <Grid container>
                                                        <Grid xs={12} md={3}>
                                                            <Stack direction={"row"} spacing={1} sx={{}} alignItems="center">
                                                                <Avatar height={{ xs: "7px", md: "20px" }} width={{ xs: "7px", md: "20px" }} src={coin} />
                                                                <Avatar height={{ xs: "7x", md: "20px" }} width={{ xs: "8px", md: "20px" }} src={eth} />
                                                                <Typography sx={{ fontWeight: 400, fontSize: { xs: "10px", md: "16px" }, }}>BNB/ETH</Typography>
                                                            </Stack>                                                </Grid>
                                                        <Grid xs={12} md={3}>
                                                            <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$0.54</Typography>
                                                        </Grid>
                                                        <Grid xs={12} md={3}>
                                                            <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$0.50</Typography>
                                                        </Grid>
                                                        <Grid xs={12} md={3}>
                                                            <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>-11.43</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid xs={12} md={4} justifyContent={"center"} display="flex" alignItems={"center"}>
                                            <Stack direction={"row"} spacing={3}>
                                                <Button variant='contained' sx={{ borderRadius: "38px", color: "#fff", height: { xs: "20px", md: "40px" }, width: { xs: "140px", md: "175px" }, bgcolor: "#47C6CE", textTransform: 'none', fontWeight: { xs: "none", md: 700 } }} startIcon={<img width={{ xs: "8px", md: "14px" }} height={{ xs: "8px", md: "14px" }} src={plus} background=" #FFFFFF" />}>Add Liquidity</Button>
                                                <Button variant='outlined' sx={{ borderRadius: "50px", color: "#5147CE", border: "1px solid #5147CE", height: { xs: "20px", md: "40px" }, width: { xs: "65px", md: "129px" }, textTransform: 'none', fontWeight: 700 }}>Trade</Button>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Card>
                                <Card sx={{ p: 2, mt: 3 }}>
                                    <Grid container sx={{ pt: 1 }}>
                                        <Grid xs={12} md={8}>
                                            <Grid container>
                                                <Grid xs={6} md={12}>
                                                    <Grid container>
                                                        <Grid xs={12} md={3}>
                                                            <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Token Tolls</Typography>
                                                        </Grid>
                                                        <Grid xs={12} md={3} sx={{ pt: { xs: 1.5, md:0 } }}>
                                                            <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Exchange Rate</Typography>
                                                        </Grid>
                                                        <Grid xs={12} md={3}>
                                                            <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Amount of deals</Typography>
                                                        </Grid>
                                                        <Grid xs={12} md={3}>
                                                            <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Pool Pressure</Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Divider sx={{ display: { xs: "none", md: "block" }, pt: { xs: "", md: 1 } }} />
                                                </Grid>
                                                <Grid xs={6} md={12}>
                                                    <Grid container>
                                                        <Grid xs={12} md={3}>
                                                            <Stack direction={"row"} spacing={1} sx={{}} alignItems="center">
                                                                <Avatar height={{ xs: "7px", md: "20px" }} width={{ xs: "7px", md: "20px" }} src={coin} />
                                                                <Avatar height={{ xs: "7x", md: "20px" }} width={{ xs: "8px", md: "20px" }} src={eth} />
                                                                <Typography sx={{ fontWeight: 400, fontSize: { xs: "10px", md: "16px" }, }}>BNB/ETH</Typography>
                                                            </Stack>                                                </Grid>
                                                        <Grid xs={12} md={3}>
                                                            <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$0.54</Typography>
                                                        </Grid>
                                                        <Grid xs={12} md={3}>
                                                            <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$0.50</Typography>
                                                        </Grid>
                                                        <Grid xs={12} md={3}>
                                                            <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>-11.43</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid xs={12} md={4} justifyContent={"center"} display="flex" alignItems={"center"}>
                                            <Stack direction={"row"} spacing={3}>
                                                <Button variant='contained' sx={{ borderRadius: "38px", color: "#fff", height: { xs: "20px", md: "40px" }, width: { xs: "140px", md: "175px" }, bgcolor: "#47C6CE", textTransform: 'none', fontWeight: { xs: "none", md: 700 } }} startIcon={<img width={{ xs: "8px", md: "14px" }} height={{ xs: "8px", md: "14px" }} src={plus} background=" #FFFFFF" />}>Add Liquidity</Button>
                                                <Button variant='outlined' sx={{ borderRadius: "50px", color: "#5147CE", border: "1px solid #5147CE", height: { xs: "20px", md: "40px" }, width: { xs: "65px", md: "129px" }, textTransform: 'none', fontWeight: 700 }}>Trade</Button>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Stack sx={{ py: 3 }} direction={"row"} spacing={3}>
                            <Grid container>
                                <Grid xs={12} md={3}>
                                    <Stack>
                                        <FormControl variant="standard" sx={{ m: 1, maxWidth: 200 }}>
                                            <InputLabel id="demo-simple-select-standard-label" sx={{ maxWidth: 200 }}>Date:</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={age}
                                                onChange={Change}>

                                                <MenuItem value={4}>Last 1 Month </MenuItem>
                                                <MenuItem value={5}> Last 6 Month</MenuItem>
                                                <MenuItem value={6}>1 Year</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </Grid>
                                <Grid xs={12} md={3}>
                                    <Stack>
                                        <FormControl variant="standard" sx={{ m: 1, maxWidth: 200 }}>
                                            <InputLabel id="demo-simple-select-standard-label">Sort by:</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={age}
                                                onChange={Change}>
                                                <MenuItem value={10}> Value</MenuItem>
                                                <MenuItem value={20}> Business</MenuItem>
                                                <MenuItem value={30}> Coronavirus</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </Grid>
                                <Grid xs={12} md={3}>
                                    <Stack>
                                        <FormControl variant="standard" sx={{ m: 1, maxWidth: 200 }}>
                                            <InputLabel id="demo-simple-select-standard-label">Type:</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={age}
                                                onChange={Change}>
                                                <MenuItem value={1}> Chess</MenuItem>
                                                <MenuItem value={2}> Business</MenuItem>
                                                <MenuItem value={3}> Coronavirus</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Stack>
                        <Grid container>
                            <Card sx={{ p: 2, mt: 3 }}>
                                <Grid container justifyContent={"center"}>
                                    <Grid item xs={11}>
                                        <Grid container display={"flex"} alignItems="center">

                                            <Grid item xs={12} md={6}>
                                                <Stack direction={"row"} alignItems="center" spacing={1} sx={{ pl: { xs: "", md: 2 } }}>
                                                    <Avatar alt="Bitcoin" sx={{ width: { xs: 30, md: 51 }, height: { xs: 30, md: 51 } }} src={coin} />
                                                    <Typography fontWeight={400} fontSize={{ sx: "12px", md: "18px" }}>When will Ethereum Merge to Proof-of-Stake?</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6} display="flex" justifyContent={{ xs: "center", md: "end" }}>
                                                <Button variant='contained' sx={{ borderRadius: "38px", color: "#fff", my: { xs: 1, md: "none" }, height: { xs: "20px", md: "40px" }, width: { xs: "50px", md: "109px" }, bgcolor: "#47C6CE", textTransform: 'none', }}>Trade</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{ pt: 1 }}>
                                        <Grid xs={6} md={12}>
                                            <Grid container>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>OutCome</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Price Avg.</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Price Cur</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>P/L$</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>%</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Init Value</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Cur.Value </Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Max Payout </Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider sx={{ display: { xs: "none", md: "block" }, pt: { xs: "", md: 1 } }} />
                                        </Grid>
                                        <Grid xs={6} md={12}>
                                            <Grid container>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>Yes</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$0.54</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$0.50</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>-11.43</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>-7.73%</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$155.00 </Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$145.00</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$287.00</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Card>
                            <Card sx={{ p: 2, mt: 3 }}>
                                <Grid container justifyContent={"center"}>
                                    <Grid item xs={11}>
                                        <Grid container display={"flex"} alignItems="center">

                                            <Grid item xs={12} md={6}>
                                                <Stack direction={"row"} alignItems="center" spacing={1} sx={{ pl: { xs: "", md: 2 } }}>
                                                    <Avatar alt="Bitcoin" sx={{ width: { xs: 30, md: 51 }, height: { xs: 30, md: 51 } }} src={coin} />
                                                    <Typography fontWeight={400} fontSize={{ sx: "12px", md: "18px" }}>When will Ethereum Merge to Proof-of-Stake?</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6} display="flex" justifyContent={{ xs: "center", md: "end" }}>
                                                <Button variant='contained' sx={{ borderRadius: "38px", color: "#fff", my: { xs: 1, md: "none" }, height: { xs: "20px", md: "40px" }, width: { xs: "50px", md: "109px" }, bgcolor: "#47C6CE", textTransform: 'none', }}>Trade</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{ pt: 1 }}>
                                        <Grid xs={6} md={12}>
                                            <Grid container>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>OutCome</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Price Avg.</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Price Cur</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>P/L$</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>%</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Init Value</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Cur.Value </Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography color={"#9FA2AF"} sx={{ fontWeight: 400, fontSize: "16px", textAlign: { xs: "start", md: "center" } }}>Max Payout </Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider sx={{ display: { xs: "none", md: "block" }, pt: { xs: "", md: 1 } }} />
                                        </Grid>
                                        <Grid xs={6} md={12}>
                                            <Grid container>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>Yes</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$0.54</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$0.50</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>-11.43</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>-7.73%</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$155.00 </Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$145.00</Typography>
                                                </Grid>
                                                <Grid xs={12} md={1.5}>
                                                    <Typography sx={{ fontWeight: 400, fontSize: "16px", pt: { xs: "", md: 1 }, textAlign: { xs: "end", md: "center" } }}>$287.00</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Card>
                        </Grid>
                    </TabPanel>
                </Box>
            </Container>
        </>
    )
}
