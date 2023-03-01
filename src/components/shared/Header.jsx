import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
    return (
        <header className='navbar'>
            <h1 className='navbar__title letter_Neon'>
                <Link to='/'>e-commerce</Link>
            </h1>
            <nav className='navbar__menu'>
                <ul className='navbar__menu-li letter_Neon'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/user/login'>Login</Link></li>
                    <li><Link to='/purchase'>Purchases</Link></li>
                    <li><Link to='/cart'>Car</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header