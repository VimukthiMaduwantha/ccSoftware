import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";

export default function Particle() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        console.log("init");
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
    };

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    style={{
                        zIndex: -1,
                        height: '200px',
                        overflow: 'hidden'
                    }}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            number: {
                                value: 52,
                                density: {
                                    enable: false,
                                    value_area: 0
                                }
                            },
                            color: {
                                value: "#ffffff"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#000000"
                                },
                                polygon: {
                                    nb_sides: 7
                                },
                                image: {
                                    src: "img/github.svg",
                                    width: 100,
                                    height: 100
                                }
                            },
                            opacity: {
                                value: 0.5,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 40,
                                    size_min: 0.1,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: true,
                                distance: 150,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 6,
                                direction: "none",
                                random: false,
                                straight: false,
                                out_mode: "out",
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 6392.095897221408,
                                    rotateY: 1200
                                }
                            }
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </>
    );
}