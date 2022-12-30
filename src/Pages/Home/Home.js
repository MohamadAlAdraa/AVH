// USED PACKAGES
import React, {useEffect} from 'react'

// USED COMPONENTS
import AvhService from '../../Components/AvhService/AvhService'
import Slider from '../../Components/Slider/Slider'
import HomeDetails from '../../Components/HomeDetails/HomeDetails'

// CSS IMPORT
import classes from './Home.module.css'

const Home = () => {
    
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <>
            <Slider />
            <div className={classes.HomeDetails}>
                <HomeDetails />
            </div>
            <div className={classes.AvhService}>
                <AvhService />
            </div>
        </>
    )
}

export default Home
