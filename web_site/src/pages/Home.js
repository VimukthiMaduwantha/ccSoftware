import React, { useEffect } from 'react'
import logo from '../images/theme.svg'
import { Box, Card, Grid, Typography } from '@mui/material'
import BackgroundImage from '../components/BackgroundImage'
import back1 from '../images/tm.jpg'
import back2 from '../images/huji23.jpg'
import menu from '../images/n.png'
import bloommark from '../images/bloommark.png'
import homeBack from '../images/homeBack.jpg'
import web from '../images/cloud.png'


function Home() {
    return (
        <>
            <div>
                <BackgroundImage />
            </div>
            <div className='section'
                style={{
                    backgroundImage: `url(${homeBack})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '140vh',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ width: { xs: '90%', md: '80%' }, padding: '10px', /* background: 'red' */ }}>
                    <center>
                        <Typography sx={{ fontSize: { md: '3vh', xs: '1.4vh' }, color: 'white', opacity: '0.9' }}>ALL BUSINESS REQUIREMENTS UNDER ONE ROOF</Typography>
                        <Typography sx={{ fontSize: { md: '5vh', xs: '2.5vh' }, color: 'white', opacity: '0.9' }}>From Product Design To Software Development</Typography>
                    </center>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <Card
                                sx={{
                                    // position: "relative",
                                    // maxWidth: 345,
                                    borderRadius: 2,
                                    height: { xs: "200px", md: "360px" },
                                }}
                            >
                                <img
                                    src={web}
                                    height='50%'
                                    width='auto'
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                />


                                <h2>web development</h2>
                            </Card>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item md={4} xs={12}>
                                    <Card
                                        sx={{
                                            // position: "relative",
                                            // maxWidth: 345,
                                            borderRadius: 2,
                                            height: { xs: "100px", md: "172px" },
                                        }}
                                    >
                                        <h2>web development</h2>
                                    </Card>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Card
                                        sx={{
                                            // position: "relative",
                                            // maxWidth: 345,
                                            borderRadius: 2,
                                            height: { xs: "100px", md: "172px" },
                                        }}
                                    >
                                        <h2>web development</h2>
                                    </Card>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Card
                                        sx={{
                                            // position: "relative",
                                            // maxWidth: 345,
                                            borderRadius: 2,
                                            height: { xs: "100px", md: "172px" },
                                        }}
                                    >
                                        <h2>web development</h2>
                                    </Card>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Card
                                        sx={{
                                            // position: "relative",
                                            // maxWidth: 345,
                                            borderRadius: 2,
                                            height: { xs: "100px", md: "172px" },
                                        }}
                                    >
                                        <h2>web development</h2>
                                    </Card>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Card
                                        sx={{
                                            // position: "relative",
                                            // maxWidth: 345,
                                            borderRadius: 2,
                                            height: { xs: "100px", md: "172px" },
                                        }}
                                    >
                                        <h2>web development</h2>
                                    </Card>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Card
                                        sx={{
                                            // position: "relative",
                                            // maxWidth: 345,
                                            borderRadius: 2,
                                            height: { xs: "100px", md: "172px" },
                                        }}
                                    >
                                        <h2>web development</h2>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div >

            <Box
                sx={{
                    height: { md: '60vh', xs: '60vh' },
                    backgroundImage: `url(${back2})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box sx={{ width: '90vw' }}>
                    <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", fontWeight: '500', fontSize: '30px' }}>Our Valued Clients..</Typography>
                    <br />
                    <Grid container spacing={1}>
                        <Grid item md={3} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box className='clientBox'
                                sx={{
                                    width: { md: '20vw', xs: '40vw' },
                                    height: { md: '10vh', xs: '6vh' },
                                    background: 'rgb(255, 255, 255)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: '0.9'
                                }}
                            >
                                <img
                                    src={menu}
                                    height='60vh'
                                    width='100vw'
                                />
                                <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontWeight: 'bold', fontSize: { md: '30px', xs: '15px' } }}>Menu</Typography>

                            </Box>
                        </Grid>
                        <Grid item md={3} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box className='clientBox'
                                sx={{
                                    width: { md: '20vw', xs: '40vw' },
                                    height: { md: '10vh', xs: '6vh' },
                                    background: 'rgb(255, 255, 255)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: '0.9'
                                }}>
                                <img
                                    src={bloommark}
                                    height='60vh'
                                    width='100vw'
                                />
                                <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontWeight: 'bold', fontSize: { md: '30px', xs: '15px' } }}>Bloommark</Typography>
                            </Box>
                        </Grid>
                        <Grid item md={3} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box className='clientBox'
                                sx={{
                                    width: { md: '20vw', xs: '40vw' },
                                    height: { md: '10vh', xs: '6vh' },
                                    background: 'rgb(255, 255, 255)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: '0.9'
                                }}>
                                <img
                                    src={menu}
                                    height='60vh'
                                    width='100vw'
                                />
                                <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontWeight: 'bold', fontSize: { md: '30px', xs: '15px' } }}>Menu</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box >
            <Box >
                <center>
                    <Box sx={{
                        height: { md: '50vh', xs: '50vh' },
                        backgroundImage: `url(${back1})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                        <div style={{ padding: '10px' }} >
                            <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", fontWeight: '500', fontSize: { md: '80px', xs: '70px' } }}>Let's Start</Typography>
                            <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", fontWeight: '700', fontSize: { md: '20px', xs: '16px' } }}>Empowering businesses through custom software solutions. Your success, our code. #CCSoftwareSolutions</Typography>
                            <br />
                            <a className="btnContact" href="/contactus">Get In Touch</a>
                        </div>
                    </Box>
                </center>
            </Box>
        </>
    )
}

export default Home