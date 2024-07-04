import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import back1 from '../images/tm.jpg'
import digital from '../images/digital.jpg'
import social from '../images/social-media.png'
import email from '../images/email.png'
import seo from '../images/seo.png'
import graphic from '../images/illustration.png'
import sheet from '../images/sheet.png'
import paid from '../images/paid-search.png'


function DIgitalMarketing() {
    return (
        <>
            <Box sx={{
                height: { md: 'calc(60vh - 80px)', xs: '30vh' },
                backgroundImage: `url(${digital})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                // borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }}
                className='no-select'
            >
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '1vw' }}>
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Digital Marketing</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '39px' }, }}>Digital Marketing</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </Box>
            </Box >
            <br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '30px' }}>
                    <Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>OUR APPROACH</Typography>
                    <Grid container spacing={5}>
                        <Grid item md={12} xs={12} >
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', fontSize: { md: '35px', xs: '39px' }, fontWeight: '500' }}>Digital Marketing</Typography>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Unlock your brand's potential with CC Software Solutions' cutting-edge digital marketing services. From SEO and content creation to social media strategy and targeted advertising,
                                we provide tailored solutions to drive traffic, increase engagement, and boost your online presence. Let us help you reach your audience and achieve your business goals in the digital age.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <div >
                                <center>
                                    <img
                                        src={social}
                                        height='80px'
                                        width='auto'
                                        alt='reactJS'
                                    />
                                    <br /><br />
                                    <h3 style={{ color: 'black', }}>Social Media Marketing</h3>
                                </center>
                            </div>
                            <div >
                                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                    Assisting you in reaching your ideal audience on your chosen social media channel.
                                </Typography>
                                <br />
                                <center>
                                    <a href="/socialMedia">
                                        <button class="cta">
                                            <span class="hover-underline-animation"> More Info </span>
                                            <svg
                                                id="arrow-horizontal"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="10"
                                                viewBox="0 0 46 16"
                                            >
                                                <path
                                                    id="Path_10"
                                                    data-name="Path 10"
                                                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                                    transform="translate(30)"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                </center>
                            </div>
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <div >
                                <center>
                                    <img
                                        src={email}
                                        height='80px'
                                        width='auto'
                                        alt='reactJS'
                                    />
                                    <br /><br />
                                    <h3 style={{ color: 'black', }}>E-Mail Marketing</h3>
                                </center>
                            </div>
                            <div >
                                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                    Boost your brand, market products or services, and strengthen customer connections through Email Marketing.
                                </Typography>
                                <br />
                                <center>
                                    <a href="/emailMarketing">
                                        <button class="cta">
                                            <span class="hover-underline-animation"> More Info </span>
                                            <svg
                                                id="arrow-horizontal"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="10"
                                                viewBox="0 0 46 16"
                                            >
                                                <path
                                                    id="Path_10"
                                                    data-name="Path 10"
                                                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                                    transform="translate(30)"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                </center>
                            </div>
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <div >
                                <center>
                                    <img
                                        src={seo}
                                        height='80px'
                                        width='auto'
                                        alt='reactJS'
                                    />
                                    <br /><br />
                                    <h3 style={{ color: 'black', }}>Search Engine Optimization</h3>
                                </center>
                            </div>
                            <div >
                                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                    Discover the optimal SEO strategy to achieve outstanding organic results for your website.
                                </Typography>
                                <br />
                                <center>
                                    <a href="/serachEngineOptimization">
                                        <button class="cta">
                                            <span class="hover-underline-animation"> More Info </span>
                                            <svg
                                                id="arrow-horizontal"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="10"
                                                viewBox="0 0 46 16"
                                            >
                                                <path
                                                    id="Path_10"
                                                    data-name="Path 10"
                                                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                                    transform="translate(30)"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                </center>
                            </div>
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <div >
                                <center>
                                    <img
                                        src={graphic}
                                        height='80px'
                                        width='auto'
                                        alt='reactJS'
                                    />
                                    <br /><br />
                                    <h3 style={{ color: 'black', }}>Graphic Designing</h3>
                                </center>
                            </div>
                            <div >
                                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                    Fulfill your graphic requirements with the expertise of our top-tier creative designers.
                                </Typography>
                                <br />
                                <center>
                                    <a href="/graphicDesign">
                                        <button class="cta">
                                            <span class="hover-underline-animation"> More Info </span>
                                            <svg
                                                id="arrow-horizontal"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="10"
                                                viewBox="0 0 46 16"
                                            >
                                                <path
                                                    id="Path_10"
                                                    data-name="Path 10"
                                                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                                    transform="translate(30)"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                </center>
                            </div>
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <div >
                                <center>
                                    <img
                                        src={sheet}
                                        height='80px'
                                        width='auto'
                                        alt='reactJS'
                                    />
                                    <br /><br />
                                    <h3 style={{ color: 'black', }}>Content Marketing</h3>
                                </center>
                            </div>
                            <div >
                                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                    We deliver the ideal content strategy with relevant and valuable content for your customer base.
                                </Typography>
                                <br />
                                <center>
                                    <a href="/contentMarketing">
                                        <button class="cta">
                                            <span class="hover-underline-animation"> More Info </span>
                                            <svg
                                                id="arrow-horizontal"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="10"
                                                viewBox="0 0 46 16"
                                            >
                                                <path
                                                    id="Path_10"
                                                    data-name="Path 10"
                                                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                                    transform="translate(30)"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                </center>
                            </div>
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <div >
                                <center>
                                    <img
                                        src={paid}
                                        height='80px'
                                        width='auto'
                                        alt='reactJS'
                                    />
                                    <br /><br />
                                    <h3 style={{ color: 'black', }}>Paid Search</h3>
                                </center>
                            </div>
                            <div >
                                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                    Enhance brand visibility and achieve quicker results through paid search.
                                </Typography>
                                <br />
                                <center>
                                    <a href="/paidSearch">
                                        <button class="cta">
                                            <span class="hover-underline-animation"> More Info </span>
                                            <svg
                                                id="arrow-horizontal"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="10"
                                                viewBox="0 0 46 16"
                                            >
                                                <path
                                                    id="Path_10"
                                                    data-name="Path 10"
                                                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                                    transform="translate(30)"
                                                ></path>
                                            </svg>
                                        </button>
                                    </a>
                                </center>
                            </div>
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

export default DIgitalMarketing