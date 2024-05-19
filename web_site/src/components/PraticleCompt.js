import React from 'react'
import particleConfig from '../Config/particle-config'
import Particles from '@tsparticles/react'

export default function PraticleCompt() {
    return (
        <>
            <Particles params={particleConfig}></Particles>
        </>
    )
}
