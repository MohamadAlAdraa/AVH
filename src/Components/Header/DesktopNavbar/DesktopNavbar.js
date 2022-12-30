// USED PACKAGES
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const useStyle = makeStyles(theme =>({
   Links:{
       textDecoration: 'none',
       color: '#fff',
       padding: '0 10px',
       letterSpacing: '1px',
       wordSpacing: '.5px',
       transition: 'all .5s',
       '&:hover':{
            color: '#ccc'
       }
   }

}));
const DesktopNavbar = () => {
    const classes = useStyle();
    
    return (
        <nav>
            <Link to='/' className={classes.Links}>Home</Link>
            <Link to='/about-us' className={classes.Links}>About</Link>
            <Link to='/news-center' className={classes.Links}>News center</Link>
            <HashLink to='/#Business' className={classes.Links}>Businesses</HashLink>
            <Link to='/careers' className={classes.Links}>Careers</Link>
            <Link to='/invest' className={classes.Links}>Invest</Link>
            <Link to='/contact-us' className={classes.Links}>Contact</Link>
        </nav>
    )
}

export default DesktopNavbar
