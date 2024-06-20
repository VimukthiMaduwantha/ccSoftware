import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import projects from '../images/projects.jpg'

function Projects() {
    return (
        <>
            <Box sx={{
                height: { md: 'calc(60vh - 80px)', xs: '30vh' },
                backgroundImage: `url(${projects})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',

            }}
                className='no-select'
            >
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '1vw' }}>
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#A974D0', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Projects</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '40px' }, }}>Our Projects</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </Box>
            </Box >
            <br />
            <div style={{
                // backgroundImage: `url(${homeBack})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                // borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }} >
                <Box sx={{ width: { xs: '97%', md: '100%' }, padding: '10px', }}>
                    <Grid container >
                        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} item md={7} xs={12}>
                            <Box sx={{ padding: '10px' }}>
                                <center>
                                    <h1 style={{ color: 'black', opacity: '0.9' }}>Who are we ? </h1>
                                </center>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <br /><br /><br /><br /><br />

        </>
    )
}

export default Projects