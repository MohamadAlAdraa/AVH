// USED PACKAGES
import React, {useEffect} from 'react'
import ReactHtmlParser from 'react-html-parser'
import AOS from 'aos'
import 'aos/dist/aos.css'

// CSS IMPORTS
import classes from './ContactCard.module.css'

const ContactCard = ({icon, title, body}) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className={classes.ContactCard}
        data-aos='zoom-in' data-aos-duration="2000" >
            <div className={classes.Icon}>
                <div className={classes.IconCenter}>
                    {icon}
                </div>
            </div>
            <div>
                <h2>{title}</h2>
            </div>
            <div className={classes.Body}>
            { ReactHtmlParser(body)}
            </div>
        </div>
    )
}

export default ContactCard
