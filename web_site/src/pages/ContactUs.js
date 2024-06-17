import React from 'react'
import { Box, Card, Grid, Typography } from '@mui/material'
import back from '../images/conatct.jpg'
import Contact from '../components/Contact'
import ContactMessage from '../components/ContactMessage'


function ContactUs() {
    return (
        <>
            <Box sx={{
                height: { md: 'calc(60vh - 80px)', xs: '30vh' },
                backgroundImage: `url(${back})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',

            }}
                className='no-select'
            >
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '1vw' }}>
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#A974D0', fontFamily: "Montserrat, sans-serif", opacity: '0.8', }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", opacity: '0.8', }}>Contact Us</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '40px' } }}>Get in touch</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* <Contact /> */}
                    </div>
                </Box>
            </Box >
            <br />
            <Box>
                <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '17px', xs: '15px' }, fontWeight: '500' }}>-Reach out to our dedicated team of engineers who are ready to assist you with your software development needs-</Typography>
                </div>
            </Box>
            <br />
            <center>
                <Box  >
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <Card sx={{ width: { md: '42vw', xs: '90vw' }, height: { md: '75vh', xs: '50vh' }, borderRadius: '20px', boxShadow: '1px 1px 12px rgba(0, 0, 0, 1.5)', background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div >
                                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '3vw', xs: '30px' } }}>Leave Us a Message</Typography>
                                    <br />
                                    <ContactMessage />
                                </div>
                            </Card>
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div>
                                <Card sx={{ width: { md: '42vw', xs: '90vw' }, height: { md: '35vh', xs: '17vh' }, borderRadius: '20px', boxShadow: '1px 1px 12px rgba(0, 0, 0, 1.5)', background: 'black', padding: '0 5px 0 0' }}>
                                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '3vw', xs: '30px' } }}>Hotline</Typography>
                                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '1vw', xs: '15px' } }}>Transform Your Ideas into Reality – Contact Us Now! </Typography>
                                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '3.6vw', xs: '15px' }, fontWeight: 'bold' }}>+94 770 832 340 </Typography>
                                </Card>
                                &nbsp;
                                <Card sx={{ width: { md: '42vw', xs: '90vw' }, height: { md: '35vh', xs: '17vh' }, borderRadius: '20px', boxShadow: '1px 1px 12px rgba(0, 0, 0, 1.5)', background: 'black' }}>
                                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '3vw', xs: '30px' } }}>Email Us</Typography>
                                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '1vw', xs: '15px' } }}>Success Begins with a Conversation – Let’s Talk! </Typography>
                                    <br />
                                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '2vw', xs: '15px' }, fontWeight: 'bold' }}><a style={{ textDecoration: 'none', color: 'white' }} href='mailto:info@ccsoftwares.com'>info@ccsoftwares.com</a></Typography>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </center>

            <br />
        </>
    )
}

export default ContactUs