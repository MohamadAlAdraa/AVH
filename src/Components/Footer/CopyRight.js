// USED PACKAGES
import React from 'react'
import { useMediaQuery } from '@material-ui/core';

const CopyRight = () => {
    const mobileSize = useMediaQuery('(max-width: 961px)');
    const year = new Date().getFullYear();

    const style = {
        backgroundColor : '#000',
        color: '#fff',
        paddingTop: '20px',
        paddingBottom: '20px',
        width: '100%',
        display: 'flex',
        borderTop: '1px solid rgba(255, 255, 255, 0.3)',
        flexDirection: mobileSize ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        <div style={style}>
            <div>
                &copy; {year} <strong>Anchor Venture Holdings.&nbsp;&nbsp;</strong>
            </div>
            <div>
                All Rights Reserved.
            </div>
        </div>
    )
}

export default CopyRight
