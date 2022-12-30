// USED PACKAGES
import React from 'react'
import { Link } from 'react-router-dom'

const QuickLink = ({name, path}) => {
    return (
        <div>
            <Link style={{ textDecoration: 'none', color: 'white'}} to={path}>{name}</Link>
        </div>
    )
}

export default QuickLink
