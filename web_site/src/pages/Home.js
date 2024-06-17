import React, { useEffect } from 'react'
import logo from '../images/theme.svg'
import { Box, Grid, Typography } from '@mui/material'
import BackgroundImage from '../components/BackgroundImage'
import back1 from '../images/tm.jpg'
import back2 from '../images/huji23.jpg'
import menu from '../images/n.png'
import bloommark from '../images/bloommark.png'


function Home() {
    return (
        <>
            {/* <section className='section' >
                <BackgroundImage />
            </section> */}
            <div>
                <BackgroundImage />
            </div>
            <section className='section' style={{ background: 'blue' }}>

            </section>
            <section className='section' style={{ background: 'red' }}>

            </section>
            <section className='section'>

            </section >
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
                            <a className="btnContact" href="/contactus">Contact Us</a>
                        </div>
                    </Box>
                </center>
            </Box>
        </>
    )
}

export default Home