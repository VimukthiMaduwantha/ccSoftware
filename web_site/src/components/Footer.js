import React, { useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import logo from '../images/CC Icon.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
    useEffect(() => {
        // Disable text selection for elements
        // with class "no-select"
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
            <Box sx={{ height: '100%', background: 'black', padding: '30px 10px 10px 10px' }}>
                <Grid container spacing={4}>
                    <Grid item md={4} xs={12} sx={{ display: { md: 'flex', xs: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <img
                                src={logo}
                                height='80px'
                                width='auto'
                                alt='footerLogo'
                            />
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <div className='no-select'>
                            <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", /* textAlign: 'justify' */ }}>
                                CC Software Solutions is a leading software engineering company
                                specializing in the development of mobile apps, POS systems,
                                and web applications. With a focus on innovation and quality,
                                we deliver cutting-edge solutions to meet our clients' needs.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            {/* <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif" }}>Connect With Us</Typography> */}
                            <Box sx={{ marginTop: '2vh' }}>
                                <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', }}>
                                    <div>
                                        <LocalPhoneIcon sx={{ color: 'white' }} />

                                    </div>
                                    &nbsp; &nbsp;
                                    <div>
                                        <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", opacity: '0.8', }}>+94 770 832 340</Typography>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', }}>
                                    <div>
                                        <EmailIcon sx={{ color: 'white' }} />
                                    </div>
                                    &nbsp; &nbsp;
                                    <div>
                                        <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", opacity: '0.8', }}><a style={{ textDecoration: 'none', color: 'white' }} href='mailto:info@ccsoftwares.com'>info@ccsoftwares.com</a></Typography>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={4} sx={{ display: { md: 'none', xs: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <img
                                src={logo}
                                height='75px'
                                width='auto'
                                alt='footerLogo'
                            />
                        </div>
                    </Grid>
                    <Grid item md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <a href='https://www.facebook.com/profile.php?id=61555503735807' target="_blank">
                                <FacebookIcon sx={{ color: 'white' }} />
                            </a>
                            &nbsp; &nbsp;
                            <a href='https://www.instagram.com/ccsoftwares?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="_blank">
                                <InstagramIcon sx={{ color: 'white' }} />
                            </a>
                            &nbsp; &nbsp;
                            <a href='#' target="_blank">
                                <YouTubeIcon sx={{ color: 'white' }} />
                            </a>
                            &nbsp; &nbsp;
                            <a href='#' target="_blank">
                                <XIcon sx={{ color: 'white' }} />
                            </a>
                        </div>
                    </Grid>
                </Grid>
                <hr style={{ opacity: '0.5' }} />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", opacity: '0.7', fontSize: { md: '13px', xs: '12px' } }}>
                        Copyright © 2024 <b>CC Software Solutions</b> All Rights Reserved
                    </Typography>
                </div>
            </Box >
        </>
    )
}
export default Footer