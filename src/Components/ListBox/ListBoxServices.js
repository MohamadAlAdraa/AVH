// USED PACKAGES
import React, { useState, useEffect } from 'react'
import { Container, Grid, useMediaQuery } from '@material-ui/core'
import AOS from 'aos'
import 'aos/dist/aos.css'

// USED DATA
import {services} from '../AvhService/Services/Services'

// USED COMPONENTS
import ServiceContent from '../ServiceContent/ServiceContent'
import TopBackground from '../TopBackground/TopBackground'

// CSS IMPORTS
import classes from './ListBoxServices.module.css'

// USED CUSTOM HOOK
import useService from '../../Hooks/getService'

const ListBoxServices = ({service}) => {

    const [activeLink, setActiveLink] = useState(service.name)
    const currentService = useService(activeLink);
    const [activeBack, setActiveBack] = useState(service.bg)
    const mobileSize= useMediaQuery('(max-width: 600px)')

    const handleChangeContent = (serviceName, bg) => {
        setActiveLink(serviceName);
        setActiveBack(bg);
    }

    useEffect(() => {
        AOS.init();
    }, [])


    const ListOfServices = services.map((service)=>{
        return(
           
                <div 
                data-aos='fade-out'
                data-aos-duration="2000"
                data-aos-once="true"
                key={service.name}
                className={classes.hvr_sweep_to_left} 
                onClick={()=>handleChangeContent(service.name, service.bg)} 
                style={{ borderRight: activeLink === service.name ? '5px solid #000' : '', 
                        background:  activeLink === service.name ? 'linear-gradient(90deg, #000 97%, #fff)' : '',
                        color: activeLink === service.name ? '#fff' : '',
                        padding: '10px' }} >
                    {service.name}
                </div>
        
        );
    })

    return (
        <>
            <TopBackground name={activeLink} bg={activeBack} />
            <div className={classes.ServiceDescription}>
                <Container>
                    <Grid container spacing={ mobileSize ? 0 : 10} alignItems='center'>
                        <Grid item sm={4} md={3}  className={classes.ListBoxServices} container>
                            {ListOfServices}
                        </Grid>
                        <Grid item xs={12} sm={8} md={9} >
                            <ServiceContent service={currentService[0]} />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default ListBoxServices
