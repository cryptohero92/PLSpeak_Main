import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Bets from '../Component/Bets'
import { Fillter } from '../Component/Fillter'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Market } from '../Component/Market'
import { History } from '../Component/TradeHistory'
import { useTheme } from '@mui/material/styles';
import Profile from '../Component/Profile'
import ChatBox from './Chat'


const Home = () => {   
    const theme = useTheme();
    return (
        <>
            <Box sx={{ bgcolor: theme.palette.mode === 'dark' ? '#1c2033' : '#E5E5E5' }} >
            <Header />
            {/* <Nav/> */}
                <Box sx={{ mt: 1, }} padding={2} >
                    {/* <Bets />
                    <History /> */}
                    <Profile/>
                    {/* <Market/> */}
                    {/* <Fillter /> */}
                    {/* <ChatBox /> */}
                </Box>
            {/* <Footer /> */}
            </Box>
        </>
    )
}

export default Home