// USED PACKAGES
import React from 'react';
import {  makeStyles, Zoom} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const useStyle = makeStyles(theme =>({
   Grow:{
       flexGrow: '1'
   },
   MobileNav:{
        position: 'fixed',
        top: '80px',
        left: '25%',
        width: '50%',
        margin: 'auto',
        zIndex:'999',
        boxShadow:'0 2px 5px #ccc'
   },
   MobileLinks:{
       display: 'block',
       width: '100%',
       background: '#fff',
       color: 'black',
       textAlign: 'left',
       padding: '0 5%',
       textDecoration: 'none',
       height: '35px',
       lineHeight: '35px',
       fontSize: '12px',
       letterSpacing: '1px',
       transition: 'all .2s',
       '&:hover':{
          color: '#ccc'
       },
       
   },
}));
const MobileNavbar = ({mobile, NavBarIcon, duration, handleLinkClicked}) => {
    const classes = useStyle();

    const MobileNav=
        <nav className={classes.MobileNav}>
            <Link to='/' onClick={handleLinkClicked} className={classes.MobileLinks}>Home</Link>
            <Link to='/about-us' onClick={handleLinkClicked} className={classes.MobileLinks}>About</Link>
            <Link to='/news-center' onClick={handleLinkClicked} className={classes.MobileLinks}>News center</Link>
            <HashLink onClick={handleLinkClicked} to='/#Businesses' className={classes.MobileLinks}>Business</HashLink>
            <Link to='/careers' onClick={handleLinkClicked} className={classes.MobileLinks}>Careers</Link>
            <Link to='/invest' onClick={handleLinkClicked} className={classes.MobileLinks}>Invest</Link>
            <Link to='/contact-us' onClick={handleLinkClicked} className={classes.MobileLinks}>Contact</Link>
        </nav>
    return (
        <Zoom in={mobile && !NavBarIcon} timeout={{ enter: duration.enteringScreen, exit: duration.exitingScreen }}>
                {MobileNav}
        </Zoom>
    )
}

export default MobileNavbar
