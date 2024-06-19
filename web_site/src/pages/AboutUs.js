import React from 'react'
import back1 from '../images/tm.jpg'
import { Box, Grid, Typography } from '@mui/material'
// import about from '../images/abouttt.jpg'
import about from '../images/whoAreWe.png'
import aboutUS from '../images/aboutUS.jpg'


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
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#A974D0', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Who Are We</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '40px' }, }}>Who Are We</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </Box>
            </Box >
            <br />

            <div style={{
                // backgroundImage: `url(${homeBack})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                // borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }} >
                <Box sx={{ width: { xs: '97%', md: '80%' }, padding: '10px', }}>
                    <Grid container >
                        <Grid item md={5} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src={aboutUS}
                                alt='service'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover', // or 'contain' based on your requirement
                                }}
                            />
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} item md={7} xs={12}>
                            <Box sx={{ padding: '10px' }}>
                                <center>
                                    <h1 style={{ color: 'black', opacity: '0.9' }}>Who are we </h1>
                                </center>
                                <br />
                                <center>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'left' }}>
                                        CC Software Solutions, an innovative IT company based in Sri Lanka, dedicated to empowering businesses
                                        through cutting-edge technology and strategic digital marketing. We specialize in web development, mobile app development,
                                        digital marketing,and digital product design, providing comprehensive solutions that cater to the unique needs of our clients.
                                        At CC Software Solutions, we pride ourselves on delivering next-gen software solutions and digital marketing consultancy that drive
                                        growth and success for businesses of all sizes. Our expert team leverages Sri Lanka's low-cost advantages to offer customized and
                                        cost-effective services, ensuring that our clients receive the best value for their investment.Our client-focused approach and advanced
                                        methodologies enable us to serve a diverse clientele effectively. We are committed to helping organizations and small-scale businesses
                                        thrive in today's competitive landscape through innovative software solutions and strategic digital marketing.
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'left' }}>
                                        Our strengths lie in our skilled and experienced team, who bring a wealth of expertise to every project. We understand the
                                        intricacies of digital transformation and are dedicated to providing top-notch services that meet and exceed our clients' expectations.
                                        Join us at CC Software Solutions, where we turn your vision into reality with our comprehensive and client-centric approach to digital innovation.
                                    </Typography>
                                </center>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>







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