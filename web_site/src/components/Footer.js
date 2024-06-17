import React, { useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import logo from '../images/ccLogo.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

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
            <Box sx={{ height: '100%', background: 'black', padding: '10px' }}>
                <Grid container spacing={0}>
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
                    <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <img
                                src={logo}
                                height='80px'
                                width='auto'

                            />
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", fontSize: '20px' }}>Connect With Us</Typography>
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
                            <div>
                                <a href='https://www.facebook.com/profile.php?id=61555503735807' target="_blank">
                                    <FacebookIcon sx={{ color: 'white' }} />
                                </a>
                                &nbsp; &nbsp;
                                <a href='https://www.instagram.com/ccsoftwares?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="_blank">
                                    <InstagramIcon sx={{ color: 'white' }} />
                                </a>
                            </div>
                        </Box>

                    </Grid>
                </Grid>
                <br />
                <hr style={{ opacity: '0.5' }} />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", opacity: '0.7', fontSize: { md: '13px', xs: '12px' } }}>
                        ©2024.All Rights Reserved by CC Software Solutions.
                    </Typography>
                </div>
            </Box >
        </>
    )
}
export default Footer