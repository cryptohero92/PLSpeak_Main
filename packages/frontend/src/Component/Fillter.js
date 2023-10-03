import { CardContent, Container, Grid, Stack, Typography, CardActions } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Button, Card, Avatar, } from '@mui/material';
import Eth from "../assets/Eth.png";
import TuneIcon from '@mui/icons-material/Tune';
import { alpha, styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { Comment, Toys } from '@mui/icons-material';
import like from "../assets/like1.png"
import share from "../assets/share1.png"
import save from "../assets/save.png"
import comment from "../assets/commen.png"
import ChatBox from './Comment';
import girl from "../assets/Girl.png";
import eth1 from "../assets/eth1.png"
import coin from "../assets/coin.png"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';


const useStyles = makeStyles({
    hideBorder: {
        '&.MuiExpansionPanel-root:before': {
            display: 'none',
        },
    },
})

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        borderRadius: 50,
        fontSize: 16,
        padding: '10px 12px',
        height: "20px",
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',

        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
export const Fillter = () => {
    const navigate = useNavigate()
    const classes = useStyles()
    const [age, setAge] = React.useState('');
    const theme = useTheme();

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            {/* <Container sx={{ pt: 3, height: "100%" }}> */}
                <Grid container padding={1}>
                    <Card sx={{
                        width: "100%",
                        height: "100px",
                        padding: 1,
                        bgcolor: "#000",
                        bgcolor: theme.palette.mode === 'dark' ? '#262c42' : '#E5E5E5'
                    }}>
                        <Grid container>
                            <Grid item xs={3} style={{ display: 'flex', height: "100px", justifyContent: 'center', alignItems: 'center' }}>
                                <Stack alignItems={'center'}>
                                    <Typography sx={{
                                        fontWeight: "400",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        fontFamily: "'Poppins', sans-serif"
                                    }} >
                                        Total acc value
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: "400",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}>
                                        $30.00k
                                    </Typography>
                                </Stack>
                                {/* <Stack alignItems={'end'}>
                                    <Divider orientation="vertical" flexItem
                                    />
                                </Stack> */}

                            </Grid>
                            {/* <Grid item xs={1}>
                                <Divider orientation="vertical" flexItem
                                    style={{ width: 1, height: 100 }} />
                            </Grid> */}

                            <Grid item xs={3} style={{ display: 'flex', height: "100px", justifyContent: 'center', alignItems: 'center' }}>
                                <Stack alignItems={'center'} justifyContent={'center'}>
                                    <Typography sx={{
                                        fontWeight: "400",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}>
                                        Tranding position
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: "400",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}>
                                        $30.00k
                                    </Typography>
                                </Stack>
                            </Grid>
                            {/* <Grid item xs={1}>
                                <Divider orientation="vertical" flexItem
                                    style={{ width: 1, height: 100 }} />
                            </Grid> */}
                            <Grid item xs={3} style={{ display: 'flex', height: "100px", justifyContent: 'center', alignItems: 'center' }}>
                                <Stack alignItems={'center'} justifyContent={'center'}>
                                    <Typography sx={{
                                        fontWeight: "400",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}>
                                        Total acc value
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: "400",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}>
                                        $30.00k
                                    </Typography>
                                </Stack>
                            </Grid>
                            {/* <Grid item xs={1}>
                                <Divider orientation="vertical" flexItem
                                    style={{ width: 1, height: 100 }} />
                            </Grid> */}
                            <Grid item xs={3} style={{ display: 'flex', height: "100px", justifyContent: 'center', alignItems: 'center' }}>
                                <Stack alignItems={'center'} justifyContent={'center'}>
                                    <Typography sx={{
                                        fontWeight: "400",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}>
                                        Total acc value
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: "400",
                                        fontSize: "14px",
                                        fontStyle: "normal",
                                        fontFamily: "'Poppins', sans-serif"
                                    }}>
                                        $30.00k
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>

                    </Card>
                    <Grid item xs={12} pt={8}>
                        <Stack direction={'row'} spacing={2} justifyContent={'end'}>

                            <FormControl>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>All Markets</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>Liquidity</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>

                            </FormControl>
                            <FormControl>
                                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>Open </em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>

                            </FormControl>
                        </Stack>

                    </Grid>
                    <Grid item xs={12} pt={3}>
                        <Paper
                            component="form"
                            sx={{ display: 'flex', height: "40px", alignItems: 'center', border: "1px solid #C4C4C4" }}>
                            {/* <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton> */}
                            <InputBase
                                sx={{ ml: 1, flex: 1, paddingRight: "0px" }}
                                placeholder="Search Markets"
                                inputProps={{ 'aria-label': 'search google maps' }} />
                            <Button variant='contained' sx={{
                                background: "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                height: "40px",
                                color: "#fff",
                                fontWeight: "400",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontFamily: "'Poppins', sans-serif",
                                borderRadius: 1,
                                fontWeight: "bold",
                                textTransform: "none"
                            }}>Search</Button>
                        </Paper>
                    </Grid>
                </Grid>
                {/* <Grid container spacing={3} sx={{ pt: 7 }}>
                    <Grid item xs={12} md={3}>
                        <Card>

                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Stack direction={"row"} spacing={2} display={"flex"} alignItems={"center"}>
                                            <TuneIcon />
                                            <Typography fontFamily={'Droid Sans'} fontWeight={400} fontSize={"24px"}>Fillter</Typography>
                                        </Stack>
                                    </AccordionSummary>
                                    <AccordionDetails>

                                        <Accordion className={classes.hideBorder}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography fontFamily={'Droid Sans'} fontWeight={400} fontSize={"24px"}>All Markets</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Arts</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Business</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Chees</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Coronavirus</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Crypto </Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Global Politics</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}> NFTs</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}> Pop Culture</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Scicence</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Sports</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Tech</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>US  Current Affairs</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Ukraine & Russia</Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2a-content"
                                                id="panel2a-header">
                                                <Typography fontFamily={'Droid Sans'} fontWeight={400} fontSize={"24px"}>Liquidity</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Volume</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Liquidity</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Newest</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Expiring</Typography>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Competitive</Typography>
                                            </AccordionDetails>

                                        </Accordion>
                                        <Accordion sx={{ border: 'none' }} >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel3a-content"
                                                id="panel3a-header"
                                            >
                                                <Typography fontFamily={'Droid Sans'} fontWeight={400} fontSize={"24px"}>Open</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography style={{ fontFamily: "'Domine', serif" }} color="#8E8E8E" fontWeight={400} fontSize={"18px"}>Resolved</Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Card sx={{ p: { xs: 2, md: 4 }, borderRadius: "8px" }} onClick={() => navigate('/detail')}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container alignItems={"center"}>
                                        <Grid item xs={3}>
                                            <Stack direction={"row"} alignItems="center " spacing={{ xs: 1, md: 2 }}>
                                                <Avatar src={Eth} sx={{ width: { xs: 30, md: "73px" }, height: { xs: 30, md: "73px" } }}
                                                />
                                                <Typography sx={{ fontSize: { xs: 20, md: "32px" } }} fontWeight={700}>ETH</Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid xs={9} >
                                            <Typography color="#007DEC" textAlign={"end"}>Add Liquidity to earn fess</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ pt: 2 }}>
                                        <Typography fontWeight={400} fontSize="22px">When will Ethereum Merge to Proof-of-Stake?</Typography>
                                        <Typography color="#8E8E8E" fontWeight={400} fontSize="18px">End time: Jan 8, 2022 at 2:00 AM GMT + 5</Typography>
                                    </Grid>
                                    <Divider sx={{ pt: 2 }} />
                                </Grid>
                                <Grid container sx={{ pt: 2 }}>
                                    <Grid item xs={12} md={6}>
                                        <Stack direction={"row"} justifyContent={"space-between"}>
                                            <Stack>
                                                <Typography color="#9FA2AF">Volume</Typography>
                                                <Typography>$688,640.53</Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography color="#9FA2AF" textAlign={"center"}>Yes</Typography>
                                                <Typography textAlign={"center"}>$0.13</Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography color="#9FA2AF">Yes</Typography>
                                                <Typography>$0.87</Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "end", justifyContent: { xs: "start", md: "end" } }}>
                                        <Typography textAlign={{ xs: "start", md: "end" }} sx={{ pt: { xs: 3, md: "" } }} color={"#8E8E8E"}>Liquidity:<span style={{ color: "#000" }}>$0.00</span></Typography>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Divider sx={{ pt: 2 }} />
                                        <Grid container sx={{ pt: 2 }} spacing={2}  >
                                            <Stack direction={"row"} spacing={2} sx={{ pt: 2, pl: 3 }}>
                                                <Stack direction={"row"} spacing={1}>
                                                    <Stack>
                                                        <img height={"21px"} width={"21px"} src={comment} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ fontSize: "12px" }}>68 comment</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"}>
                                                    <Stack>
                                                        <img height={"18px"} width={"18px"} src={share} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>share</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"}>
                                                    <Stack>
                                                        <img height={"16px"} width={"12px"} src={save} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>save</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ pt: 2 }} />

                                <Grid xs={12} sx={{ py: 3 }}>
                                    <Stack direction={"row"} spacing={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <Avatar sx={{ width: { xs: 38, md: "44px" }, height: { xs: 38, md: "44px" } }}></Avatar>
                                        <BootstrapInput sx={{ width: { xs: 'auto', md: 700 }, height: "33px" }} placeholder="Write your comment..." id="bootstrap-input" />
                                    </Stack>
                                </Grid>
                                <Grid xs={12}>
                                    <Grid container >
                                        <Grid xs={12} >
                                            <Stack direction={"row"} alignItems="center" spacing={2}>
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src={girl}
                                                    sx={{ width: { xs: 38, md: 52 }, height: { xs: 38, md: 52 } }} />
                                                <Stack>
                                                    <Typography color="#9FA2AF" fontSize={"14px"}>HeMaNsHuJ 6 hr. ago</Typography>
                                                    <Typography fontSize={"12px"}>Photographer</Typography>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                        <Grid xs={12}>
                                            <Grid container sx={{ display: "flex", justifyContent: "center" }} >
                                                <Grid xs={10} sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}>
                                                    <Typography style={{ fontFamily: "'Ysabeau Office', sans-serif" }} fontSize={"14px"} color="#7D7D7D">Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
                                                </Grid>
                                                <Grid xs={10} sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}>
                                                    <Stack direction={"row"} spacing={2}>
                                                        <Stack direction={"row"} spacing={1}>
                                                            <Stack>
                                                                <img height={"17px"} width={"17px"} src={like} />
                                                            </Stack>
                                                            <Stack>
                                                                <Typography color={"#9FA2AF"} sx={{ fontSize: "12px" }}>Like</Typography>
                                                            </Stack>
                                                        </Stack>
                                                        <Stack direction={"row"}>
                                                            <Stack>
                                                                <img height={"18px"} width={"18px"} src={comment} />
                                                            </Stack>
                                                            <Stack>
                                                                <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>Replay</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Stack>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                        <Card sx={{ p: { xs: 2, md: 4 }, borderRadius: "8px", mt: 5 }} onClick={() => navigate('/detail')}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container alignItems={"center"}>
                                        <Grid item xs={3}>
                                            <Stack direction={"row"} alignItems="center " spacing={{ xs: 1, md: 2 }}>
                                                <Avatar src={Eth} sx={{ width: { xs: 30, md: "73px" }, height: { xs: 30, md: "73px" } }}
                                                />
                                                <Typography sx={{ fontSize: { xs: 20, md: "32px" } }} fontWeight={700}>ETH</Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid xs={9} >
                                            <Typography color="#007DEC" textAlign={"end"}>Add Liquidity to earn fess</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ pt: 2 }}>
                                        <Typography fontWeight={400} fontSize="22px">When will Ethereum Merge to Proof-of-Stake?</Typography>
                                        <Typography color="#8E8E8E" fontWeight={400} fontSize="18px">End time: Jan 8, 2022 at 2:00 AM GMT + 5</Typography>
                                    </Grid>
                                    <Divider sx={{ pt: 2 }} />
                                </Grid>
                                <Grid container sx={{ pt: 2 }}>
                                    <Grid item xs={12} md={6}>
                                        <Stack direction={"row"} justifyContent={"space-between"}>
                                            <Stack>
                                                <Typography color="#9FA2AF">Volume</Typography>
                                                <Typography>$688,640.53</Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography color="#9FA2AF" textAlign={"center"}>Yes</Typography>
                                                <Typography textAlign={"center"}>$0.13</Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography color="#9FA2AF">Yes</Typography>
                                                <Typography>$0.87</Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "end", justifyContent: { xs: "start", md: "end" } }}>
                                        <Typography textAlign={{ xs: "start", md: "end" }} sx={{ pt: { xs: 3, md: "" } }} color={"#8E8E8E"}>Liquidity:<span style={{ color: "#000" }}>$0.00</span></Typography>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Divider sx={{ pt: 2 }} />
                                        <Grid container sx={{ pt: 2 }} spacing={2}  >
                                            <Stack direction={"row"} spacing={2} sx={{ pt: 2, pl: 3 }}>
                                                <Stack direction={"row"} spacing={1}>
                                                    <Stack>
                                                        <img height={"21px"} width={"21px"} src={comment} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ fontSize: "12px" }}>68 comment</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"}>
                                                    <Stack>
                                                        <img height={"18px"} width={"18px"} src={share} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>share</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"}>
                                                    <Stack>
                                                        <img height={"16px"} width={"12px"} src={save} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>save</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ pt: 2 }} />

                                <Grid xs={12} sx={{ py: 3 }}>
                                    <Stack direction={"row"} spacing={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <Avatar sx={{ width: { xs: 38, md: "44px" }, height: { xs: 38, md: "44px" } }}></Avatar>
                                        <BootstrapInput sx={{ width: { xs: 'auto', md: 700 }, height: "33px" }} placeholder="Write your comment..." id="bootstrap-input" />
                                    </Stack>
                                </Grid>
                                <Grid xs={12}>
                                    <Grid container >
                                        <Grid xs={12} >
                                            <Stack direction={"row"} alignItems="center" spacing={2}>
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src={girl}
                                                    sx={{ width: { xs: 38, md: 52 }, height: { xs: 38, md: 52 } }} />
                                                <Stack>
                                                    <Typography color="#9FA2AF" fontSize={"14px"}>HeMaNsHuJ 6 hr. ago</Typography>
                                                    <Typography fontSize={"12px"}>Photographer</Typography>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                        <Grid xs={12}>
                                            <Grid container sx={{ display: "flex", justifyContent: "center" }} >
                                                <Grid xs={10} sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}>
                                                    <Typography style={{ fontFamily: "'Ysabeau Office', sans-serif" }} fontSize={"14px"} color="#7D7D7D">Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
                                                </Grid>
                                                <Grid xs={10} sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}>
                                                    <Stack direction={"row"} spacing={2}>
                                                        <Stack direction={"row"} spacing={1}>
                                                            <Stack>
                                                                <img height={"17px"} width={"17px"} src={like} />
                                                            </Stack>
                                                            <Stack>
                                                                <Typography color={"#9FA2AF"} sx={{ fontSize: "12px" }}>Like</Typography>
                                                            </Stack>
                                                        </Stack>
                                                        <Stack direction={"row"}>
                                                            <Stack>
                                                                <img height={"18px"} width={"18px"} src={comment} />
                                                            </Stack>
                                                            <Stack>
                                                                <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>Replay</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Stack>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                        <Card sx={{ p: { xs: 2, md: 4 }, borderRadius: "8px", mt: 5 }} onClick={() => navigate('/detail')}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container alignItems={"center"}>
                                        <Grid item xs={3}>
                                            <Stack direction={"row"} alignItems="center " spacing={{ xs: 1, md: 2 }}>
                                                <Avatar src={coin} sx={{ width: { xs: 30, md: "73px" }, height: { xs: 30, md: "73px" } }}
                                                />
                                                <Typography sx={{ fontSize: { xs: 20, md: "32px" } }} fontWeight={700}>BNB</Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid xs={9} >
                                            <Typography color="#007DEC" textAlign={"end"}>Add Liquidity to earn fess</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ pt: 2 }}>
                                        <Typography fontWeight={400} fontSize="22px">When will Ethereum Merge to Proof-of-Stake?</Typography>
                                        <Typography color="#8E8E8E" fontWeight={400} fontSize="18px">End time: Jan 8, 2022 at 2:00 AM GMT + 5</Typography>
                                    </Grid>
                                    <Divider sx={{ pt: 2 }} />
                                </Grid>
                                <Grid container sx={{ pt: 2 }}>
                                    <Grid item xs={12} md={6}>
                                        <Stack direction={"row"} justifyContent={"space-between"}>
                                            <Stack>
                                                <Typography color="#9FA2AF">Volume</Typography>
                                                <Typography>$688,640.53</Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography color="#9FA2AF" textAlign={"center"}>Yes</Typography>
                                                <Typography textAlign={"center"}>$0.13</Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography color="#9FA2AF">Yes</Typography>
                                                <Typography>$0.87</Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "end", justifyContent: { xs: "start", md: "end" } }}>
                                        <Typography textAlign={{ xs: "start", md: "end" }} sx={{ pt: { xs: 3, md: "" } }} color={"#8E8E8E"}>Liquidity:<span style={{ color: "#000" }}>$0.00</span></Typography>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Divider sx={{ pt: 2 }} />
                                        <Grid container sx={{ pt: 2 }} spacing={2}  >
                                            <Stack direction={"row"} spacing={2} sx={{ pt: 2, pl: 3 }}>
                                                <Stack direction={"row"} spacing={1}>
                                                    <Stack>
                                                        <img height={"21px"} width={"21px"} src={comment} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ fontSize: "12px" }}>68 comment</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"}>
                                                    <Stack>
                                                        <img height={"18px"} width={"18px"} src={share} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>share</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"}>
                                                    <Stack>
                                                        <img height={"16px"} width={"12px"} src={save} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>save</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ pt: 2 }} />

                                <Grid xs={12} sx={{ py: 3 }}>
                                    <Stack direction={"row"} spacing={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <Avatar sx={{ width: { xs: 38, md: "44px" }, height: { xs: 38, md: "44px" } }}></Avatar>
                                        <BootstrapInput sx={{ width: { xs: 'auto', md: 700 }, height: "33px" }} placeholder="Write your comment..." id="bootstrap-input" />
                                    </Stack>
                                </Grid>
                                <Grid xs={12}>
                                    <Grid container >
                                        <Grid xs={12} >
                                            <Stack direction={"row"} alignItems="center" spacing={2}>
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src={girl}
                                                    sx={{ width: { xs: 38, md: 52 }, height: { xs: 38, md: 52 } }} />
                                                <Stack>
                                                    <Typography color="#9FA2AF" fontSize={"14px"}>HeMaNsHuJ 6 hr. ago</Typography>
                                                    <Typography fontSize={"12px"}>Photographer</Typography>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                        <Grid xs={12}>
                                            <Grid container sx={{ display: "flex", justifyContent: "center" }} >
                                                <Grid xs={10} sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}>
                                                    <Typography style={{ fontFamily: "'Ysabeau Office', sans-serif" }} fontSize={"14px"} color="#7D7D7D">Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
                                                </Grid>
                                                <Grid xs={10} sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}>
                                                    <Stack direction={"row"} spacing={2}>
                                                        <Stack direction={"row"} spacing={1}>
                                                            <Stack>
                                                                <img height={"17px"} width={"17px"} src={like} />
                                                            </Stack>
                                                            <Stack>
                                                                <Typography color={"#9FA2AF"} sx={{ fontSize: "12px" }}>Like</Typography>
                                                            </Stack>
                                                        </Stack>
                                                        <Stack direction={"row"}>
                                                            <Stack>
                                                                <img height={"18px"} width={"18px"} src={comment} />
                                                            </Stack>
                                                            <Stack>
                                                                <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>Replay</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Stack>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                        <Card sx={{ p: { xs: 2, md: 4 }, borderRadius: "8px", mt: 5 }} onClick={() => navigate('/detail')}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container alignItems={"center"}>
                                        <Grid item xs={3}>
                                            <Stack direction={"row"} alignItems="center " spacing={{ xs: 1, md: 2 }}>
                                                <Avatar src={eth1} sx={{ width: { xs: 30, md: "70px" }, height: { xs: 25, md: "60px" } }}
                                                />
                                                <Typography sx={{ fontSize: { xs: 20, md: "32px" } }} fontWeight={700}>ETH</Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid xs={9} >
                                            <Typography color="#007DEC" textAlign={"end"}>Add Liquidity to earn fess</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ pt: 2 }}>
                                        <Typography fontWeight={400} fontSize="22px">When will Ethereum Merge to Proof-of-Stake?</Typography>
                                        <Typography color="#8E8E8E" fontWeight={400} fontSize="18px">End time: Jan 8, 2022 at 2:00 AM GMT + 5</Typography>
                                    </Grid>
                                    <Divider sx={{ pt: 2 }} />
                                </Grid>
                                <Grid container sx={{ pt: 2 }}>
                                    <Grid item xs={12} md={6}>
                                        <Stack direction={"row"} justifyContent={"space-between"}>
                                            <Stack>
                                                <Typography color="#9FA2AF">Volume</Typography>
                                                <Typography>$688,640.53</Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography color="#9FA2AF" textAlign={"center"}>Yes</Typography>
                                                <Typography textAlign={"center"}>$0.13</Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography color="#9FA2AF">Yes</Typography>
                                                <Typography>$0.87</Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "end", justifyContent: { xs: "start", md: "end" } }}>
                                        <Typography textAlign={{ xs: "start", md: "end" }} sx={{ pt: { xs: 3, md: "" } }} color={"#8E8E8E"}>Liquidity:<span style={{ color: "#000" }}>$0.00</span></Typography>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Divider sx={{ pt: 2 }} />
                                        <Grid container sx={{ pt: 2 }} spacing={2}  >
                                            <Stack direction={"row"} spacing={2} sx={{ pt: 2, pl: 3 }}>
                                                <Stack direction={"row"} spacing={1}>
                                                    <Stack>
                                                        <img height={"21px"} width={"21px"} src={comment} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ fontSize: "12px" }}>68 comment</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"}>
                                                    <Stack>
                                                        <img height={"18px"} width={"18px"} src={share} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>share</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"}>
                                                    <Stack>
                                                        <img height={"16px"} width={"12px"} src={save} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>save</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ pt: 2 }} />

                                <Grid xs={12} sx={{ py: 3 }}>
                                    <Stack direction={"row"} spacing={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <Avatar sx={{ width: { xs: 38, md: "44px" }, height: { xs: 38, md: "44px" } }}></Avatar>
                                        <BootstrapInput sx={{ width: { xs: 'auto', md: 700 }, height: "33px" }} placeholder="Write your comment..." id="bootstrap-input" />
                                    </Stack>
                                </Grid>
                                <Grid xs={12}>
                                    <Grid container >
                                        <Grid xs={12} >
                                            <Stack direction={"row"} alignItems="center" spacing={2}>
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src={girl}
                                                    sx={{ width: { xs: 38, md: 52 }, height: { xs: 38, md: 52 } }} />
                                                <Stack>
                                                    <Typography color="#9FA2AF" fontSize={"14px"}>HeMaNsHuJ 6 hr. ago</Typography>
                                                    <Typography fontSize={"12px"}>Photographer</Typography>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                        <Grid xs={12}>
                                            <Grid container sx={{ display: "flex", justifyContent: "center" }} >
                                                <Grid xs={10} sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}>
                                                    <Typography style={{ fontFamily: "'Ysabeau Office', sans-serif" }} fontSize={"14px"} color="#7D7D7D">Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
                                                </Grid>
                                                <Grid xs={10} sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}>
                                                    <Stack direction={"row"} spacing={2}>
                                                        <Stack direction={"row"} spacing={1}>
                                                            <Stack>
                                                                <img height={"17px"} width={"17px"} src={like} />
                                                            </Stack>
                                                            <Stack>
                                                                <Typography color={"#9FA2AF"} sx={{ fontSize: "12px" }}>Like</Typography>
                                                            </Stack>
                                                        </Stack>
                                                        <Stack direction={"row"}>
                                                            <Stack>
                                                                <img height={"18px"} width={"18px"} src={comment} />
                                                            </Stack>
                                                            <Stack>
                                                                <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>Replay</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Stack>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                        <Card sx={{ p: { xs: 2, md: 4 }, borderRadius: "8px", mt: 5 }} onClick={() => navigate('/detail')}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container alignItems={"center"}>
                                        <Grid item xs={3}>
                                            <Stack direction={"row"} alignItems="center " spacing={{ xs: 1, md: 2 }}>
                                                <Avatar src={eth1} sx={{ width: { xs: 30, md: "70px" }, height: { xs: 25, md: "60px" } }}
                                                />
                                                <Typography sx={{ fontSize: { xs: 20, md: "32px" } }} fontWeight={700}>ETH</Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid xs={9} >
                                            <Typography color="#007DEC" textAlign={"end"}>Add Liquidity to earn fess</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid sx={{ pt: 2 }}>
                                        <Typography fontWeight={400} fontSize="22px">When will Ethereum Merge to Proof-of-Stake?</Typography>
                                        <Typography color="#8E8E8E" fontWeight={400} fontSize="18px">End time: Jan 8, 2022 at 2:00 AM GMT + 5</Typography>
                                    </Grid>
                                    <Divider sx={{ pt: 2 }} />
                                </Grid>
                                <Grid container sx={{ pt: 2 }}>
                                    <Grid item xs={12} md={6}>
                                        <Stack direction={"row"} justifyContent={"space-between"}>
                                            <Stack>
                                                <Typography color="#9FA2AF">Volume</Typography>
                                                <Typography>$688,640.53</Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography color="#9FA2AF" textAlign={"center"}>Yes</Typography>
                                                <Typography textAlign={"center"}>$0.13</Typography>
                                            </Stack>
                                            <Stack>
                                                <Typography color="#9FA2AF">Yes</Typography>
                                                <Typography>$0.87</Typography>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "end", justifyContent: { xs: "start", md: "end" } }}>
                                        <Typography textAlign={{ xs: "start", md: "end" }} sx={{ pt: { xs: 3, md: "" } }} color={"#8E8E8E"}>Liquidity:<span style={{ color: "#000" }}>$0.00</span></Typography>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Divider sx={{ pt: 2 }} />
                                        <Grid container sx={{ pt: 2 }} spacing={2}  >
                                            <Stack direction={"row"} spacing={2} sx={{ pt: 2, pl: 3 }}>
                                                <Stack direction={"row"} spacing={1}>
                                                    <Stack>
                                                        <img height={"21px"} width={"21px"} src={comment} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ fontSize: "12px" }}>68 comment</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"}>
                                                    <Stack>
                                                        <img height={"18px"} width={"18px"} src={share} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>share</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack direction={"row"}>
                                                    <Stack>
                                                        <img height={"16px"} width={"12px"} src={save} />
                                                    </Stack>
                                                    <Stack>
                                                        <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>save</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ pt: 2 }} />

                                <Grid xs={12} sx={{ py: 3 }}>
                                    <Stack direction={"row"} spacing={2} sx={{ display: "flex", alignItems: "center" }}>
                                        <Avatar sx={{ width: { xs: 38, md: "44px" }, height: { xs: 38, md: "44px" } }}></Avatar>
                                        <BootstrapInput sx={{ width: { xs: 'auto', md: 700 }, height: "33px" }} placeholder="Write your comment..." id="bootstrap-input" />
                                    </Stack>
                                </Grid>
                                <Grid xs={12}>
                                    <Grid container >
                                        <Grid xs={12} >
                                            <Stack direction={"row"} alignItems="center" spacing={2}>
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src={girl}
                                                    sx={{ width: { xs: 38, md: 52 }, height: { xs: 38, md: 52 } }} />
                                                <Stack>
                                                    <Typography color="#9FA2AF" fontSize={"14px"}>HeMaNsHuJ 6 hr. ago</Typography>
                                                    <Typography fontSize={"12px"}>Photographer</Typography>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                        <Grid xs={12}>
                                            <Grid container sx={{ display: "flex", justifyContent: "center" }} >
                                                <Grid xs={10} sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}>
                                                    <Typography style={{ fontFamily: "'Ysabeau Office', sans-serif" }} fontSize={"14px"} color="#7D7D7D">Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
                                                </Grid>
                                                <Grid xs={10} sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}>
                                                    <Stack direction={"row"} spacing={2}>
                                                        <Stack direction={"row"} spacing={1}>
                                                            <Stack>
                                                                <img height={"17px"} width={"17px"} src={like} />
                                                            </Stack>
                                                            <Stack>
                                                                <Typography color={"#9FA2AF"} sx={{ fontSize: "12px" }}>Like</Typography>
                                                            </Stack>
                                                        </Stack>
                                                        <Stack direction={"row"}>
                                                            <Stack>
                                                                <img height={"18px"} width={"18px"} src={comment} />
                                                            </Stack>
                                                            <Stack>
                                                                <Typography color={"#9FA2AF"} sx={{ pl: 1, fontSize: "12px" }}>Replay</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Stack>

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid> */}
                <Grid container padding={1} spacing={2} sx={{
                    pt: 3,
                }}>
                    <Grid item sm={12} md={4}>
                        <Card>
                            <Grid container padding={2}>
                                <Grid item xs={12}>
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Stack direction={"row"} alignItems="center " spacing={{ xs: 1, md: 2 }}>
                                            <Avatar src={Eth} sx={{ width: { xs: 30, md: "33px" }, height: { xs: 30, md: "33px" } }}
                                            />
                                            <Box sx={{
                                                border: '1px solid lightgray',
                                                borderRadius: "5px",
                                                padding: '2px'
                                            }}>
                                                <Typography sx={{
                                                    fontSize: { xs: 20, md: "15px" }, fontFamily: "'Poppins', sans-serif",
                                                }} fontWeight={400}>ETH</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack>
                                            <Button variant='contained'
                                                sx={{
                                                    borderRadius: "50px",
                                                    color: "#ffffff",
                                                    border: "1px solid #5147CE",
                                                    height: "25px",
                                                    textTransform: 'none',
                                                    maxWidth: '200px',
                                                    textOverflow: 'ellipsis',
                                                    overflow: 'hidden',
                                                    fontFamily: "'Poppins', sans-serif",
                                                    whiteSpace: 'nowrap',
                                                    fontSize: "12px",
                                                    background: "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                                    // display: { xs: 'none', md: 'flex' }
                                                }}
                                            >Add liquidity to earn fees</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack mt={3}>
                                        <Typography sx={{
                                            fontWeight: "400",
                                            fontSize: "14px",
                                            fontStyle: "normal",
                                            fontFamily: "'Poppins', sans-serif"
                                        }} >
                                            Which Team will win?
                                        </Typography>
                                        <Typography sx={{
                                            fontWeight: "400",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            fontFamily: "'Poppins', sans-serif"
                                        }} >
                                            DET vs NYJ
                                        </Typography>
                                        <Typography sx={{
                                            fontWeight: "300",
                                            fontSize: "13px",
                                            fontStyle: "normal",
                                            fontFamily: "'Poppins', sans-serif",
                                            color: "#858383"
                                        }} >
                                            DEC 18, 2022 10:00 AM (PST)
                                        </Typography>
                                    </Stack>
                                </Grid>

                                <Grid container mt={4}>
                                    <Grid item xs={4}>
                                        <Stack alignItems={'center'}>
                                            <Typography sx={{
                                                fontWeight: "300",
                                                fontSize: "12px",
                                                fontStyle: "normal",
                                                fontFamily: "'Poppins', sans-serif",
                                                color: "#858383"
                                            }}>
                                                Total Volume
                                            </Typography>
                                            <Typography sx={{
                                                fontStyle: "normal",
                                                color: "#858383"
                                            }}>
                                                -
                                            </Typography>
                                            <Typography sx={{
                                                fontWeight: "300",
                                                fontSize: "12px",
                                                fontStyle: "normal",
                                                fontFamily: "'Poppins', sans-serif",
                                                color: "#858383"
                                            }}>
                                                Total Volume
                                            </Typography>
                                            <Typography sx={{
                                                fontStyle: "normal",
                                                color: "#858383"
                                            }}>
                                                -
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Box sx={{
                                            border: "1px solid #858383",
                                            borderRadius: "5px",
                                        }}>
                                            <Stack direction={'row'} padding={1} alignItems={'center'} justifyContent={'space-between'}>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "14px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>det</Typography>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "12px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>-</Typography>
                                            </Stack>
                                            <Divider sx={{
                                                color: "#858383",
                                                borderWidth: '1px'
                                            }} />
                                            <Stack direction={'row'} padding={1} alignItems={'center'} justifyContent={'space-between'}>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "14px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>det</Typography>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "12px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>-</Typography>
                                            </Stack>
                                            <Divider sx={{
                                                color: "#858383",
                                                borderWidth: '1px'
                                            }} />
                                            <Stack direction={'row'} padding={1} alignItems={'center'} justifyContent={'space-between'}>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "14px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>det</Typography>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "12px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>-</Typography>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Card>
                            <Grid container padding={2}>
                                <Grid item xs={12}>
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Stack direction={"row"} alignItems="center " spacing={{ xs: 1, md: 2 }}>
                                            <Avatar src={Eth} sx={{ width: { xs: 30, md: "33px" }, height: { xs: 30, md: "33px" } }}
                                            />
                                            <Box sx={{
                                                border: '1px solid lightgray',
                                                borderRadius: "5px",
                                                padding: '2px'
                                            }}>
                                                <Typography sx={{
                                                    fontSize: { xs: 20, md: "15px" }, fontFamily: "'Poppins', sans-serif",
                                                }} fontWeight={400}>ETH</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack>
                                            <Button variant='contained'
                                                sx={{
                                                    borderRadius: "50px",
                                                    color: "#ffffff",
                                                    border: "1px solid #5147CE",
                                                    height: "25px",
                                                    textTransform: 'none',
                                                    maxWidth: '200px',
                                                    textOverflow: 'ellipsis',
                                                    overflow: 'hidden',
                                                    fontFamily: "'Poppins', sans-serif",
                                                    whiteSpace: 'nowrap',
                                                    fontSize: "12px",
                                                    background: "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                                    // display: { xs: 'none', md: 'flex' }
                                                }}
                                            >Add liquidity to earn fees</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack mt={3}>
                                        <Typography sx={{
                                            fontWeight: "400",
                                            fontSize: "14px",
                                            fontStyle: "normal",
                                            fontFamily: "'Poppins', sans-serif"
                                        }} >
                                            Which Team will win?
                                        </Typography>
                                        <Typography sx={{
                                            fontWeight: "400",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            fontFamily: "'Poppins', sans-serif"
                                        }} >
                                            DET vs NYJ
                                        </Typography>
                                        <Typography sx={{
                                            fontWeight: "300",
                                            fontSize: "13px",
                                            fontStyle: "normal",
                                            fontFamily: "'Poppins', sans-serif",
                                            color: "#858383"
                                        }} >
                                            DEC 18, 2022 10:00 AM (PST)
                                        </Typography>
                                    </Stack>
                                </Grid>

                                <Grid container mt={4}>
                                    <Grid item xs={4}>
                                        <Stack alignItems={'center'}>
                                            <Typography sx={{
                                                fontWeight: "300",
                                                fontSize: "12px",
                                                fontStyle: "normal",
                                                fontFamily: "'Poppins', sans-serif",
                                                color: "#858383"
                                            }}>
                                                Total Volume
                                            </Typography>
                                            <Typography sx={{
                                                fontStyle: "normal",
                                                color: "#858383"
                                            }}>
                                                -
                                            </Typography>
                                            <Typography sx={{
                                                fontWeight: "300",
                                                fontSize: "12px",
                                                fontStyle: "normal",
                                                fontFamily: "'Poppins', sans-serif",
                                                color: "#858383"
                                            }}>
                                                Total Volume
                                            </Typography>
                                            <Typography sx={{
                                                fontStyle: "normal",
                                                color: "#858383"
                                            }}>
                                                -
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Box sx={{
                                            border: "1px solid #858383",
                                            borderRadius: "5px",
                                        }}>
                                            <Stack direction={'row'} padding={1} alignItems={'center'} justifyContent={'space-between'}>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "14px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>det</Typography>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "12px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>-</Typography>
                                            </Stack>
                                            <Divider sx={{
                                                color: "#858383",
                                                borderWidth: '1px'
                                            }} />
                                            <Stack direction={'row'} padding={1} alignItems={'center'} justifyContent={'space-between'}>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "14px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>det</Typography>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "12px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>-</Typography>
                                            </Stack>
                                            <Divider sx={{
                                                color: "#858383",
                                                borderWidth: '1px'
                                            }} />
                                            <Stack direction={'row'} padding={1} alignItems={'center'} justifyContent={'space-between'}>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "14px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>det</Typography>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "12px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>-</Typography>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Card>
                            <Grid container padding={2}>
                                <Grid item xs={12}>
                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                        <Stack direction={"row"} alignItems="center " spacing={{ xs: 1, md: 2 }}>
                                            <Avatar src={Eth} sx={{ width: { xs: 30, md: "33px" }, height: { xs: 30, md: "33px" } }}
                                            />
                                            <Box sx={{
                                                border: '1px solid lightgray',
                                                borderRadius: "5px",
                                                padding: '2px'
                                            }}>
                                                <Typography sx={{
                                                    fontSize: { xs: 20, md: "15px" }, fontFamily: "'Poppins', sans-serif",
                                                }} fontWeight={400}>ETH</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack>
                                            <Button variant='contained'
                                                sx={{
                                                    borderRadius: "50px",
                                                    color: "#ffffff",
                                                    border: "1px solid #5147CE",
                                                    height: "25px",
                                                    textTransform: 'none',
                                                    maxWidth: '200px',
                                                    textOverflow: 'ellipsis',
                                                    overflow: 'hidden',
                                                    fontFamily: "'Poppins', sans-serif",
                                                    whiteSpace: 'nowrap',
                                                    fontSize: "12px",
                                                    background: "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                                    // display: { xs: 'none', md: 'flex' }
                                                }}
                                            >Add liquidity to earn fees</Button>
                                        </Stack>
                                    </Stack>
                                    <Stack mt={3}>
                                        <Typography sx={{
                                            fontWeight: "400",
                                            fontSize: "14px",
                                            fontStyle: "normal",
                                            fontFamily: "'Poppins', sans-serif"
                                        }} >
                                            Which Team will win?
                                        </Typography>
                                        <Typography sx={{
                                            fontWeight: "400",
                                            fontSize: "15px",
                                            fontStyle: "normal",
                                            fontFamily: "'Poppins', sans-serif"
                                        }} >
                                            DET vs NYJ
                                        </Typography>
                                        <Typography sx={{
                                            fontWeight: "300",
                                            fontSize: "13px",
                                            fontStyle: "normal",
                                            fontFamily: "'Poppins', sans-serif",
                                            color: "#858383"
                                        }} >
                                            DEC 18, 2022 10:00 AM (PST)
                                        </Typography>
                                    </Stack>
                                </Grid>

                                <Grid container mt={4}>
                                    <Grid item xs={4}>
                                        <Stack alignItems={'center'}>
                                            <Typography sx={{
                                                fontWeight: "300",
                                                fontSize: "12px",
                                                fontStyle: "normal",
                                                fontFamily: "'Poppins', sans-serif",
                                                color: "#858383"
                                            }}>
                                                Total Volume
                                            </Typography>
                                            <Typography sx={{
                                                fontStyle: "normal",
                                                color: "#858383"
                                            }}>
                                                -
                                            </Typography>
                                            <Typography sx={{
                                                fontWeight: "300",
                                                fontSize: "12px",
                                                fontStyle: "normal",
                                                fontFamily: "'Poppins', sans-serif",
                                                color: "#858383"
                                            }}>
                                                Total Volume
                                            </Typography>
                                            <Typography sx={{
                                                fontStyle: "normal",
                                                color: "#858383"
                                            }}>
                                                -
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Box sx={{
                                            border: "1px solid #858383",
                                            borderRadius: "5px",
                                        }}>
                                            <Stack direction={'row'} padding={1} alignItems={'center'} justifyContent={'space-between'}>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "14px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>det</Typography>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "12px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>-</Typography>
                                            </Stack>
                                            <Divider sx={{
                                                color: "#858383",
                                                borderWidth: '1px'
                                            }} />
                                            <Stack direction={'row'} padding={1} alignItems={'center'} justifyContent={'space-between'}>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "14px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>det</Typography>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "12px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>-</Typography>
                                            </Stack>
                                            <Divider sx={{
                                                color: "#858383",
                                                borderWidth: '1px'
                                            }} />
                                            <Stack direction={'row'} padding={1} alignItems={'center'} justifyContent={'space-between'}>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "14px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>det</Typography>
                                                <Typography sx={{
                                                    fontWeight: "500",
                                                    fontSize: "12px",
                                                    fontStyle: "normal",
                                                    fontFamily: "'Poppins', sans-serif",
                                                    color: "#858383"
                                                }}>-</Typography>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                  
                </Grid>

            {/* </Container > */}
        </>
    )
}
