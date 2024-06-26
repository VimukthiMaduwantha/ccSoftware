import React from 'react'
import { Box, Card, Grid, Typography } from '@mui/material'
import back from '../images/teamNew.jpg'
// import back from '../images/team.jpg'
import back1 from '../images/tm.jpg'
import HuneyComb from '../components/HuneyComb'
import teamMembers from '../data/team.json'

function Team() {
    return (
        <>
            <Box sx={{
                height: { md: 'calc(60vh - 80px)', xs: '30vh' },
                backgroundImage: `url(${back})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))',

            }}
                className='no-select'
            >
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '1vw' }}>
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Our Team</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '40px' }, }}>Our Team</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <HuneyComb />
                    </div>
                </Box>
            </Box >
            <Box>
                <div style={{ padding: '20px' }}>
                    <Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", fontSize: { md: '17px', xs: '15px' }, fontWeight: '600' }}>Experience. Talent. Unity.</Typography>
                    <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '52px', xs: '15px' } }}>Meet the experties in the industry</Typography>
                </div>
            </Box>

            <center>
                <Box sx={{ width: '80vw' }} >
                    <Grid container spacing={3}>
                        {teamMembers.map((e, i) => (
                            <Grid item md={3} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <div /* style={{ overflow: 'hidden' }} */>
                                    <img
                                        src={e.image}
                                        className='teamImage'
                                    />
                                </div>
                                <div>
                                    <Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", fontWeight: '700' }}>{e.name}</Typography>
                                    <Typography sx={{ color: 'black', opacity: '0.9', fontFamily: "Montserrat, sans-serif", fontWeight: '600', fontSize: '15px' }}>{e.position}</Typography>
                                </div>
                                {/* </Card> */}
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </center >
            <br />
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
        </>
    )
}

export default Team