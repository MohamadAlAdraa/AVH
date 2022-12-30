// USED PACKAGES
import React, {useEffect} from 'react'
import { useMediaQuery } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import HtmlParser from 'react-html-parser'
import AOS from 'aos'
import 'aos/dist/aos.css'


const TextImage = ({Image, Text, Animated}) => {

    useEffect(() => {
        AOS.init();
    }, [])

    const mobileSize = useMediaQuery('(max-width: 750px)');
    const reverseContent = useMediaQuery('(max-width: 600px)');

    return (
        <Grid container justifyContent='center' alignItems='center'> 
           <Grid item xs={10} sm={6} data-aos={Animated ? 'slide-right' : '' } data-aos-duration={Animated ? "2000" : ''} >
                <br />
                <h2>{ HtmlParser(Text.title)}</h2>
                <br />
                <div style={{ lineHeight: '1.6', letterSpacing: '.5px', textAlign: 'justify' }}>{ HtmlParser(Text.description)}</div>
                <br />
           </Grid>
           <Grid item xs={10} sm={6} style={{  padding: mobileSize ? reverseContent ? '0px' : '20px' : '40px' }} data-aos={Animated ? 'zoom-in' : '' } data-aos-duration={Animated ? "3000" : ''}>
                <img src={Image} alt='' width='100%'/>
           </Grid>
        </Grid>
    )
}

export default TextImage
