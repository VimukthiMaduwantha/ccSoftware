import React from 'react'
import back1 from '../images/tm.jpg'
import { Box, Grid, Typography } from '@mui/material'
import about from '../images/abouttt.jpg'


function AboutUs() {
    return (
        <>
            <Box sx={{
                height: { md: 'calc(60vh - 80px)', xs: '30vh' },
                backgroundImage: `url(${about})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',

            }}
                className='no-select'
            >
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '1vw' }}>
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#A974D0', fontFamily: "Montserrat, sans-serif", opacity: '0.8', }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", opacity: '0.8', }}>About Us</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '40px' } }}>About Us</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* <Contact /> */}
                    </div>
                </Box>
            </Box>
            <br />





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

export default AboutUs