// USED PACKAGES
import React from 'react'
import { useMediaQuery } from '@material-ui/core'

// CSS IMPORTS
import classes from './TopBackground.module.css'

const TopBackground = ({bg, name}) => {

    const mobileSize= useMediaQuery('(max-width: 961px)')

    return (
        <div className={classes.TopBackground} >
            <img src={bg} alt="" className={classes.Bg} />
            <div className={classes.Overlay}></div>
            <div className={classes.Title}>
                <h1 style={{ letterSpacing: '1px', fontSize: mobileSize ? '14px' : '' }}>{name}</h1>
            </div>
            <div className={classes.Path} style={{ fontSize: mobileSize ? '14px' : '' }}>
                <span>Home  &gt; </span> 
                <span style={{ fontWeight: '800' }}>{name}</span>
            </div>
        </div>
    )
}

export default TopBackground
