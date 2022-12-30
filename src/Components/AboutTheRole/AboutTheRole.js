// USED PACKAGES
import React from 'react'
import HtmlParser from 'react-html-parser' 

// CSS IMPORTS
import classes from './AboutTheRole.module.css'

const AboutTheRole = ({role}) => {
    return (
        <div className={classes.AboutTheRole}>
            <h2 className={classes.Title}>About The Role</h2>
            <div className={classes.Description}>
                {HtmlParser(role)}
            </div>
        </div>
    )
}

export default AboutTheRole
