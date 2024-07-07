import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import mobile from '../images/whiteBack.jpg'
import mobileBack from '../images/mobiledev.png'
import reactNative from '../images/science.png'
import webTik from '../images/tik.png'
import expert from '../images/expert.png'
import meeting from '../images/meeting.png'
import branding from '../images/branding.png'
import timing from '../images/fast-time.png'
import cost from '../images/reduction.png'
import back1 from '../images/tm.jpg'



function MobileDev() {
    return (
        <>
            <Box sx={{
                height: { md: 'calc(60vh - 80px)', xs: '30vh' },
                backgroundImage: `url(${mobile})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }}
                className='no-select'
            >
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '20px' }}>
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", fontWeight: '600', fontSize: { xs: '13px', md: '16px' } }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", fontWeight: '600', fontSize: { xs: '13px', md: '16px' } }}>Mobile Development</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '39px' }, }}>Mobile Development</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </Box>
            </Box >
            <br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '30px' }}>
                    <Grid container spacing={2}>
                        <Grid item md={8} xs={12}>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', fontSize: { md: '52px', xs: '30px' }, fontWeight: '500', textAlign: 'center' }}>Mobile Development</Typography>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>Smartphones have become the primary device for most people, with 90% preferring mobile apps over websites. As people spend more time on their phones, they conduct nearly all essential activities through mobile apps. Our innovative organization specializes in developing customized mobile applications, delivering clients' visions with outstanding results. Our team of creative and skilled developers excels in creating any type of mobile application.</Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img
                                    src={mobileBack}
                                    height='180px'
                                    width='auto'
                                    alt='reactJS'
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <br /><br /><br /><br />
                    <Grid container spacing={5}>
                        <Grid item md={5} xs={12}>
                            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <img
                                    src={reactNative}
                                    height='150px'
                                    width='auto'
                                    alt='reactJS'
                                />
                                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                    React, initially introduced by Facebook in 2013, extended its capabilities into mobile development with React Native. This framework enables the construction of mobile applications using JavaScript and other components, compiling code that runs seamlessly
                                    on both iOS and Android platforms. This approach simplifies the development process by leveraging a single codebase to reach a broad audience across different operating systems, making it a versatile and efficient solution for mobile app development.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item md={7} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item md={12} xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item md={1} xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={webTik}
                                            height='30px'
                                            width='auto'
                                            alt='teamWeb'
                                        />
                                    </Grid>
                                    <Grid item md={11} xs={11}>
                                        <h4>Cross-Platform Mobile Apps</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { xs: '14px', md: '16px' } }}>
                                            React Native harnesses JavaScript and React-like components to compile code into native iOS and Android technologies, allowing for the creation of cross-platform mobile apps.
                                        </Typography>
                                    </Grid>
                                    <Grid item md={1} xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={webTik}
                                            height='30px'
                                            width='auto'
                                            alt='teamWeb'
                                        />
                                    </Grid>
                                    <Grid item md={11} xs={11}>
                                        <h4>Smooth Run-Time</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { xs: '14px', md: '16px' } }}>
                                            It offers efficient runtime performance with extensive third-party plugins and diverse modules. By minimizing cross-bridge linking and optimizing code usage during runtime, it conserves memory effectively.
                                        </Typography>
                                    </Grid>
                                    <Grid item md={1} xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={webTik}
                                            height='30px'
                                            width='auto'
                                            alt='teamWeb'
                                        />
                                    </Grid>
                                    <Grid item md={11} xs={11}>
                                        <h4>High-Performing Applications</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { xs: '14px', md: '16px' } }}>
                                            Angular, a widely adopted framework for both mobile and web applications, leverages its robust features to develop high-performance mobile apps effectively.
                                        </Typography>
                                    </Grid>
                                    <Grid item md={1} xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={webTik}
                                            height='30px'
                                            width='auto'
                                            alt='teamWeb'
                                        />
                                    </Grid>
                                    <Grid item md={11} xs={11}>
                                        <h4>Cost Effective</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { xs: '14px', md: '16px' } }}>
                                            Working within tight budget constraints is crucial for clients considering mobile app development. Thankfully, React Native offers cost-efficiency, saving both time and money.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <br />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div >
            <br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '30px' }}>
                    <Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", fontWeight: '600', textAlign: 'center' }}>WE GIVE THE BEST PRODUCT</Typography>
                    <h2 style={{ color: 'black', textAlign: 'center' }}>Why You Should Build Your React Native App With Us</h2>
                    <br /><br />
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={expert}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Advanced expertise and skills</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Carefully planning and drafting technology assets.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={meeting}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Rapid team scaling capability</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Flexibility to expand team at any time.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={branding}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Native applications expertise</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Experienced in crafting Native apps.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={timing}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Quick Start</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Build the application and deliver it vary quickly.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={cost}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Cost Effective</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Build the application and deliver it vary quickly.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <br />
            <Box>
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
            </Box >
        </>
    )
}

export default MobileDev