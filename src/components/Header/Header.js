import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header-left'>
                <h3>Logo</h3>
            </div>
            <div className='header-center'>
                <h5>Username</h5>
            </div>
            <div className='header-right'>
                <h5>Logout</h5>
            </div>
        </div>
    )
}

export default Header
