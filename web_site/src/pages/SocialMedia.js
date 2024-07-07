import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import socialMedia from '../images/socialMedia.jpg'
import team from '../images/teammmm.jpg'
import webTik from '../images/tik.png'
import brand from '../images/brand-asset-management.png'
import result from '../images/results.png'
import precise from '../images/precision.png'
import planning from '../images/planning.png'
import efficiency from '../images/efficiency.png'
import experience from '../images/experience.png'
import back1 from '../images/tm.jpg'


function SocialMedia() {
    return (
        <>
            <Box sx={{
                height: { md: 'calc(60vh - 80px)', xs: '30vh' },
                backgroundImage: `url(${socialMedia})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }}
                className='no-select'
            >
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '10px' }}>
                    <a href='/digitalMarketing' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", fontWeight: '600', fontSize: { xs: '13px', md: '16px' } }}>Digital Marketing |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", fontWeight: '600', fontSize: { xs: '13px', md: '16px' } }}>Social Media Marketing</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '39px' }, }}>Social Media Marketing</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </Box>
            </Box >
            <br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '30px' }}>
                    <Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600', textAlign: 'center' }}>WHAT IS SOCIAL MEDIA MARKETING? </Typography>
                    <br />
                    <Grid container spacing={5} >
                        <Grid item md={12} xs={12} >
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', fontSize: { md: '35px', xs: '20px' }, fontWeight: '500', textAlign: 'center' }}>We allocate the appropriate resources to expand your social media presence.</Typography>
                            <br />
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center', }}>
                                Social media advertising allows for precise targeting of specific audiences, ensuring direct exposure to your
                                desired market, unlike traditional TV ads. Utilizing a variety of advanced management tools, social media marketing
                                maximizes the effectiveness of these platforms. Our team of skilled social media marketing executives is dedicated to growing
                                your online business,managing all social media accounts efficiently, and helping you achieve your goals.
                            </Typography>
                        </Grid>
                    </Grid>
                    <br /><br /><br /><br />
                    <Grid container spacing={5} >
                        <Grid item md={6} xs={12}>
                            <img
                                src={team}
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
                            <h2 style={{ color: 'black', }}>Social Media Marketing</h2>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Promoting a business through social media platforms is the most effective way to expand your customer base
                                and enhance brand growth, with over 3 billion active users worldwide. At CC Software Solutions, we excel in drawing the
                                right audience for your business by utilizing various tools to target the most relevant groups.
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
                                        <h4>Social marketing strategy</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { xs: '12px', md: '16px' }, fontWeight: '500' }}>
                                            An effective social media campaign requires a strategic approach tailored to a business's unique needs. Our skilled
                                            social media executives excel at crafting these strategies, focusing on targeting and attracting the right audience.
                                            By staying updated with the latest trends, our team ensures that your business garners more traffic and engagement,
                                            driving success in your social media endeavors.
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
                                        <h4>Content development</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { xs: '12px', md: '16px' }, fontWeight: '500' }}>
                                            We are dedicated to achieving business-oriented goals and are fully committed to your success.
                                            By leveraging technology, we enable you to start generating value quickly, ensuring a rapid and effective return on your investment.
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
                                        <h4>Professional project management</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { xs: '12px', md: '16px' }, fontWeight: '500' }}>
                                            Email marketing, when used correctly, is a powerful tool for increasing engagement and feedback from clients. Through our experience,
                                            we have found it to be the best way to build strong customer relationships. Our email marketing campaigns prioritize user-friendly
                                            templates and creative ideas to effortlessly connect with customers, leading to effective results.
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
                                        <h4>Effective communication</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { xs: '12px', md: '16px' }, fontWeight: '500' }}>
                                            Our approach is tailored for remote collaborations, ensuring a seamless experience that makes us feel like an extension of your in-house team.
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

export default SocialMedia