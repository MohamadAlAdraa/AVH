// USED PACKAGES
import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core'

// USED COMPONENTS
import TopBackground from '../../Components/TopBackground/TopBackground'
import TextImage from '../../Components/TextImage/TextImage'

// USED Images
import CareersBg from '../../assets/Images/Careers_bg.png'
import CareersImage from '../../assets/Images/Careers.jpeg'

// CSS IMPORTS
import classes from './Careers.module.css'

// USED DATA
import {data} from './CareersData/CareersData'
import AboutTheRole from '../../Components/AboutTheRole/AboutTheRole'
import ResponsibilitiesAndRequirements from '../../Components/ResponsibilitiesAndRequirements/ResponsibilitiesAndRequirements'
import PositionApplication from '../../Components/PositionApplication/PositionApplication'

const Careers = () => {

    const [role, setRole] = useState('');
    const [activePosition, setActivePosition] = useState('');
    const [responsibilities, setResponsibilities] = useState([]);
    const [requirements, setRequirements] = useState([]);
    const [showOverview, setShowOverview] = useState('');
    
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const showRole = (role, title, overview) =>{
        setRole(role);
        setActivePosition(title);
        setResponsibilities(overview.responsibilities);
        setRequirements(overview.requirements);
        setShowOverview('');
    }

    const handleOverview = () =>{
        setShowOverview('overview');
    }

    const handleApplication = () =>{
        setShowOverview('application');
    }
    return (
        <>    
            <TopBackground bg={CareersBg} name='Careers' />
            <div className={classes.Careers}>
                <Container>
                    <TextImage Image={CareersImage} Text={data.CareersAtAvh}  />
                    <br /><br />
                    <h2>Featured Positions</h2>

                    <div className={classes.FeaturedPositionContainer}>
                        {
                            data.FeaturedPositions.map( fp => {
                                return(
                                <div 
                                    className={classes.FeaturedPosition}
                                    onClick={() => showRole(fp.role, fp.title, fp.overview)}
                                    style={{ backgroundColor: activePosition !== fp.title ? '#000' : '#339bc6' }}
                                    key={fp.title}
                                    >
                                    {fp.title}
                                </div>)
                            })
                        } 
                    </div>
                    <div className={classes.AboutTheRole}>
                        <div className={classes.Role}>
                            {
                                role === '' ? null :  
                                <>
                                <div>
                                    <AboutTheRole role={role} />
                                </div>
                                <div className={classes.OverviewAndApplication}>
                                    <div onClick={handleOverview}
                                    style={{ backgroundColor: showOverview === 'overview' ? '#339bc6' : '#ccc', color: showOverview === 'overview' ? '#fff' : '#000'  }}
                                    >
                                        Overview
                                    </div>
                                    <div onClick={handleApplication}
                                    style={{ backgroundColor: showOverview === 'application' ? '#339bc6' : '#ccc', color: showOverview === 'application' ? '#fff' : '#000'  }}
                                    >
                                        Application
                                    </div>
                                </div>
                                </>
                            }
                        </div>
                       
                    </div>

                    {
                        showOverview === 'overview' ? 
                        <> 
                            <ResponsibilitiesAndRequirements data={responsibilities} title='Responsibilities' />
                            <ResponsibilitiesAndRequirements data={requirements} title='Requirements' />
                        </> :
                        showOverview === 'application' ?
                            <PositionApplication /> :
                            null
                    }
                    
                </Container>
            </div>
        </>
    )
}

export default Careers
