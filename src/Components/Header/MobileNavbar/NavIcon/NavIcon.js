import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';

const NavIcon = ({handleNavClicked, NavBarIcon}) => {
    return (
        <div onClick={handleNavClicked} style={{ cursor: 'pointer' }}>
            {
                NavBarIcon ? <DehazeIcon /> : <CloseIcon />
            }
        </div>
    )
}

export default NavIcon
