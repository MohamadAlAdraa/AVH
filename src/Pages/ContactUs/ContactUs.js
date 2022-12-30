// USED PACKAGES
import React, {useEffect}  from 'react'
import { Button, Container, Grid, Icon, TextField, useMediaQuery } from '@material-ui/core'

// USED COMPONENTS
import TopBackground from '../../Components/TopBackground/TopBackground'
import ContactCard from '../../Components/ContactCard/ContactCard'

// USED IMAGES
import ContactUsBg from '../../assets/Images/contact_us.jpg'

// CSS IMPORTS
import classes from './ContactUs.module.css'

// USED ICONS
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

const ContactUs = () => {

    const mobileSize = useMediaQuery('(max-width: 961px)');

    const handleSubmit = (e) =>{
        e.preventDefault();
        document.getElementById('contactForm').reset();
    }

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <>
            <TopBackground bg={ContactUsBg} name='Contact Us' />
            <div className={classes.ContactUs}>
                <Container>
                    <h2 style={{ textAlign: 'center' }}>Drop Us Message for any Query</h2>
                    <br /><br />
                    <Container>
                        <form style={{ width: '100%', padding: mobileSize ? '0' : '0 150px' }} id='contactForm' autoComplete="off" >
                            <Grid container spacing={3} justifyContent='center' alignItems='center'>
                                    <Grid item container spacing={3}  xs={12} justifyContent='space-between' alignItems='center' >
                                        <Grid item xs={12} md={6}>
                                            <TextField id="Name" label="Name" variant='outlined' fullWidth />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField id="Email" label="Email" variant='outlined' fullWidth />
                                        </Grid>
                                    </Grid>
                                    <Grid item container spacing={3}  xs={12} justifyContent='space-between' alignItems='center' >
                                        <Grid item xs={12} md={6}>
                                            <TextField id="Phone" label="Phone" variant='outlined' fullWidth />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField id="Subject" label="Subject" variant='outlined' fullWidth />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}  >
                                        <TextField multiline id="Message" label="Your Message" variant='outlined' fullWidth />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Button
                                            variant="contained"
                                            role='button'
                                            onClick={handleSubmit}
                                            className={classes.button}
                                            endIcon={<Icon>send</Icon>}
                                            fullWidth
                                            size='large'
                                            style={{ background: '#000', color: 'white' }}
                                        >
                                            Send
                                        </Button>
                                    </Grid>
                            </Grid>
                        </form>
                    </Container>

                    <br /><br />

                    <Grid container justifyContent='center' spacing={4}>
                        <Grid item xs={12} sm={7} md={4}>
                            <ContactCard 
                            icon={<MailOutlineIcon fontSize='large' />}
                            title='Drop us an email at:'
                            body='<a href = "mailto: info@anchor.holdings">info@anchor.holdings</a>' />
                        </Grid>
                        <Grid item xs={12} sm={7} md={4}>
                            <ContactCard 
                            icon={<LocationOnIcon fontSize='large' />} 
                            title='Come by at:'
                            body='<p>Lot 1 - Level 2</p><p>23-29 South street</p><p>Ryadalmere NSSW 2116</p><p>Sydney, Australia</p>' />
                        </Grid>
                        <Grid item xs={12} sm={7} md={4}>
                            <ContactCard 
                            icon={<PhoneInTalkIcon fontSize='large'  />}
                            title='Call us at:'
                            body='<span>LB: <a href = "tel: +61286247500"> +61 2 8624 7500</a></span>'  />
                        </Grid>
                    </Grid>
                
                </Container>

            </div>
        </>
    )
}

export default ContactUs
