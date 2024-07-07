import React, { useEffect } from 'react'
import { Box, Card, Grid, Typography } from '@mui/material'
import BackgroundImage from '../components/BackgroundImage'
import back1 from '../images/tm.jpg'
import back2 from '../images/whiteBack.jpg'
import bloommark from '../images/bloommark.png'
import menuLogo from '../images/Menu.png'
import theliElla from '../images/Theli Ella.png'
import web from '../images/cloud.png'
import react from '../images/react.png'
import node from '../images/nodeLogo.png'
import mongoDB from '../images/MongoDB.png'
import mobile from '../images/mobileLogo.png'
import ui from '../images/ui.png'
import dMarketing from '../images/dMarketing.png'
import electronJS from '../images/electronJS.png'
import database from '../images/database.png'
import Marquee from 'react-fast-marquee'


function Home() {
    return (
        <>
            <div>
                <BackgroundImage />
            </div>
            <br /><br /><br />
            <div className='section'
                style={{
                    // backgroundImage: `url(${homeBack})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {/* Development technologies start */}
                <Box sx={{ width: { xs: '90%', md: '80%' }, padding: '10px', /* background: 'red' */ }}>
                    <center>
                        <Typography sx={{ fontSize: { md: '3vh', xs: '1.4vh' }, color: 'black', fontFamily: 'Montserrat, sans-serif', }}>ALL BUSINESS REQUIREMENTS UNDER ONE ROOF</Typography>
                        <Typography sx={{ fontSize: { md: '5vh', xs: '2.5vh' }, color: 'black', opacity: '0.9', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>From Product Design To Software Development</Typography>
                    </center>
                    <br />
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <Card
                                sx={{
                                    padding: { md: '10px', xs: '5px' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 2,
                                    height: { xs: "200px", md: "360px" },
                                    transition: 'transform 0.3s, border 1s, box-shadow 0.3s',
                                }}
                            >
                                <img
                                    src={web}
                                    height='50%'
                                    width='auto'
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                    alt='webDevelopment'
                                />
                                <br />
                                <h2 style={{ color: 'black', }}>web development</h2>
                                <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontWeight: '500', opacity: '0.9', textAlign: 'center' }}>Innovative web applications to support your business.</Typography>
                            </Card>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item md={4} xs={12}>
                                    <Card
                                        sx={{
                                            height: { xs: "100px", md: "172px" },
                                            padding: { md: '10px', xs: '5px' },
                                            display: 'flex',
                                            flexDirection: { md: 'column', xs: 'none' },
                                            alignItems: 'center',
                                            justifyContent: { md: 'center', xs: 'space-evenly' },
                                            borderRadius: 2,
                                            transition: 'transform 0.3s, border 1s, box-shadow 0.3s', // Add box-shadow transition

                                        }}
                                    >
                                        <img
                                            src={react}
                                            height='55px'
                                            width='auto'
                                            style={{ display: 'flex', justifyContent: 'center' }}
                                            alt='reactJS'
                                        />
                                        <br />
                                        <h3 style={{ color: 'black', }}>React js</h3>
                                        <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontWeight: '500', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' }, display: { md: 'contents', xs: 'none' } }}>Interactive JavaScript framework for dynamic, user-centered interfaces.</Typography>
                                    </Card>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Card
                                        sx={{
                                            height: { xs: "100px", md: "172px" },
                                            padding: { md: '10px', xs: '5px' },
                                            display: 'flex',
                                            flexDirection: { md: 'column', xs: 'none' },
                                            alignItems: 'center',
                                            justifyContent: { md: 'center', xs: 'space-evenly' },
                                            borderRadius: 2,
                                            transition: 'transform 0.3s, border 1s, box-shadow 0.3s', // Add box-shadow transition

                                        }}
                                    >
                                        <img
                                            src={node}
                                            height='55px'
                                            width='auto'
                                            style={{ display: 'flex', justifyContent: 'center' }}
                                            alt='nodeJS'
                                        />
                                        <br />
                                        <h3 style={{ color: 'black', }}>Node js</h3>
                                        <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontWeight: '500', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' }, display: { md: 'contents', xs: 'none' } }}>Modern solution for creating scalable network applications.</Typography>
                                    </Card>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Card
                                        sx={{
                                            height: { xs: "100px", md: "172px" },
                                            padding: { md: '10px', xs: '5px' },
                                            display: 'flex',
                                            flexDirection: { md: 'column', xs: 'none' },
                                            alignItems: 'center',
                                            justifyContent: { md: 'center', xs: 'space-evenly' },
                                            borderRadius: 2,
                                            transition: 'transform 0.3s, border 1s, box-shadow 0.3s', // Add box-shadow transition

                                        }}
                                    >
                                        <img
                                            src={mongoDB}
                                            height='55px'
                                            width='auto'
                                            style={{ display: 'flex', justifyContent: 'center' }}
                                            alt='mongoDB'
                                        />
                                        <br />
                                        <h3 style={{ color: 'black', }}>MongoDB</h3>
                                        <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontWeight: '500', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' }, display: { md: 'contents', xs: 'none' } }}>Popular NoSQL database known for its flexibility and scalability.</Typography>
                                    </Card>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Card
                                        sx={{
                                            height: { xs: "100px", md: "172px" },
                                            padding: { md: '10px', xs: '5px' },
                                            display: 'flex',
                                            flexDirection: { md: 'column', xs: 'none' },
                                            alignItems: 'center',
                                            justifyContent: { md: 'center', xs: 'space-evenly' },
                                            borderRadius: 2,
                                            transition: 'transform 0.3s, border 1s, box-shadow 0.3s', // Add box-shadow transition

                                        }}
                                    >
                                        <img
                                            src={electronJS}
                                            height='55px'
                                            width='auto'
                                            style={{ display: 'flex', justifyContent: 'center' }}
                                            alt='mongoDB'
                                        />
                                        <br />
                                        <h3 style={{ color: 'black', }}>Electron JS</h3>
                                        <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontWeight: '500', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' }, display: { md: 'contents', xs: 'none' } }}>Electron.js enables cross-platform desktop apps using JavaScript, HTML, and CSS.</Typography>
                                    </Card>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Card
                                        sx={{
                                            height: { xs: "100px", md: "172px" },
                                            padding: { md: '10px', xs: '5px' },
                                            display: 'flex',
                                            flexDirection: { md: 'column', xs: 'none' },
                                            alignItems: 'center',
                                            justifyContent: { md: 'center', xs: 'space-evenly' },
                                            borderRadius: 2,
                                            transition: 'transform 0.3s, border 1s, box-shadow 0.3s', // Add box-shadow transition

                                        }}
                                    >
                                        <img
                                            src={react}
                                            height='50%'
                                            width='auto'
                                            style={{ display: 'flex', justifyContent: 'center' }}
                                            alt='mongoDB'
                                        />
                                        <br />
                                        <h3 style={{ color: 'black', }}>React Native</h3>
                                        <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontWeight: '500', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' }, display: { md: 'contents', xs: 'none' } }}>"Create high-quality, cross-platform mobile apps using React Native framework."</Typography>
                                    </Card>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Card
                                        sx={{
                                            height: { xs: "100px", md: "172px" },
                                            padding: { md: '10px', xs: '5px' },
                                            display: 'flex',
                                            flexDirection: { md: 'column', xs: 'none' },
                                            alignItems: 'center',
                                            justifyContent: { md: 'center', xs: 'space-evenly' },
                                            borderRadius: 2,
                                            transition: 'transform 0.3s, border 1s, box-shadow 0.3s', // Add box-shadow transition

                                        }}
                                    >
                                        <img
                                            src={database}
                                            height='50%'
                                            width='auto'
                                            style={{ display: 'flex', justifyContent: 'center' }}
                                            alt='mongoDB'
                                        />
                                        <br />
                                        <h3 style={{ color: 'black', }}>Sqlite</h3>
                                        <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontWeight: '500', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' }, display: { md: 'contents', xs: 'none' } }}>Lightweight, self-contained SQL database engine for embedded and mobile applications.</Typography>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <br /> <br />
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
                        >
                            <Card
                                sx={{
                                    padding: { md: '10px', xs: '5px' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 2,
                                    height: { xs: "200px", md: "220px" },
                                    transition: 'transform 0.3s, border 1s, box-shadow 0.3s',
                                    width: '100%'
                                }}
                            >
                                <img
                                    src={mobile}
                                    height='50%'
                                    width='auto'
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                    alt='mongoDB'
                                />
                                <h3 style={{ color: 'black', }}>Mobile Development</h3>
                                <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontWeight: '500', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' }, }}>Scalability, performance, and cost optimization thanks to resilient software architecture.</Typography>
                            </Card>
                        </Grid>
                        <Grid item md={4} xs={12}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
                        >
                            <Card
                                sx={{
                                    padding: { md: '10px', xs: '5px' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 2,
                                    height: { xs: "200px", md: "250px" },
                                    transition: 'transform 0.3s, border 1s, box-shadow 0.3s',
                                    width: '100%'
                                }}
                            >
                                <img
                                    src={dMarketing}
                                    height='50%'
                                    width='auto'
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                    alt='DMarketing'
                                />
                                <h3 style={{ color: 'black', }}>Digital Marketing</h3>
                                <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontWeight: '500', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' }, }}>Innovative digital strategies to propel your business forward.</Typography>
                            </Card>
                        </Grid>
                        <Grid item md={4} xs={12}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
                        >
                            <Card
                                sx={{
                                    padding: { md: '10px', xs: '5px' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 2,
                                    height: { xs: "200px", md: "220px" },
                                    transition: 'transform 0.3s, border 1s, box-shadow 0.3s',
                                    width: '100%'
                                }}
                            >
                                <img
                                    src={ui}
                                    height='50%'
                                    width='auto'
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                    alt='productDesign'
                                />
                                <h3 style={{ color: 'black', }}>Digital Product Design</h3>
                                <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontWeight: '500', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' } }}>Complete digital creation – from UX prototyping to impactful final UI designs.</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                {/* Technological stack end */}
            </div >
            <br />
            <div style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '80px',
                padding: '0 20px'
            }} >
                <Box sx={{ width: { xs: '97%', md: '80%' }, padding: '10px', /* background: 'red' */ }}>
                    <center>
                        <Typography sx={{ fontSize: { md: '3vh', xs: '1.4vh' }, color: 'black', opacity: '0.9', fontFamily: 'Montserrat, sans-serif', }}>BUILD YOUR DREAM INTO REALITY</Typography>
                        <Typography sx={{ fontSize: { md: '5vh', xs: '2.5vh' }, color: 'black', opacity: '0.9', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', }}>How We Manage Your Aspiring Projects</Typography>
                    </center>
                    <Grid container spacing={5} /* sx={{ background: 'red' }} */>
                        <Grid item md={5} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src={mobile}
                                height='50%'
                                width='auto'
                                alt='service'
                            />
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} item md={7} xs={12}>
                            <Box /* sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} */>
                                <center>
                                    <Typography sx={{ fontSize: { md: '3.5vh', xs: '2.5vh' }, color: 'black', opacity: '0.9', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', }}>Organizing Your Business Needs</Typography>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9' }}>We are attentive to every possible detail about your business, and we analyze it carefully to understand your business requirements to deliver the best result.</Typography>
                                </center>
                                <br />
                                <center>
                                    <Typography sx={{ fontSize: { md: '3.5vh', xs: '2.5vh' }, color: 'black', opacity: '0.9', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', }}>Conducting Tests & Overseeing</Typography>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9' }}>We run multiple tests to assure the product’s quality and keep an informed report to measure the progress.</Typography>
                                </center>
                                <br />
                                <center>
                                    <Typography sx={{ fontSize: { md: '3.5vh', xs: '2.5vh' }, color: 'black', opacity: '0.9', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', }}>Ready To Go Live</Typography>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', opacity: '0.9' }}>Since the launch of your project, we constantly check for any bugs or issues and provide services and maintenance to make sure the project works smoothly.</Typography>
                                </center>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {/* features stack end */}
            <br /><br /><br />
            {/* Client details start */}
            <Box
                sx={{
                    height: '100%',
                    backgroundImage: `url(${back2})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))',
                    padding: '20px'
                }}
            >
                <div style={{ width: '100%', display: 'flex', jtifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
                    <h1 style={{ color: 'black', opacity: '0.9', textAlign: 'center' }}>Our Truly Amazing Clients</h1>
                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', textAlign: 'center', fontWeight: '500' }}>
                        CC Software Solutions is proud to be associated with esteemed and prestigious clientele.
                        We promise to best represent our clients and exceed their expectations in every way possible.
                        Our top priority is meeting all the requirements of our amazing clients, who motivate us everyday.
                    </Typography>
                    <br />
                    <Box sx={{ width: '100%' }}>
                        <Marquee /* pauseOnHover */>
                            <div className='imageWrapper'>
                                <img src={menuLogo} alt='' />
                            </div>
                            <div className='imageWrapper'>
                                <img src={bloommark} alt='' />
                            </div>
                            <div className='imageWrapper'>
                                <img src={theliElla} alt='' />
                            </div>
                            <div className='imageWrapper'>
                                <img src={menuLogo} alt='' />
                            </div>
                            <div className='imageWrapper'>
                                <img src={bloommark} alt='' />
                            </div>
                            <div className='imageWrapper'>
                                <img src={theliElla} alt='' />
                            </div>
                        </Marquee>
                    </Box>
                    <br />
                </div>
            </Box >
            {/* Client details end */}

            {/* contact us start */}
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
            {/* contact us end */}
        </>
    )
}

export default Home