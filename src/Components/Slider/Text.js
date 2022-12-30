import React from 'react'

const Text = ({title, subTitle}) => {
    return (
        <div style={{ color: 'white' }}>
            <div style={{ marginBottom: '10px', fontWeight: '900', fontSize: '18px', marginTop: '60px' }} >
                <p>{title}</p>
            </div>
            <div style={{ width:'260px', height: '5px', background: '#2699E6', marginBottom: '10px' }}></div>
            <div style={{ textIndent: '15px', textAlign: 'justify', marginRight: '40px', fontWeight: '400', maxWidth: '600px' }}>
                <p>{subTitle}</p>
            </div>
        </div>
    )
}

export default Text
