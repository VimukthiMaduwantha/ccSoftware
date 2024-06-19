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
import react from '../images/react.png'
import node from '../images/nodeLogo.png'
import mongoDB from '../images/MongoDB.png'
import mobile from '../images/mobileLogo.png'
import dMarketing from '../images/dMarketing.png'


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
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {/* Development technologies start */}
                <Box sx={{ width: { xs: '90%', md: '80%' }, padding: '10px', /* background: 'red' */ }}>
                    <center>
                        <Typography sx={{ fontSize: { md: '3vh', xs: '1.4vh' }, color: 'white', opacity: '0.9' }}>ALL BUSINESS REQUIREMENTS UNDER ONE ROOF</Typography>
                        <Typography sx={{ fontSize: { md: '5vh', xs: '2.5vh' }, color: 'white', opacity: '0.9' }}>From Product Design To Software Development</Typography>
                    </center>
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
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    border: '1px solid black',
                                    transition: 'transform 0.3s, border 1s, box-shadow 0.3s', // Add box-shadow transition
                                    '&:hover': {
                                        border: '1px solid #4DBEE9',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Add shadow effect
                                    }
                                }}
                            >
                                <img
                                    src={web}
                                    height='50%'
                                    width='auto'
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                />
                                <br />
                                <h2 style={{ color: 'white', }}>web development</h2>
                                <Typography sx={{ color: 'white', opacity: '0.9', textAlign: 'center' }}>Innovative web applications to support your business.</Typography>
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
                                            background: 'rgba(0, 0, 0, 0.5)',
                                            border: '1px solid black',
                                            transition: 'transform 0.3s, border 1s, box-shadow 0.3s', // Add box-shadow transition
                                            '&:hover': {
                                                border: '1px solid #4DBEE9',
                                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Add shadow effect
                                            }
                                        }}
                                    >
                                        <img
                                            src={react}
                                            height='50%'
                                            width='auto'
                                            style={{ display: 'flex', justifyContent: 'center' }}
                                        />
                                        <br />
                                        <h3 style={{ color: 'white', }}>React js</h3>
                                        <Typography sx={{ color: 'white', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' }, display: { md: 'contents', xs: 'none' } }}>Interactive JavaScript framework for dynamic, user-centered interfaces.</Typography>
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
                                            background: 'rgba(0, 0, 0, 0.5)',
                                            border: '1px solid black',
                                            transition: 'transform 0.3s, border 1s, box-shadow 0.3s', // Add box-shadow transition
                                            '&:hover': {
                                                border: '1px solid #4DBEE9',
                                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Add shadow effect
                                            }
                                        }}
                                    >
                                        <img
                                            src={node}
                                            height='50%'
                                            width='auto'
                                            style={{ display: 'flex', justifyContent: 'center' }}
                                        />
                                        <br />
                                        <h3 style={{ color: 'white', }}>Node js</h3>
                                        <Typography sx={{ color: 'white', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' }, display: { md: 'contents', xs: 'none' } }}>Modern solution for creating scalable network applications.</Typography>
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
                                            background: 'rgba(0, 0, 0, 0.5)',
                                            border: '1px solid black',
                                            transition: 'transform 0.3s, border 1s, box-shadow 0.3s', // Add box-shadow transition
                                            '&:hover': {
                                                border: '1px solid #4DBEE9',
                                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Add shadow effect
                                            }
                                        }}
                                    >
                                        <img
                                            src={mongoDB}
                                            height='50%'
                                            width='auto'
                                            style={{ display: 'flex', justifyContent: 'center' }}
                                        />
                                        <br />
                                        <h3 style={{ color: 'white', }}>MongoDB</h3>
                                        <Typography sx={{ color: 'white', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' }, display: { md: 'contents', xs: 'none' } }}>Popular NoSQL database known for its flexibility and scalability.</Typography>
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
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    border: '1px solid black',
                                    transition: 'transform 0.3s, border 1s, box-shadow 0.3s', // Add box-shadow transition
                                    '&:hover': {
                                        border: '1px solid #4DBEE9',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Add shadow effect
                                    },
                                    width: '100%'
                                }}
                            >
                                <img
                                    src={mobile}
                                    height='50%'
                                    width='auto'
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                />
                                <h3 style={{ color: 'white', }}>Mobile Development</h3>
                                <Typography sx={{ color: 'white', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' }, }}>Scalability, performance, and cost optimization thanks to resilient software architecture.</Typography>
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
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    border: '1px solid black',
                                    transition: 'transform 0.3s, border 1s, box-shadow 0.3s', // Add box-shadow transition
                                    '&:hover': {
                                        border: '1px solid #4DBEE9',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Add shadow effect
                                    },
                                    width: '100%'
                                }}
                            >
                                <img
                                    src={dMarketing}
                                    height='50%'
                                    width='auto'
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                />
                                <h3 style={{ color: 'white', }}>Digital Marketing</h3>
                                <Typography sx={{ color: 'white', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' }, }}>Innovative digital strategies to propel your business forward.</Typography>
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
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    border: '1px solid black',
                                    transition: 'transform 0.3s, border 1s, box-shadow 0.3s', // Add box-shadow transition
                                    '&:hover': {
                                        border: '1px solid #4DBEE9',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Add shadow effect
                                    },
                                    width: '100%'
                                }}
                            >
                                <img
                                    src={mobile}
                                    height='50%'
                                    width='auto'
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                />
                                <h3 style={{ color: 'white', }}>Digital Product Design</h3>
                                <Typography sx={{ color: 'white', opacity: '0.9', textAlign: 'center', fontSize: { md: '12px' } }}>Complete digital creation – from UX prototyping to impactful final UI designs.</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                {/* Technological stack end */}
            </div >
            <br />
            {/* features stack start */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }} >
                <Box sx={{ width: { xs: '97%', md: '80%' }, padding: '10px', /* background: 'red' */ }}>
                    <center>
                        <Typography sx={{ fontSize: { md: '3vh', xs: '1.4vh' }, color: 'white', opacity: '0.9' }}>BUILD YOUR DREAM INTO REALITY</Typography>
                        <Typography sx={{ fontSize: { md: '5vh', xs: '2.5vh' }, color: 'white', opacity: '0.9' }}>How We Manage Your Aspiring Projects</Typography>
                    </center>
                    <Grid container spacing={2} /* sx={{ background: 'red' }} */>
                        <Grid item md={5} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src={mobile}
                                height='50%'
                                width='auto'
                            />
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} item md={7} xs={12}>
                            <Box /* sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} */>
                                <center>
                                    <h1 style={{ color: 'white', opacity: '0.9' }}>Organizing Your Business Needs</h1>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'white', opacity: '0.9' }}>We are attentive to every possible detail about your business, and we analyze it carefully to understand your business requirements to deliver the best result.</Typography>
                                </center>
                                <br />
                                <center>
                                    <h1 style={{ color: 'white', opacity: '0.9' }}>Conducting Tests & Overseeing</h1>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'white', opacity: '0.9' }}>We run multiple tests to assure the product’s quality and keep an informed report to measure the progress.</Typography>
                                </center>
                                <br />
                                <center>
                                    <h1 style={{ color: 'white', opacity: '0.9' }}>Ready To Go Live</h1>
                                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'white', opacity: '0.9' }}>Since the launch of your project, we constantly check for any bugs or issues and provide services and maintenance to make sure the project works smoothly.</Typography>
                                </center>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {/* features stack end */}

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
                }}
            >
                <div style={{ width: '70%', display: 'flex', jtifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
                    <h1 style={{ color: 'white', opacity: '0.9', textAlign: 'center' }}>Our Truly Amazing Clients</h1>
                    <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'white', opacity: '0.9', textAlign: 'center', }}>
                        CC Software Solutions is proud to be associated with esteemed and prestigious clientele.
                        We promise to best represent our clients and exceed their expectations in every way possible.
                        Our top priority is meeting all the requirements of our amazing clients, who motivate us everyday.
                    </Typography>
                </div>

                {/* <Box sx={{ width: '90vw' }}>
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
                </Box> */}
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