import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';


function DialogComponent({ rowData, setRowData, handleOpen, setHandleOpen }) {


    function handleClose() {
        setHandleOpen(false);
        setRowData({});
    }

    return (
        <>
            <Dialog
                aria-labelledby="customized-dialog-title"
                open={handleOpen}
                fullWidth
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {rowData.name}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon sx={{ color: 'black' }} />
                </IconButton>
                <DialogContent >
                    <Grid container spacing={2}>
                        <Grid item md={12} xs={12}>
                            {/* Swiper */}
                            <Swiper
                                scrollbar={{
                                    hide: true,
                                }}
                                modules={[Scrollbar]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img
                                        src={rowData.image1}
                                        alt='img01'
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={rowData.image2}
                                        alt='img02'
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontSize: { xs: '12px', md: '16px' }, textAlign: 'justify' }}>{rowData.description}</Typography>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontSize: { xs: '13px', md: '16px' }, fontWeight: 'bold' }}>Technology: </Typography>
                            <Typography sx={{ fontFamily: 'Montserrat, sans-serif', color: 'black', fontSize: { xs: '13px', md: '16px' }, }}>{rowData.tech}</Typography>
                        </Grid>
                    </Grid>
                </DialogContent>

            </Dialog>

        </>
    )
}

export default DialogComponent