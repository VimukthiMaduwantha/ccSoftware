import React from 'react'
import { Box, Card, Grid, Typography } from '@mui/material'
import back from '../images/team.jpg'
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

            }}
                className='no-select'
            >
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '1vw' }}>
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#A974D0', fontFamily: "Montserrat, sans-serif", opacity: '0.8', }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", opacity: '0.8', }}>Our Team</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '60px' } }}>Our Team</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <HuneyComb />
                    </div>
                </Box>
            </Box >
            <Box>
                <div style={{ padding: '20px' }}>
                    <Typography sx={{ color: '#A974D0', fontFamily: "Montserrat, sans-serif", fontSize: { md: '17px', xs: '15px' }, fontWeight: '400' }}>Experience. Talent. Unity.</Typography>
                    <Typography sx={{ color: 'white', fontFamily: "Montserrat, sans-serif", fontSize: { md: '52px', xs: '15px' } }}>Meet the experties in the industry</Typography>
                </div>
            </Box>

            <center>
                <Box sx={{ width: '80vw' }} >
                    <Grid container spacing={3}>
                        {teamMembers.map((e, i) => (
                            <Grid item md={3} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Card sx={{
                                    width: '300px', height: '400px', transition: 'transform 0.5s', borderRadius: '15px',
                                    '&:hover': {
                                        transform: 'scale(1.05)', // Enlarge the card on hover
                                        boxShadow: '1px 1px 12px rgba(77, 190, 233, 1)'
                                    },
                                }} >
                                    <div>
                                        <h1>heello</h1>
                                    </div>
                                    <div style={{ background: '#1A1A1A', }}>
                                        <center >
                                            <Typography sx={{ color: '#A974D0', fontFamily: "Montserrat, sans-serif", fontWeight: '700' }}>{e.name}</Typography>
                                            <Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", fontWeight: '500' }}>{e.position}</Typography>
                                        </center>
                                    </div>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </center >
            <br />
        </>
    )
}

export default Team