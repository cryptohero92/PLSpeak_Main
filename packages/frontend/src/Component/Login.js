import { CardContent, Grid, Typography, Card, Divider, Button } from '@mui/material'
import React, { useState } from 'react';
import { Chip, Avatar } from '@mui/material'
import meta from "../assets/mta.jpeg"
import wallet from "../assets/wallet.png"
import c from "../assets/c.png"
import { ethers } from 'ethers';


const Connect = () => {

    const [address, setAddress] = useState('');
   console.log("address------>>>>>>>>",address)
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const connectedAddress = await signer.getAddress();
                setAddress(connectedAddress);
            } catch (error) {
                console.error(error);
            }
        } else {
            alert('Please install MetaMask or another Ethereum wallet extension');
        }
    };


    return (
        <Grid xs={12} >
            <Card style={{ boxShadow: 5, bgcolor: '#fff', borderRadius: 3, }}  >
                <CardContent>
                    <Grid container>
                        <Grid xs={12}>
                            <Typography style={{ fontWeight: 700, fontSize: "24px", textAlign: 'center', paddingBottom: 5 }} sx={{ my: 3 }} variant="h6">Connect A Wallet</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ px: 4 }}>
                        <Grid item xs={12}>
                            <Grid container justifyContent='center'>
                                <Grid style={{ paddingTop: 10 }} justifyContent="center">
                                    {address ? (
                                        <p>{address}</p>
                                    ) : (
                                        <Button
                                        onClick={connectWallet}
                                        sx={{ display: "flex", justifyContent: "space-between", px: 5, border: '1px solid grey', borderRadius: '6px', textTransform: 'none' }}
                                        variant="outlined"
                                        style={{ width: '480px', height: "58px", fontWeight: 400, fontSize: '24px', color: '#F5841F' }}
                                        endIcon={<img width={"45px"} height="38px" src={meta} />}
                                    >
                                        Meta Mask
                                    </Button> )}


                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent='center'>
                                <Grid style={{ paddingTop: 5 }} >
                                    <Button
                                        sx={{ display: "flex", justifyContent: "space-between", border: '1px solid grey', borderRadius: '6px', textTransform: 'none', px: 5 }}
                                        variant="outlined"
                                        style={{ width: '480px', height: "58px", fontWeight: 400, fontSize: '24px', color: "#3B99FC" }}
                                        endIcon={<img width={"45px"} height="27px" src={wallet} />}>
                                        Wallet Connect
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent='center'>
                                <Grid style={{ paddingTop: 5 }}>
                                    <Button
                                        sx={{ display: "flex", justifyContent: "space-between", px: 5, border: '1px solid grey', borderRadius: '6px', textTransform: 'none', mb: 4 }}
                                        variant="outlined"
                                        style={{ width: '480px', height: "58px", fontWeight: 400, fontSize: '24px', color: '#005EEC' }}
                                        endIcon={<img width={"28px"} height="33px" src={c} />}>
                                        Coinbase Wallet
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Connect