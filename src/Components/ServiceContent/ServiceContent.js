// USED PACKAGES
import React from 'react'
import ReactHtmlParser from 'react-html-parser'

// CSS IMPORTS
import classes from './ServiceContent.module.css'


const ServiceContent = ({service}) => {
    return (
        <div className={classes.ServiceContent}>
            { ReactHtmlParser(service.desc)}
        </div>
    )
}

export default ServiceContent
