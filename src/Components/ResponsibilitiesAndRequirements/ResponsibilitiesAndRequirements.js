// USED PACKAGES
import React from 'react'

// CSS IMPORTS
import classes from './ResponsibilitiesAndRequirements.module.css'

// USED ICONS
import DoneAllIcon from '@material-ui/icons/DoneAll';

const ResponsibilitiesAndRequirements = ({data, title}) => {
    return (
        <>
            <div className={classes.Line}></div>   
            <div>
                <div>
                    <h2>
                        {title}
                    </h2>
                </div>
                <div>
                    <ul className={classes.List}>
                        {
                            data.map(d => {
                                return (
                                    <li key={d}><DoneAllIcon fontSize='small' className={classes.DoneAllIcon}/> {d}</li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
            <br />
        </>
    )
}

export default ResponsibilitiesAndRequirements
