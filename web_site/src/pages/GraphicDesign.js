import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import graphic from '../images/graphic.png'
import g1 from '../images/g11.png'
import webTik from '../images/tik.png'
import brand from '../images/brand-asset-management.png'
import result from '../images/results.png'
import precise from '../images/precision.png'
import planning from '../images/planning.png'
import efficiency from '../images/efficiency.png'
import experience from '../images/experience.png'
import back1 from '../images/tm.jpg'


function GraphicDesign() {
    return (
        <>
            <Box sx={{
                height: { md: 'calc(60vh - 80px)', xs: '30vh' },
                backgroundImage: `url(${graphic})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                // borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }}
                className='no-select'
            >
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '1vw' }}>
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Graphic Design</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '39px' }, }}>Graphic Design</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </Box>
            </Box >
            <br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '30px' }}>
                    <Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>WHAT IS GRAPHIC DESIGN? </Typography>
                    <br />
                    <Grid container spacing={5} >
                        <Grid item md={12} xs={12} >
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', fontSize: { md: '25px', xs: '18px' }, fontWeight: '500' }}>Foster a strong connection with your clients.</Typography>
                            <br />
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Graphic design is the art and practice of creating visual content to communicate messages. Designers use typography, imagery, color, and form to
                                craft visual representations of ideas and messages. Common applications of graphic design include branding and identity, where designers create logos,
                                business cards, letterheads, and brand guidelines that establish a visual identity for companies and organizations. In marketing and advertising, graphic
                                design is used to create posters, flyers, brochures, social media graphics, and advertisements that promote products, services, or events. Web design involves
                                crafting the visual layout and user interface for websites and mobile applications, ensuring a seamless and aesthetically pleasing user experience.
                                Print design encompasses developing layouts for printed materials such as magazines, newspapers, books, and packaging. Additionally, motion graphics
                                involve creating animated graphics and visual effects for various media, including videos, presentations, and digital interfaces.
                            </Typography>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <img
                                src={g1}
                                alt='service'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    aspectRatio: 3 / 2,
                                    objectFit: 'cover'
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <h2 style={{ color: 'black', }}>Graphic Design</h2>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                A company logo is a crucial element of a brand's image, serving as a visual representation of its identity and values. Effective logos communicate ideas and messages through visual concepts, making it easier to connect with potential clients. We specialize in designing
                                logos and other graphical elements to meet your specific needs, helping your business make a strong and lasting impression.
                            </Typography>
                            <br />
                            <Grid item md={12} xs={12}>
                                <Grid container spacing={3}>
                                    <Grid item md={1} xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={webTik}
                                            height='30px'
                                            width='auto'
                                            alt='teamWeb'
                                        />
                                    </Grid>
                                    <Grid item md={11} xs={11}>
                                        <h4>Event Promo Designs</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { md: '13px', xs: '12px' }, fontWeight: '500' }}>
                                            The success of any event hinges on effective marketing and the tools utilized for promotion.
                                            We provide expertly crafted designs tailored to your event and create essential promotional materials to ensure its success.
                                        </Typography>
                                    </Grid>
                                    <Grid item md={1} xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={webTik}
                                            height='30px'
                                            width='auto'
                                            alt='teamWeb'
                                        />
                                    </Grid>
                                    <Grid item md={11} xs={11}>
                                        <h4>Flyer designs</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { md: '13px', xs: '12px' }, fontWeight: '500' }}>
                                            Well-designed flyers containing relevant information can significantly boost your business. We offer high-quality printing for flyers in various sizes and shapes, including A4, A5, landscape, portrait, square, and rectangular, ensuring they leave a lasting impression on your customers.
                                        </Typography>
                                    </Grid>
                                    <Grid item md={1} xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={webTik}
                                            height='30px'
                                            width='auto'
                                            alt='teamWeb'
                                        />
                                    </Grid>
                                    <Grid item md={11} xs={11}>
                                        <h4>Brochure design</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { md: '13px', xs: '12px' }, fontWeight: '500' }}>
                                            An informative and well-designed brochure is a cornerstone of your business. We create the perfect brochures with the right color combinations and captivating designs, ensuring they are both attractive and impactful.
                                        </Typography>
                                    </Grid>
                                    <Grid item md={1} xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={webTik}
                                            height='30px'
                                            width='auto'
                                            alt='teamWeb'
                                        />
                                    </Grid>
                                    <Grid item md={11} xs={11}>
                                        <h4>Web & Media design (Logo, Artworks, poster)</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { md: '13px', xs: '12px' }, fontWeight: '500' }}>
                                            Every website needs creative visuals and ads to attract customers, such as posts, banners, e-flyers, and promotional videos. We provide innovative and unique ideas to effectively market your product.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '30px' }}>
                    <center>
                        <Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>WE ARE THE BEST</Typography>
                        <h2 style={{ color: 'black', }}>Top Digital Marketing Strategist For Your Project</h2>
                    </center>
                    <br /><br />
                    <Grid container spacing={5}>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={brand}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Brand Development</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                A highly interactive social media channel can significantly enhance a business's brand.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={result}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Track & Measure Results</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Establish KPIs to determine if your digital strategy is delivering the desired outcomes.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={precise}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Precise Targeting</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Tailor campaigns to customers' preferences when presenting them.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={planning}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Crafted Marketing Strategy</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Develop a marketing strategy focused on scalability, performance, and cost efficiency.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={efficiency}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Cost-Effective</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Digital marketing provides a cost-effective alternative to traditional marketing methods.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={experience}
                                    height='100px'
                                    width='auto'
                                    alt='teamWeb'
                                />
                            </div>
                            <br />
                            <h3 style={{ textAlign: 'center' }}>Executives with extensive seniority and deep expertise.</h3>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', marginTop: '5px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Start your digital strategy journey with the support of our skilled team from the outset.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <br /><br />
            <Box>
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
                            <a className="btnContact" href="/contactus">Contact Us</a>
                        </div>
                    </Box>
                </center>
            </Box >


        </>
    )
}

export default GraphicDesign