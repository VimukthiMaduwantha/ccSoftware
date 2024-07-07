import React, { useEffect } from 'react'
// import logo from '../images/theme.svg'
import back from '../images/original.png'
// import logo from '../images/CCback.jpg'
import logo from '../images/redBack.jpg'
// import logo from '../images/whiteBack.jpg'
// import logo from '../images/cccBack.jpg'
import { Box, Grid, Typography } from '@mui/material'

function BackgroundImage() {
    useEffect(() => {
        const noSelectElements =
            document.querySelectorAll(".no-select");
        noSelectElements.forEach((element) => {
            element.style.webkitUserSelect = "none";
            element.style.mozUserSelect = "none";
            element.style.msUserSelect = "none";
            element.style.userSelect = "none";
        });
    }, []);

    return (
        <>
            <Box sx={{
                height: { md: 'calc(100vh - 80px)', xs: 'auto' },
                paddingTop: { md: 'none', xs: '2vh' },
                paddingBottom: { md: 'none', xs: '2vh' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${logo})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))',
            }}
                className='no-select'
            >
                <Grid container spacing={1} sx={{ width: { md: '90%', xs: '100%', }, }}>
                    <Grid item md={6} xs={12} sx={{ height: { md: 'calc(100vh - 80px)', xs: 'calc(100vh - 80px)/2' }, display: 'flex', justifyContent: 'center', alignItems: 'center'/* , background: 'red' */ }}>
                        <div style={{ padding: '10px' }}>
                            <Typography
                                sx={{
                                    fontSize: { md: '4vw', xs: '7vw' },
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    color: 'black',
                                    fontFamily: "Kanit, sans-serif",
                                    fontWeight: '500',
                                    fontStyle: 'normal',
                                }} >CC Software Solutions</Typography>
                            <Typography
                                sx={{
                                    paddingLeft: { md: '20px', xs: 'none' },
                                    fontSize: { md: '1.2vw', xs: '4vw' },
                                    color: 'black',
                                    fontFamily: "Montserrat, sans-serif",
                                    fontOpticalSizing: 'auto',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    textAlign: 'center'
                                }}
                            >
                                CC Software Solutions is your trusted partner for innovative IT product development.
                                We are dedicated to delivering tailored IT solutions that leverage the latest technologies and best practices
                                in the industry. Our goal is to enable our clients to achieve their business objectives with reliable,
                                cost-effective, and future-proof IT solutions.
                            </Typography>
                            <br />
                            <div className='btn-container' style={{ display: 'flex', justifyContent: 'center' }}>
                                <button className="btn"><i className="animation"></i><a href='/aboutus' style={{ fontFamily: "Montserrat, sans-serif", textDecoration: 'none', color: 'black', cursor: 'pointer', fontSize: '13px' }}>Read More About Us</a><i className="animation"></i></button>
                            </div>
                        </div>
                    </Grid>
                    <br />
                </Grid>
            </Box >
        </>
    )
}

export default BackgroundImage