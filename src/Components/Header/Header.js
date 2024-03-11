import React, { useState } from 'react'
import "./Header.css";

export const Header = () => {
    // Change background header
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        // Whenever the scroll is higher than 200 viewport height, add the scroll-header class to a tag with header tag
        if(this.scrollY >= 80) header.classList.add
        ("scroll-header");
        else header.classList.remove("scroll-header");
    });
    // FOR MENU TOGGLING
    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='/' className='nav-logo'>d.</a>

            <div className={toggle ? 'nav-menu show-menu' : 'nav-menu'}>
                <ul className='nav-list grid'>
                    <li className='nav-item'>
                        <a href='#home' onClick={()=> setActiveNav('#home')}className={activeNav === '#home' ? 'nav-link active-link' : 'nav-link'}>
                            <i className='uil uil-estate nav-icon'></i>Home
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#about' onClick={()=> setActiveNav('#about')}className={activeNav === '#about' ? 'nav-link active-link' : 'nav-link'}>
                            <i className='uil uil-user nav-icon'></i>About
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#skills' onClick={()=> setActiveNav('#skills')}className={activeNav === '#skills' ? 'nav-link active-link' : 'nav-link'}>
                            <i className='uil uil-file-alt nav-icon'></i>Skills
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#experience' onClick={()=> setActiveNav('#experience')}className={activeNav === '#experience' ? 'nav-link active-link' : 'nav-link'}>
                            <i className='uil uil-briefcase nav-icon'></i>Experience
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#projects' onClick={()=> setActiveNav('#projects')}className={activeNav === '#projects' ? 'nav-link active-link' : 'nav-link'}>
                            <i className='uil uil-scenery nav-icon'></i>Projects
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#contact' onClick={()=> setActiveNav('#contact')}className={activeNav === '#contact' ? 'nav-link active-link' : 'nav-link'}>
                            <i className='uil uil-message nav-icon'></i>Contact
                        </a>
                    </li>
                    
                </ul>

                <i className='uil uil-times nav-close' onClick={()=> setToggle(false)}></i>
            </div>

            <div className='nav-toggle' onClick={()=> setToggle(true)}>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>
  )
}
