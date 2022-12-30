// USED PACKAGES
import React, {useEffect} from 'react'
import { Container, Grid } from '@material-ui/core'
import { useHistory } from 'react-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

// CSS IMPORTS
import classes from './AvhService.module.css'

// USED DATA
import { services } from './Services/Services'

const AvhService = () => {
    const history = useHistory();

    useEffect(() => {
        AOS.init();
    }, [])

    const handleReadService = (serviceName) => {
        history.push({
            pathname: `/services/${serviceName}`
        })
    }
    const Services = services.map((service, index)=>{
           return(
            <Grid 
            item
            xs={12} 
            sm={6} 
            md={4} 
            lg={3} 
            key={service.name} 
            data-aos={ index%2===0 ? "zoom-in" : "zoom-out"}
            data-aos-duration="2000">
                <div className={classes.AvhService} onClick={()=>handleReadService(service.name)}>
                    <div className={classes.Icon}><img src={service.imgSrc} alt={service.name} width='100px' /></div>
                    <div className={classes.Title}><span>{service.name}</span></div>
                </div>
            </Grid>);
    }) 

    return (
        <Container>
            <p className={classes.SectionTitle} id='Business'>Advanced Business Solutions</p>
            <Grid container spacing={6}>
                {Services}
            </Grid>
       </Container>
    )
}

export default AvhService
