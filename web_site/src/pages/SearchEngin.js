import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import searchEngin from '../images/searchEmgine.jpg'
import seo from '../images/seo.jpg'
import webTik from '../images/tik.png'
import brand from '../images/brand-asset-management.png'
import result from '../images/results.png'
import precise from '../images/precision.png'
import planning from '../images/planning.png'
import efficiency from '../images/efficiency.png'
import experience from '../images/experience.png'
import back1 from '../images/tm.jpg'

function SearchEngin() {
    return (
        <>
            <Box sx={{
                height: { md: 'calc(60vh - 80px)', xs: '30vh' },
                backgroundImage: `url(${searchEngin})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }}
                className='no-select'
            >
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '1vw' }}>
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>Search Engine Optimization</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '39px' }, }}>Search Engine Optimization</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </Box>
            </Box >
            <br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '30px' }}>
                    <Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", opacity: '0.8', fontWeight: '600' }}>WHAT IS SEARCH ENGINE OPTIMIZATION? </Typography>
                    <br />
                    <Grid container spacing={5} >
                        <Grid item md={12} xs={12} >
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', fontSize: { md: '25px', xs: '18px' }, fontWeight: '500' }}>Specialization in SEO for Enhancing Your Website's Performance.</Typography>
                            <br />
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                Search Engine Optimization (SEO) is vital for any business with an online presence, as it drives organic traffic
                                without the expenses associated with Pay-Per-Click (PPC) campaigns. By implementing SEO, businesses aim
                                to improve their search engine rankings, thereby enhancing their visibility and attracting more visitors.
                                This increased visibility on search engines helps businesses gather more traffic and potential customers
                                without the need to pay for each visitor, making SEO an essential strategy for online success.
                            </Typography>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <img
                                src={seo}
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
                            <h2 style={{ color: 'black', }}>Search Engine Optimization</h2>
                            <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                How do you track your business's progress on social media and ensure you are gaining the necessary visibility?
                                The key lies in SEO, which is especially beneficial for businesses with a website. By planning an effective SEO strategy,
                                you can elevate your business to the next level. Through thorough market analysis, we provide our clients with the best strategies to ensure their
                                business receives the exposure it deserves.
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
                                        <h4>Local SEO</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { md: '13px', xs: '12px' }, fontWeight: '500' }}>
                                            Local SEO is essential for attracting local traffic to your website.
                                            It helps ensure that people in your vicinity with
                                            similar interests are suggested your products. The primary objective is to appear at the top of search results for potential nearby buyers.
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
                                        <h4>Keyword Research</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { md: '13px', xs: '12px' }, fontWeight: '500' }}>
                                            Some users search for relevant products using specific keywords; this research allows you to dominate your domain when these keywords are used. Optimizing for relevant keywords is one of the best strategies to enhance your SEO.
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
                                        <h4>Backlinking</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { md: '13px', xs: '12px' }, fontWeight: '500' }}>
                                            Backlinking drives traffic to your website from various web pages and online platforms. The more backlinks your website has, the higher it will rank in search engine results.
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
                                        <h4>SEO Audits</h4>
                                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'justify', marginTop: '10px', fontSize: { md: '13px', xs: '12px' }, fontWeight: '500' }}>
                                            SEO audits are crucial for improving search engine results, making them highly effective for online businesses. Our team, with years of experience in this field, conducts thorough research and analysis of your current website, providing a detailed breakdown to fix any issues that hinder your site's full potential.
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

export default SearchEngin