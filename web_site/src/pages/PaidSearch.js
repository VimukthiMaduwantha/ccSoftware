import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import paid from '../images/paid.jpg'
import paidSearch1 from '../images/paidSearch1.jpg'
import webTik from '../images/tik.png'
import brand from '../images/brand-asset-management.png'
import result from '../images/results.png'
import precise from '../images/precision.png'
import planning from '../images/planning.png'
import efficiency from '../images/efficiency.png'
import experience from '../images/experience.png'
import back1 from '../images/tm.jpg'

function PaidSearch() {
    return (
        <>
            <Box sx={{
                height: { md: 'calc(60vh - 80px)', xs: '30vh' },
                backgroundImage: `url(${paid})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                // borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }}
                className='no-select'
            >
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '1vw' }}>
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Paid Search</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '39px' }, }}>Paid Search</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </Box>
            </Box >
            <br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '30px' }}>
                    <Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>WHAT IS PAID SEARCH? </Typography>
                    <br />
                    <Grid container spacing={5} >
                        <Grid item md={12} xs={12} >
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', fontSize: { md: '25px', xs: '18px' }, fontWeight: '500' }}>Reaching the Right Audience with Measurable and Controllable Marketing Strategies</Typography>
                            <br />
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Paid search is a straightforward pay-per-click process. Popular search engines like Google allow advertisers to display ads on their search engine results pages, and you only pay when someone clicks on the ad.
                            </Typography>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <img
                                src={paidSearch1}
                                alt='service'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    aspectRatio: 3 / 2,
                                    objectFit: 'cover'
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <h2 style={{ color: 'black', }}>Paid Search</h2>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                The success of an online business hinges on the volume of traffic to your site. More traffic generates more leads, resulting in increased sales. At Envision Circle, we go beyond standard PPV services, offering custom-made solutions at affordable rates for all businesses.
                            </Typography>
                            <br />
                            <Grid item md={12} xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item md={1} xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={webTik}
                                            height='30px'
                                            width='auto'
                                            alt='teamWeb'
                                        />
                                    </Grid>
                                    <Grid item md={11} xs={11}>
                                        <h4>Display Advertising</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { md: '13px', xs: '12px' }, fontWeight: '500' }}>
                                            In digital marketing, display advertising functions like a digital billboard, effectively creating brand awareness among a wide audience. It's a straightforward method to reach a large number of people within your target audience.
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
                                        <h4>Remarketing</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { md: '13px', xs: '12px' }, fontWeight: '500' }}>
                                            An effective way to re-engage potential customers who visited your business but didn't make a purchase is a powerful tool for boosting your conversion rates and increasing profitability.
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
                                        <h4>PPC Advertising</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { md: '13px', xs: '12px' }, fontWeight: '500' }}>
                                            One of the most effective methods to drive targeted traffic to your site is through platforms like Google Ads, including Google Shopping, and Bing Ads. At our company, we possess the expertise and technology necessary to monitor and implement these strategies effectively for your business.
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
                                        <h4>PPC Audit</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { md: '13px', xs: '12px' }, fontWeight: '500' }}>
                                            PPC campaigns should aim to achieve a respectable ROAS (Return On Ad Spend) to demonstrate success. We offer a comprehensive review of your current PPC setup, provide detailed reports, and recommend strategies to optimize your PPC budget effectively.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '30px' }}>
                    <center>
                        <Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>WE ARE THE BEST</Typography>
                        <h2 style={{ color: 'black', }}>Top Digital Marketing Strategist For Your Project</h2>
                    </center>
                    <br /><br />
                    <Grid container spacing={5}>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={brand}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Brand Development</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                A highly interactive social media channel can significantly enhance a business's brand.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={result}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Track & Measure Results</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Establish KPIs to determine if your digital strategy is delivering the desired outcomes.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={precise}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Precise Targeting</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Tailor campaigns to customers' preferences when presenting them.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={planning}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Crafted Marketing Strategy</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Develop a marketing strategy focused on scalability, performance, and cost efficiency.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={efficiency}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Cost-Effective</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Digital marketing provides a cost-effective alternative to traditional marketing methods.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={experience}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Executives with extensive seniority and deep expertise.</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Start your digital strategy journey with the support of our skilled team from the outset.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <br /><br />
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

export default PaidSearch