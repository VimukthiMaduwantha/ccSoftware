import React, { useEffect } from 'react'
// import logo from '../images/theme.svg'
import back from '../images/original.png'
// import logo from '../images/CCback.jpg'
import logo from '../images/cccBack.jpg'
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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${logo})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
                className='no-select'
            >
                <Grid container spacing={1} sx={{ width: { md: '90%', xs: '100%', }, }}>
                    <Grid item md={6} xs={12} sx={{ height: { md: 'calc(100vh - 80px)', xs: 'calc(100vh - 80px)/2' }, display: 'flex', justifyContent: 'center', alignItems: 'center'/* , background: 'red' */ }}>
                        <div>
                            <Typography
                                sx={{
                                    fontSize: { md: '4vw', xs: '7vw' },
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontFamily: "Kanit, sans-serif",
                                    fontWeight: '500',
                                    fontStyle: 'normal',
                                }}
                            >CC Software Solutions</Typography>
                            <Typography
                                sx={{
                                    paddingLeft: { md: '20px', xs: 'none' },
                                    fontSize: { md: '1.2vw', xs: '3vw' },
                                    color: 'white',
                                    fontFamily: "Montserrat, sans-serif",
                                    fontOpticalSizing: 'auto',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                }}
                            >
                                CC Software Solutions is your trusted partner for innovative IT product development.
                                We are dedicated to delivering tailored IT solutions that leverage the latest technologies and best practices
                                in the industry. Our goal is to enable our clients to achieve their business objectives with reliable,
                                cost-effective, and future-proof IT solutions.
                            </Typography>
                            <br />
                            <div className='btn-container'>
                                <button className="btn"><i className="animation"></i>Read More About Us<i className="animation"></i></button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}  >
                        <img
                            src={back}
                            width='100%'
                        // style={{ aspectRatio: '3/2', objectFit: 'contain' }}

                        />
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}

export default BackgroundImage