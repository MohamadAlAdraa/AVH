// USED PACKAGES
import React from 'react'
import { Grid, useMediaQuery } from '@material-ui/core'

// CSS IMPORT
import classes from './Footer.module.css'

// USED IAMGES
import Footer_Logo from '../../assets/Logos/Logo_footer.png'

// USED COMPONENTS
import FooterTitle from './FooterTitle'
import QuickLink from './QuickLink'
import CopyRight from './CopyRight'

// USED ICONS
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'


const Footer = () => {

    const bigScreen = useMediaQuery('(min-width: 2000px)');
    const bigScreen1 = useMediaQuery('(min-width: 1700px)');
    const bigScreen2 = useMediaQuery('(min-width: 600px)');
    const smallScreen = useMediaQuery('(min-width: 500px)');
    return (
        <>
            <div className={classes.Footer}>
                <Grid container spacing={4} justifyContent='center' alignItems='center'>
                    <Grid item xs={12} sm={6} md={3} container justifyContent='center' spacing={2}>
                        <Grid item xs={10}>
                            <img src={Footer_Logo} alt="" width='100%' height='auto' />
                        </Grid>
                        <Grid item  xs={10}>
                            <p style={{ textAlign: 'justify' }}>A strategic mix of industry and technology to answer any business challenge</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} container justifyContent='center' spacing={2}>
                        <Grid item xs={10}>
                            <FooterTitle title= 'Success Stories' />
                        </Grid>
                        <Grid item xs={10}>
                            <p style={{ textAlign: 'justify' }}>Coming soon</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} container justifyContent='center' spacing={2}>
                        <Grid item xs={10}>
                            <FooterTitle title= 'Quick Links' />
                        </Grid>
                        <Grid item xs={10} container spacing={2}>
                            <Grid item xs={12}><QuickLink name='About' path='/about-us' /></Grid>
                            <Grid item xs={12}><QuickLink name='Why Us' path='#' /></Grid>
                            <Grid item xs={12}><QuickLink name='Contact' path='/contact-us' /></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} style={{  paddingLeft: bigScreen ? '150px' : bigScreen1 ? '100px' : bigScreen2 ?  '60px' : smallScreen ? '70px' : '55px'  }}>
                        <Grid item xs={10}>
                            <FooterTitle title= 'Contact' />
                        </Grid>
                        <Grid item xs={10} container spacing={1}>
                            
                            <Grid item xs={12}>
                                <br />
                                <h3>Australia</h3>
                            </Grid>
                            <Grid item xs={12}>
                                <p><strong>Address</strong>: <br /> Lot 1 - Level 2</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p>23-29 South Street</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p>Ryadalmere NSSW 2116 <br/> Sydney, Australia</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p><strong>Email : </strong> <a style={{ textDecoration: 'none', color: 'white'}} href = "mailto: info@anchor.holdings">info@anchor.holdings</a></p>
                            </Grid>
                            <Grid item xs={12}>
                                <p><strong>Phone (LB) : </strong> <a style={{ textDecoration: 'none', color: 'white'}} href = "tel: +61286247500"> +61 2 8624 7500</a></p>
                            </Grid>
                            <br />
                            <Grid item xs={12} container>
                                <Grid item xs={3}><a href="https://www.facebook.com/" className={classes.SocialMedia}><FacebookIcon /></a></Grid>
                                <Grid item xs={3}><a href="https://twitter.com/?lang=en" className={classes.SocialMedia}><TwitterIcon /></a></Grid>
                                <Grid item xs={3}><a href="https://www.instagram.com/" className={classes.SocialMedia}><InstagramIcon /></a></Grid>
                                <Grid item xs={3}><a href="https://www.linkedin.com/" className={classes.SocialMedia}><LinkedInIcon /></a></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div  className={classes.Lines}>
                    <div className={classes.Line}></div>
                    <div className={classes.Line}></div>
                    <div className={classes.Line}></div>
                </div>
            </div>
            <CopyRight />
        </>
    )
}

export default Footer
