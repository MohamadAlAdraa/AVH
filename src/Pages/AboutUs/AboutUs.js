// USED PACKAGES
import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

// import HtmlParser from 'react-html-parser'
import { Container, Grid, useMediaQuery } from '@material-ui/core';

// USED COMPONENTS
import TextImage from '../../Components/TextImage/TextImage';
// import ImageText from '../../Components/ImageText/ImageText';
import TopBackground from '../../Components/TopBackground/TopBackground';
import VisionMissionBox from '../../Components/VisionMissionBox/VisionMissionBox';

// USED IMAGES
import AboutUsBg from '../../assets/Images/About-us.jpg';
import AboutUsDetails from '../../assets/Images/about-us-details.png'
import VisionImage from '../../assets/Images/Vision.png'
import MissionImage from '../../assets/Images/Mission.png'
import CEOImage from '../../assets/Images/CEO.jpg'

// CSS IMPORTS
import classes from './AboutUs.module.css';

// USED DATA
import * as data from './AboutUsData/AboutUsData'


const AboutUs = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const mobileSize = useMediaQuery('(max-width: 960px)')

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <>
            <TopBackground bg={AboutUsBg} name='About Us' />
            <div className={classes.AboutUs}>
                <Container>
                    <TextImage Text={data.Text} Image={AboutUsDetails}  />
                    <br /><br />
                    <Grid container spacing={ mobileSize ? 5 : 8} justifyContent={mobileSize ? 'center' : 'space-between'}>
                        <Grid item xs={12} sm={6} md={5}
                        data-aos='zoom-in'
                        data-aos-duration="3000">
                            <VisionMissionBox 
                            title={data.VisionMissionText.Mission.title}
                            body={data.VisionMissionText.Mission.body}
                            src={MissionImage}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={5}
                        data-aos='zoom-in'
                        data-aos-duration="3000">
                            <VisionMissionBox
                            title={data.VisionMissionText.Vision.title}
                            body={data.VisionMissionText.Vision.body}
                            src={VisionImage}
                           />
                        </Grid>
                    </Grid>
                    <br /><br /><br />
                    <TextImage Text={data.MessageFromCEO} Image={CEOImage}/>
                </Container>
            </div>
        </>
    )
}

export default AboutUs
