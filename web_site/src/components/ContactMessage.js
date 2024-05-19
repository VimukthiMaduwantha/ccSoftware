import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Grid, Typography } from '@mui/material';

function ContactMessage() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [success, setSuccess] = useState('')
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("userData::> ", userData)
        const serviceID = 'service_yhthxh1';
        const templateID = 'template_5r09hqd';
        const publicKey = 'yGCXG9ikdRtiZS5NP';

        const templateParams = {
            from_name: userData.name,
            from_email: userData.email,
            message: userData.message,
        }

        emailjs.send(serviceID, templateID, templateParams, publicKey).then((response) => {
            if (response.status === 200) {
                setUserData({
                    name: '',
                    email: '',
                    message: ''
                })
                setSuccess('Message successfully sent')
            }
        }).catch((err) => {
            console.log("Error occured " + err)
        })
    };

    setTimeout(() => {
        setSuccess(''); // Assuming setSuccess('') resets the state
    }, 3000);

    function handleChange(e) {
        const target = e.target;
        const value = target.value;
        setUserData({
            ...userData,
            [e.target.name]: value
        })
    }



    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                        <div className="form-control">
                            <input
                                type="text"
                                name='name'
                                value={userData.name}
                                onChange={(e) => handleChange(e)}
                                placeholder='Enter Your Name'
                                required
                                className="inputContact input-alt"
                            />
                            <span class="input-border input-border-alt"></span>
                        </div>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <div className="form-control">
                            <input
                                type="email"
                                name='email'
                                value={userData.email}
                                onChange={(e) => handleChange(e)}
                                className="inputContact input-alt"
                                placeholder='Enter Your Email'
                                required
                            />
                            <span class="input-border input-border-alt"></span>
                        </div>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <div className="form-control">
                            <textarea
                                name='message'
                                value={userData.message}
                                onChange={(e) => handleChange(e)}
                                className="inputContact input-alt"
                                placeholder='Enter Your Message'
                                required
                            />
                            <span class="input-border input-border-alt"></span>
                        </div>
                    </Grid>
                </Grid>
                <br />
                <button className='contactBtn' type="submit"> Send
                    <span></span>
                </button>
                <br />
                <Typography sx={{ color: '#D3D3D4', fontFamily: "Montserrat, sans-serif", fontSize: { md: '17px', xs: '15px' }, fontWeight: '500' }}>{success}</Typography>

            </form>
        </>
    )
}

export default ContactMessage
