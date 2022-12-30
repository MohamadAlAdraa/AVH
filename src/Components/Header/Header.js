// USED PACKAGES
import React, { useState, useEffect }  from 'react';
import { 
    AppBar,
    makeStyles,
    Slide,
    Toolbar,
    useMediaQuery,
    useScrollTrigger } from '@material-ui/core';

// USED COMPONENTS
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';
import MobileNavbar from './MobileNavbar/MobileNavbar';
import NavIcon from './MobileNavbar/NavIcon/NavIcon';
import DesktopNavbar from './DesktopNavbar/DesktopNavbar';

//USED IMAGES
import logo from '../../assets/Logos/AnchorVentures_Logo_white_2.png';


const useStyle = makeStyles(theme =>({
    AppBar: {
        background: '#000',
        fontSize: '12px'
    },
   Grow:{
       flexGrow: '1'
   },
   ScrollBack:{
       position: 'fixed',
       bottom: theme.spacing(2),
       right: theme.spacing(2),
   },
}));

const Header = () => {
    const classes = useStyle();

    const trigger = useScrollTrigger();
    
    const mobile = useMediaQuery('(max-width: 1023px)');
    const adjustLogoSize = useMediaQuery('(max-width: 400px)');
    
    const [NavBarIcon, toggleNavBarIcon] = useState(true);

    const ScrollTop = (e) =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const handleClickedMobileNavIcon = () =>{
        toggleNavBarIcon(!NavBarIcon);
    }
            

    const duration ={
        enteringScreen: 1500,
        exitingScreen: 1500
    }

    useEffect(() => {
        if(!mobile){
            toggleNavBarIcon(true);
        }
        
    }, [mobile])

    return (
        <AppBar position="fixed" elevation={trigger ? 5 : 0} className={classes.AppBar} >
            <Toolbar>
                <div className={classes.Grow} >
                    <img src={logo} alt="LOGO" width={adjustLogoSize ? '150px' : '200px'} height='auto' />
                </div>
                <div>
                    {
                        mobile ? <NavIcon handleNavClicked={handleClickedMobileNavIcon} NavBarIcon={NavBarIcon} /> : 
                        <DesktopNavbar  />
                    }
                </div>
            </Toolbar>

            {
                trigger ?  
                <Slide direction="down" in={trigger} mountOnEnter unmountOnExit>
                    <Fab color="inherit" size="small" aria-label="scroll back to top" className={classes.ScrollBack} onClick={ScrollTop}>
                        <KeyboardArrowUpIcon  />
                    </Fab> 
                </Slide>
                :
                null
            }
            
            <MobileNavbar handleLinkClicked={handleClickedMobileNavIcon}  mobile={mobile} NavBarIcon={NavBarIcon} duration={duration} />
            
        </AppBar>
    )
}

export default Header
