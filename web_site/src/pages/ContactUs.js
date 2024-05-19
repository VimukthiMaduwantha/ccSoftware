import React from 'react'
import { Box, Card, Grid, Typography } from '@mui/material'
import back from '../images/conatct.jpg'
import Contact from '../components/Contact'


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
                        <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '40px' } }}>Contact Us</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Contact />
                    </div>
                </Box>
            </Box >
            <br />
            <Box>
                <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '17px', xs: '15px' }, fontWeight: '500' }}>-Reach out to our dedicated team of engineers who are ready to assist you with your software development needs-</Typography>
                </div>
            </Box>
            <center>
                <Box  >
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <Card sx={{ width: { md: '42vw', xs: '90vw' }, height: { md: '75vh', xs: '50vh' }, borderRadius: '20px', boxShadow: '1px 1px 12px rgba(0, 0, 0, 1.5)', background: 'black' }}>
                                <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '3vw', xs: '30px' } }}>Leave Us a Message</Typography>

                            </Card>
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div>
                                <Card sx={{ width: { md: '42vw', xs: '90vw' }, height: { md: '35vh', xs: '17vh' }, borderRadius: '20px', boxShadow: '1px 1px 12px rgba(0, 0, 0, 1.5)', background: 'black', padding: '0 5px 0 0' }}>
                                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '3vw', xs: '30px' } }}>Hotline</Typography>
                                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '1vw', xs: '15px' } }}>Our hotline is always available, ensuring that you can reach us at any time without experiencing a busy signal. </Typography>
                                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '4vw', xs: '15px' }, fontWeight: 'bold' }}>+94 770 832 340 </Typography>
                                </Card>
                                &nbsp;
                                <Card sx={{ width: { md: '42vw', xs: '90vw' }, height: { md: '35vh', xs: '17vh' }, borderRadius: '20px', boxShadow: '1px 1px 12px rgba(0, 0, 0, 1.5)', background: 'black' }}>
                                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '3vw', xs: '30px' } }}>Email Us</Typography>
                                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '1vw', xs: '15px' } }}>Our email inbox is constantly monitored, so you can rest assured that your message will not go unnoticed or overlooked. </Typography>
                                    <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '2.2vw', xs: '15px' }, fontWeight: 'bold' }}> ccsoftwaresolutionsltd@gmail.com </Typography>
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