import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import projects from '../images/projects.jpg'
import pos from "../data/pos.json";
import mobile from "../data/mobile.json";
import DialogComponent from '../components/DialogComponent';
import webTik from '../images/tik.png'


function Projects() {
    const [rowData, setRowData] = useState({});
    const [handleOpen, setHandleOpen] = useState(false);

    function MoreInfoPos(data) {
        setRowData(data);
        setHandleOpen(true);
    }

    console.log("info:> ", rowData)
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
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '20px' }}>
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", fontWeight: '600', fontSize: { xs: '13px', md: '16px' } }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", fontWeight: '600', fontSize: { xs: '13px', md: '16px' } }}>Projects</Typography>
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

            {/* POS systems */}
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
                <Box sx={{ width: { xs: '97%', md: '80%' }, padding: '10px', }}>
                    <Box sx={{ padding: '10px', display: 'flex' }}>
                        <img
                            src={webTik}
                            height='30px'
                            width='auto'
                            alt='teamWeb'
                        />
                        &nbsp; &nbsp;
                        <h2 style={{ color: 'black', opacity: '0.9' }}>Point Of Sale Systems </h2>
                    </Box>
                    <br />
                    <Grid container spacing={5}  >
                        {pos.map((data, i) => (
                            <Grid item md={4} xs={12} >
                                <div class="card">
                                    <div class="card-details">
                                        <div style={{ display: 'flex', justifyContent: 'center', height: '210px' }}>
                                            <img
                                                src={data.image1}
                                                height='190px'
                                                width='100%'
                                                alt='project'
                                            />
                                        </div>
                                        <div style={{ overflow: 'hidden', paddingBottom: '15px' }}>
                                            <p class="text-title">{data.name}</p>
                                            <p class="text-body">{data.intro}</p>
                                        </div>
                                    </div>
                                    <button class="card-button" onClick={() => MoreInfoPos(data)}>More info</button>
                                </div>
                            </Grid>
                        ))}

                    </Grid>
                </Box>
            </div >
            <br /><br />

            {/* Mobile Apps */}
            <div style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                // borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }} >
                <Box sx={{ width: { xs: '97%', md: '80%' }, padding: '10px', }}>
                    <Box sx={{ padding: '10px', display: 'flex' }}>
                        <img
                            src={webTik}
                            height='30px'
                            width='auto'
                            alt='teamWeb'
                        />
                        &nbsp; &nbsp;
                        <h2 style={{ color: 'black', opacity: '0.9' }}>Mobile Applications</h2>
                    </Box>
                    <br />
                    <Grid container spacing={5}  >
                        {mobile.map((data, i) => (
                            <Grid item md={4} xs={12} >
                                <div class="card">
                                    <div class="card-details">
                                        <div style={{ display: 'flex', justifyContent: 'center', height: '210px' }}>
                                            <img
                                                src={data.image1}
                                                height='190px'
                                                width='100%'
                                                alt='project'
                                            />
                                        </div>
                                        <div style={{ overflow: 'hidden', paddingBottom: '15px' }}>
                                            <p class="text-title">{data.name}</p>
                                            <p class="text-body">{data.intro}</p>
                                        </div>
                                    </div>
                                    <button class="card-button" onClick={() => MoreInfoPos(data)}>More info</button>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
            <br /><br />


            {/* Dialog Component */}
            <DialogComponent
                rowData={rowData}
                setRowData={setRowData}
                handleOpen={handleOpen}
                setHandleOpen={setHandleOpen}
            />
        </>
    )
}

export default Projects