import React, { useEffect } from 'react'
import logo from '../images/theme.svg'
import { Box, Typography } from '@mui/material'
import BackgroundImage from '../components/BackgroundImage'

function Home() {
    return (
        <>
            <section className='section' >
                <BackgroundImage />
            </section>
            <section className='section' style={{ background: 'blue' }}>
                <h1>helolllo</h1>
            </section>
            <section className='section'>
                <h1>helolllo</h1>
            </section>



        </>
    )
}

export default Home