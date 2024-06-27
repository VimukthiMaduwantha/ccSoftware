import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import web from '../images/webDev.jpg'
import react from '../images/react.png'
import node from '../images/nodeLogo.png'
import mongoDB from '../images/MongoDB.png'
import webTeam from '../images/webTeam.jpg'
import webTik from '../images/tik.png'
import techTeam from '../images/digitalisation.png'
import cloud from '../images/server.png'
import practice from '../images/practice.png'
import testing from '../images/search.png'
import team from '../images/team-management.png'
import back1 from '../images/tm.jpg'


function WebDev() {
    return (
        <>
            <Box sx={{
                height: { md: 'calc(60vh - 80px)', xs: '30vh' },
                backgroundImage: `url(${web})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }}
                className='no-select'
            >
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '1vw' }}>
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Web Development</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '39px' }, }}>Web Development</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </Box>
            </Box >
            <br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '30px' }}>
                    <Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>OUR APPROACH</Typography>
                    <Grid container spacing={2}>
                        <Grid item md={12} xs={12} >
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', fontSize: { md: '35px', xs: '39px' }, fontWeight: '500' }}>Web Development</Typography>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>The modern-day world is primarily an online world; no matter the service or business you conduct, having an online website would drastically help you move forward. We develop and create websites with various options, including all services and details in a website, working smoothly to the consumer’s benefit. If you are looking for a website that will attract a crowd into your business, you have reached the right place.</Typography>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item md={4} xs={12} >
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img
                                            src={react}
                                            height='80px'
                                            width='auto'
                                            alt='reactJS'
                                        />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <h3 style={{ color: 'black', }}>React js</h3>
                                    </div>
                                    <div >
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                            React JS is crucial for web development due to its component-based architecture, enabling reusable and maintainable UI components. The virtual DOM enhances performance by optimizing updates. Its declarative syntax simplifies UI state management, making code more predictable and debuggable. A robust ecosystem with extensive libraries and tools further accelerates development.
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item md={4} xs={12} >
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img
                                            src={node}
                                            height='80px'
                                            width='auto'
                                            alt='reactJS'
                                        />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <h3 style={{ color: 'black', }}>Node js</h3>
                                    </div>
                                    <div >
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                            Node.js is vital for web development, enabling server-side scripting with JavaScript, thus unifying client and server-side coding. Its non-blocking, event-driven architecture ensures high performance and scalability. With a robust npm ecosystem, it simplifies development tasks. Node.js excels in handling real-time data, making it ideal for chat services and live updates in modern web applications.
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item md={4} xs={12} >
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img
                                            src={mongoDB}
                                            height='80px'
                                            width='auto'
                                            alt='reactJS'
                                        />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <h3 style={{ color: 'black', }}>MongoDB</h3>
                                    </div>

                                    <div >
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                            MongoDB is vital for web development due to its flexible schema, which allows for rapid iteration and handling of unstructured data. Its scalability and performance make it suitable for large-scale applications. As a NoSQL database, MongoDB supports JSON-like documents, simplifying data integration with JavaScript-based technologies like Node.js, making it an ideal choice for modern, dynamic web applications.
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '30px' }}>
                    <Grid container spacing={2} >
                        <Grid item md={5} xs={12} >
                            <img
                                src={webTeam}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    aspectRatio: 3 / 2,
                                    objectFit: 'cover'
                                }}
                                alt='web team'
                            />
                        </Grid>
                        <Grid item md={7} xs={12}>
                            <h2 style={{ color: 'black', }}>Find The Best Team For Your Next Project</h2>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                At our web development team, we take a distinctive approach, setting us apart from the regular firms. We believe in forming a strong
                                partnership with our clients, providing the best tech solutions to transform your business. Our future-oriented mindset ensures that
                                the websites we create are not only effective today but also ready to meet tomorrow's challenges. With our highly skilled team, we adopt a
                                business-centric perspective, crafting websites that are tailored to your specific needs. Our comprehensive development process covers
                                everything from front-end to back-end, resulting in excellent, functional, and user-friendly websites that enhance your business's online
                                presence.
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
                                        <h4>Reliability</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                            We utilize both custom and standard software development processes to efficiently deliver IT projects within defined parameters.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <br />
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
                                        <h4>Delivery mindset</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                            We focus on business-oriented goals and are committed to delivering top-quality products and services using cutting-edge technology for our customers.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <br />
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
                                        <h4>Delivery mindset</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                            We place our projects in the capable hands of experienced and qualified software project managers to ensure exceptional outcomes.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <br />
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
                                        <h4>Effective communication</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                            We maintain close communication with our clients, keeping them updated and following all their instructions.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '30px' }}>
                    <Grid container spacing={2}>
                        <Grid item md={12} xs={12}>
                            <center>
                                <h2 style={{ color: 'black', }}>Why You Should Work With Us</h2>
                                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                    At our web development team, we take a distinctive approach, setting us apart from the regular firms. We believe in forming a strong
                                    partnership with our clients, providing the best tech solutions to transform your business. Our future-oriented mindset ensures that
                                    the websites we create are not only effective today but also ready to meet tomorrow's challenges. With our highly skilled team, we adopt a
                                    business-centric perspective, crafting websites that are tailored to your specific needs. Our comprehensive development process covers
                                    everything from front-end to back-end, resulting in excellent, functional, and user-friendly websites that enhance your business's online
                                    presence.
                                </Typography>
                                <br />
                            </center>
                        </Grid>
                        <br /><br />
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={techTeam}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Skilled, hierarchical organization</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                producing and overseeing every project constantly through professional technicians.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={cloud}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Cloud And Serverless Experience</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Delivering high-performance software of exceptional quality at an affordable price.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={practice}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Newest Trends In Practice</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Latest methods and practices being implemented in current industry trends.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={testing}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Battle-Tested Process</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Equipping you with the right tools to thrive in today's market.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={team}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Team scaling assistance</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Scale your team swiftly as needed.
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

export default WebDev