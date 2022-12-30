// USED PACKAGES
import React from 'react'
import { Container } from '@material-ui/core'

// USED DATA
import data from './HomeDetailsData/HomeDetailsData';

// USED COMPONENTS
import ImageText from '../ImageText/ImageText'
import TextImage from '../TextImage/TextImage';

const HomeDetails = () => {

    
    return (
        <Container style={{ zIndex: '100' }}>
            <ImageText Image={data.d1.Image} Text={data.d1.Text} Animated />
            <TextImage Image={data.d2.Image} Text={data.d2.Text} Animated />
        </Container>
    )
}

export default HomeDetails
