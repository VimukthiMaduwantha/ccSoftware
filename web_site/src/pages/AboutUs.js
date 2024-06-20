import React from 'react'
import back1 from '../images/tm.jpg'
import { Box, Grid, Typography } from '@mui/material'
// import about from '../images/abouttt.jpg'
import about from '../images/whoAreWe.png'
import aboutUS from '../images/aboutUS.jpg'
import mission from '../images/mission.png'
import vision from '../images/vision.png'


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
                                    <h1 style={{ color: 'black', opacity: '0.9' }}>Who are we ? </h1>
                                </center>
                                <br />
                                <center>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'center', fontSize: { xs: '13px', md: '16px' } }}>
                                        CC Software Solutions, an innovative IT company based in Sri Lanka, dedicated to empowering businesses
                                        through cutting-edge technology and strategic digital marketing. We specialize in web development, mobile app development,
                                        digital marketing,and digital product design, providing comprehensive solutions that cater to the unique needs of our clients.
                                        At CC Software Solutions, we pride ourselves on delivering next-gen software solutions and digital marketing consultancy that drive
                                        growth and success for businesses of all sizes. Our expert team leverages Sri Lanka's low-cost advantages to offer customized and
                                        cost-effective services, ensuring that our clients receive the best value for their investment.Our client-focused approach and advanced
                                        methodologies enable us to serve a diverse clientele effectively. We are committed to helping organizations and small-scale businesses
                                        thrive in today's competitive landscape through innovative software solutions and strategic digital marketing.
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'center', fontSize: { xs: '13px', md: '16px' } }}>
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
            <br /><br /><br /><br /><br />

            {/* our mission and vision start */}
            <div style={{
                // backgroundImage: `url(${homeBack})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }} >
                <Box sx={{ width: { xs: '97%', md: '80%' }, padding: '10px', }}>
                    <Grid container spacing={2} >
                        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} item md={6} xs={12}>
                            <Box sx={{ padding: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h1 style={{ color: 'black', opacity: '0.9' }}>Our Vision </h1>
                                    &nbsp;&nbsp;
                                    <img
                                        src={vision}
                                        width='50px'
                                        alt='service'
                                    />
                                </div>
                                <br />
                                <center>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'center', fontSize: { xs: '13px', md: '16px' } }}>
                                        "To be the leading software solutions provider in Sri Lanka, recognized for our cutting-edge technology, unparalleled customer satisfaction,
                                        and our ability to drive business success through innovation and excellence. We aim to create a digital future where businesses of all sizes can thrive and grow with our support."
                                    </Typography>
                                </center>

                            </Box>
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} item md={6} xs={12}>
                            <Box sx={{ padding: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h1 style={{ color: 'black', opacity: '0.9' }}>Our Mission </h1>
                                    &nbsp;&nbsp;
                                    <img
                                        src={mission}
                                        width='50px'
                                        alt='service'
                                    />
                                </div>
                                <br />
                                <center>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'center', fontSize: { xs: '13px', md: '16px' } }}>
                                        "To deliver innovative, reliable, and user-friendly software solutions that empower businesses to achieve their full potential. We are committed to providing exceptional
                                        customer service, fostering a culture of continuous improvement, and maintaining a focus on quality and integrity in everything we do."
                                    </Typography>
                                </center>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {/* our mission and vision end */}
            <br /><br /><br /><br />
            {/* our values start */}
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
                        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} item md={12} xs={12}>
                            <Box sx={{ padding: '10px' }}>
                                <center>
                                    <h1 style={{ color: 'black', opacity: '0.9' }}>Our Values </h1>
                                </center>
                                <br />
                                <center>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'center' }}>
                                        At CC Software Solutions, our values are the cornerstone of our success. We pride ourselves on having a skilled, young, and enthusiastic
                                        team that brings creativity and passion to software development and digital marketing services. We believe that integrity is crucial to
                                        achieving greatness, and we motivate and encourage everyone around us to strive for excellence. Valuing our relationships within the team and
                                        fostering collaboration with all our stakeholders is paramount. We treat every client with the utmost respect and dedication,
                                        regardless of the size of their business, and are committed to delivering top-notch products and services that exceed expectations.
                                    </Typography>
                                </center>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {/* our values end */}
            <br /><br /><br /><br />

            {/* Why you choose us start*/}
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
                    <Grid container spacing={2} >
                        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} item md={12} xs={12}>
                            <Box sx={{ padding: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h1 style={{ color: 'black', opacity: '0.9' }}>Why should you work with us?</h1>
                                </div>
                                <br />
                                <center>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'center', fontSize: { xs: '13px', md: '16px' } }}>
                                        Working with CC Software Solutions provides a range of compelling incentives. Our collaboration promises valuable benefits and opportunities, including:
                                    </Typography>
                                </center>

                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4} >
                        <Grid sx={{ display: 'flex', justifyContent: 'center', }} item md={4} xs={12}>
                            <Box sx={{ padding: '10px', }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                                    <h3 style={{ color: 'black', opacity: '0.9' }}>Skilled, Enthusiastic Team</h3>
                                </div>
                                <center>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'center', fontSize: { xs: '13px', md: '16px' } }}>
                                        Our team is composed of skilled, young professionals who bring a high level of enthusiasm to every project. Their expertise and innovative thinking
                                        ensure that we deliver cutting-edge solutions.
                                    </Typography>
                                </center>

                            </Box>
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', }} item md={4} xs={12}>
                            <Box sx={{ padding: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                                    <h3 style={{ color: 'black', opacity: '0.9' }}>Creativity and Passion</h3>
                                </div>
                                <center>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'center', fontSize: { xs: '13px', md: '16px' } }}>
                                        We are passionate about software development and digital marketing services. Our team’s creativity drives us to develop unique and
                                        effective solutions tailored to meet each client’s specific needs.
                                    </Typography>
                                </center>

                            </Box>
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center' }} item md={4} xs={12}>
                            <Box sx={{ padding: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                                    <h3 style={{ color: 'black', opacity: '0.9' }}>Commitment to Integrity</h3>
                                </div>
                                <center>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'center', fontSize: { xs: '13px', md: '16px' } }}>
                                        We believe that integrity is crucial to achieving greatness. Our commitment to honesty and transparency fosters trust and builds strong, lasting relationships with our clients.
                                    </Typography>
                                </center>

                            </Box>
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', }} item md={4} xs={12}>
                            <Box sx={{ padding: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                                    <h3 style={{ color: 'black', opacity: '0.9' }}>Striving for Excellence</h3>
                                </div>
                                <center>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'center', fontSize: { xs: '13px', md: '16px' } }}>
                                        We motivate and encourage our team to strive for excellence in all that they do. This culture of continuous improvement ensures that we consistently deliver
                                        high-quality results.
                                    </Typography>
                                </center>

                            </Box>
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', }} item md={4} xs={12}>
                            <Box sx={{ padding: '10px' }}>
                                <div style={{ marginBottom: '10px' }}>
                                    <center>
                                        <h3 style={{ color: 'black', opacity: '0.9' }}>Valuing Relationships and Collaboration</h3>
                                    </center>
                                </div>
                                <center>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'center', fontSize: { xs: '13px', md: '16px' } }}>
                                        We place a high value on our relationships within the team and with our clients. Collaboration is at the heart of our approach,
                                        ensuring that we work closely with all stakeholders to achieve the best outcomes.
                                    </Typography>
                                </center>

                            </Box>
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', }} item md={4} xs={12}>
                            <Box sx={{ padding: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                                    <h3 style={{ color: 'black', opacity: '0.9' }}>Equal Treatment of Clients</h3>
                                </div>
                                <center>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'center', fontSize: { xs: '13px', md: '16px' } }}>
                                        At CC Software Solutions, every client is treated with the utmost respect and dedication, regardless of the size of their business. We believe
                                        that every client deserves our best efforts and top-notch service.
                                    </Typography>
                                </center>

                            </Box>
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', }} item md={4} xs={12}>
                            <Box sx={{ padding: '10px' }}>
                                <div style={{ marginBottom: '10px' }}>
                                    <center>
                                        <h3 style={{ color: 'black', opacity: '0.9' }}>Top-Notch Products and Services</h3>
                                    </center>
                                </div>
                                <center>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9', textAlign: 'center', fontSize: { xs: '13px', md: '16px' } }}>
                                        Our commitment to delivering superior products and services is unwavering. We strive to exceed expectations by providing solutions
                                        that are not only high-quality but also innovative and effective.
                                    </Typography>
                                </center>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div >
            {/* Why you choose us end*/}
            < br /><br /><br /><br /><br />










            < Box >
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

export default AboutUs