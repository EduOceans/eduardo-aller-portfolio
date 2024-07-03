import React from "react";
import './Header.css';
import { HashLink } from "react-router-hash-link";

function Header() {
    return (
        <>
        <section className="header-container">
            <div className='logo-container itm'>
                <img src='src/assets/logo-no-background-2.png'className='logo' alt='logo'></img>
            </div>
            <div className="menu-container">
                <ul className="list">
                    <HashLink to='/' className='menu-item active link itm'>Home</HashLink>
                    <HashLink to='#about' className='menu-item link itm'>About</HashLink>
                    <HashLink to='#projects' className='menu-item link itm'>Projects</HashLink>
                    <HashLink smooth to='#contact' className='menu-item link itm'>Contact</HashLink>
                    <li className='menu-item link'><a href="src/assets/Eduardo-Aller-CV.pdf" download className="btn download-cv"> Download CV</a></li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Header;