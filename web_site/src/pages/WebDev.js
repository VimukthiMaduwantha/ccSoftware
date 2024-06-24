import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import web from '../images/webDev.jpg'
import react from '../images/react.png'
import node from '../images/nodeLogo.png'
import mongoDB from '../images/MongoDB.png'

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
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#A974D0', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Web Development</Typography>
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
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '10px' }}>
                    <Typography sx={{ color: '#A974D0', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>OUR APPROACH</Typography>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12} >
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', fontSize: { md: '35px', xs: '39px' }, fontWeight: '500' }}>Web Development</Typography>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>The modern-day world is primarily an online world; no matter the service or business you conduct, having an online website would drastically help you move forward. We develop and create websites with various options, including all services and details in a website, working smoothly to the consumer’s benefit. If you are looking for a website that will attract a crowd into your business, you have reached the right place</Typography>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', }} >
                                    <img
                                        src={react}
                                        height='80px'
                                        width='auto'
                                        alt='reactJS'
                                    />
                                    &nbsp;
                                    <div >
                                        <h3 style={{ color: 'black', }}>React js</h3>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                            React JS is crucial for web development due to its component-based architecture, enabling reusable and maintainable UI components. The virtual DOM enhances performance by optimizing updates. Its declarative syntax simplifies UI state management, making code more predictable and debuggable. A robust ecosystem with extensive libraries and tools further accelerates development.
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', }} >
                                    <img
                                        src={node}
                                        height='80px'
                                        width='auto'
                                        alt='reactJS'
                                    />
                                    &nbsp;
                                    <div >
                                        <h3 style={{ color: 'black', }}>Node js</h3>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                            Node.js is vital for web development, enabling server-side scripting with JavaScript, thus unifying client and server-side coding. Its non-blocking, event-driven architecture ensures high performance and scalability. With a robust npm ecosystem, it simplifies development tasks. Node.js excels in handling real-time data, making it ideal for chat services and live updates in modern web applications.
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', }} >
                                    <img
                                        src={mongoDB}
                                        height='50px'
                                        width='auto'
                                        alt='reactJS'
                                    />
                                    &nbsp;
                                    <div >
                                        <h3 style={{ color: 'black', }}>MongoDB</h3>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                            MongoDB is vital for web development due to its flexible schema, which allows for rapid iteration and handling of unstructured data. Its scalability and performance make it suitable for large-scale applications. As a NoSQL database, MongoDB supports JSON-like documents, simplifying data integration with JavaScript-based technologies like Node.js, making it an ideal choice for modern, dynamic web applications.
                                        </Typography>
                                    </div>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>



        </>
    )
}

export default WebDev