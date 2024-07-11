import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import product from '../images/product.jpg'
import ideation from '../images/ideation.jpg'
import research from '../images/research.jpg'
import concept from '../images/conscept.jpg'
import prototype from '../images/prototype.png'
import productssss from '../images/productssss.jpg'
import back1 from '../images/tm.jpg'

function PrductDesign() {
    return (
        <>
            <Box sx={{
                height: { md: 'calc(60vh - 80px)', xs: '30vh' },
                backgroundImage: `url(${product})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }}
                className='no-select'
            >
                <div style={{ display: 'flex', justifyContent: 'start', paddingTop: '3vh', paddingLeft: '20px' }}>
                    <a href='/' style={{ textDecoration: 'none', }}><Typography sx={{ color: '#B85EB3', fontFamily: "Montserrat, sans-serif", fontWeight: '600', fontSize: { xs: '13px', md: '16px' } }}>Home |</Typography></a>&nbsp;<Typography sx={{ color: '#4DBEE9', fontFamily: "Montserrat, sans-serif", fontWeight: '600', fontSize: { xs: '13px', md: '16px' } }}>Product Design</Typography>
                </div>
                <Box sx={{
                    height: { md: 'calc(53vh - 80px)', xs: '30vh' },
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    paddingLeft: '3vw',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '6vw', xs: '39px' }, }}>Product Design</Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </Box>
            </Box >
            <br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '97%', md: '88%' }, padding: '30px' }}>
                    <div style={{ borderImage: 'fill 0 linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))', padding: "15px", borderRadius: '28px' }}>
                        <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '2.3vw', xs: '20px' }, fontWeight: 'bold', textAlign: 'center' }}>Create Cutting-Edge User Experiences for Your Digital Products</Typography>
                        <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '2vw', xs: '19px' }, fontWeight: '400', textAlign: 'center' }}>Developed for Exclusive Partnerships</Typography>
                    </div>
                    <br /><br /><br />
                    <Grid container spacing={5}>
                        <Grid item md={12} xs={12} >
                            <Typography sx={{ color: 'black', fontFamily: "Montserrat, sans-serif", fontSize: { md: '2.3vw', xs: '23px' }, fontWeight: 'bold', textAlign: 'center' }}>The Five Stages of Product Design</Typography>
                        </Grid>
                        <br /> <br /> <br /> <br /> <br />
                        <Grid item md={6} xs={12}>
                            <img
                                src={ideation}
                                alt='service'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    aspectRatio: 3 / 2,
                                    objectFit: 'cover'
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Brainstorming and ideation.</h2>
                                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>The first stage of the product development process is focused on idea generation. Assemble your team and get product ideas out on the floor. Your deliverables may be a loose roadmap to your final product or a simple list of concepts to research, evaluate, and rule out in the second stage. </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ display: { md: 'none', xs: 'flex' } }}>
                            <img
                                src={research}
                                alt='service'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    aspectRatio: 3 / 2,
                                    objectFit: 'cover'
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Research and idea screening.</h2>
                                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>The ideas you've generated need to be filtered through an objective screening process. Ideally, you'll use a combination of internal and external processes to get the most actionable data from this phase. You'll gauge your target customers' response and secure product validation.
                                    Before assembling focus groups or sending out surveys, seek feedback from your current hires. Or, work with a business consultant if you don't already have a sounding board with industry knowledge. This helps you avoid the pursuit of expensive or unnecessarily complex ideas.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ display: { md: 'flex', xs: 'none' } }}>
                            <img
                                src={research}
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
                            <img
                                src={concept}
                                alt='service'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    aspectRatio: 3 / 2,
                                    objectFit: 'cover'
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Concept development.</h2>
                                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>At the end of screening, only a few well-received and realistic new product ideas should remain. You'll need a comprehensive plan and blueprint before launching into a prototype.Assess the costs of designing, manufacturing, packaging, and distributing your leading product concept. You may plan to use third-party vendors or create internal systems where possible. Identify the human and capital resources you'll need, and the core features that must exist for a working product. In addition, begin to break out a potential marketing plan and larger business strategy, including revenues and market share for this product.   </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ display: { md: 'none', xs: 'flex' } }}>
                            <img
                                src={prototype}
                                alt='service'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    aspectRatio: 3 / 2,
                                    objectFit: 'cover'
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Prototyping and evaluation.</h2>
                                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>
                                    In this stage, you'll breathe life into your product concept. It's time to move into design and production. You'll create an actual prototype or an approximate mockup. Some businesses run a small-scale release at this point. It's also an option to assemble a select group of your target customers to evaluate the nearly completed product.
                                    This is one of your last opportunities to work out major technical issues or add highly demanded features. If you're developing an app, for example, you'll need to run beta tests.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ display: { md: 'flex', xs: 'none' } }}>
                            <img
                                src={prototype}
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
                            <img
                                src={productssss}
                                alt='service'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    aspectRatio: 3 / 2,
                                    objectFit: 'cover'
                                }}
                            />
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}> Product rollout and iteration.</h2>
                                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: 'black', textAlign: 'center' /* fontSize: { md: '40px', xs: '39px' }, fontWeight: '500' */ }}>Also known as commercialization, this is when your product finally enters the marketplace. This is essentially the launch of your minimum viable product (MVP). It's common for your first release to include only the core features so that your product can simply move forward and start generating sales figures.By the time of your product launch, your supporting operations should be prepared. Your customer and technical support should be ready. Plus, you should have determined your pricing and distributed necessary details to the rest of your team — sales, marketing, distribution, and so on.    </Typography>
                            </Box>
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

export default PrductDesign