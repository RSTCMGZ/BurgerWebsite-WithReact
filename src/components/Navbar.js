import React from 'react'
import BurgerLogo from '../assets/burgerlogo.png'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div className='navbar'>
            <div className="main">
                <img src={BurgerLogo} alt="" />
                <div className='mainLink'>
                    <Link to="/">Anasayfa</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">Hakkımızda</Link>
                    <Link to="/contact">İletişim</Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar
