// USED PACKAGES
import React from 'react'
import HtmlParser from 'react-html-parser'

// CSS IMPORTS
import classes from './VisionMissionBox.module.css'

const VisionMissionBox = ({title, body, src}) => {

    return (
        <div 
        className={classes.VisionMissionBox}
        
         >
            <div>
                <img src={src} alt="" width='150px' />
            </div>
            <div>
                <h2>{title}</h2>
            </div>
            <br />
            <div>
                {HtmlParser(body)}
            </div>
        </div>
    )
}

export default VisionMissionBox
