import React, { useState } from 'react'
import "./Header.css";

export const Header = () => {
    // FOR MENU TOGGLING
    const [toggle, setToggle] = useState(false);
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='/' className='nav-logo'>d.</a>

            <div className={toggle ? 'nav-menu show-menu' : 'nav-menu'}>
                <ul className='nav-list grid'>
                    <li className='nav-item'>
                        <a href='#home' className='nav-link active-link'>
                            <i className='uil uil-estate nav-icon'></i>Home
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#about' className='nav-link'>
                            <i className='uil uil-user nav-icon'></i>About
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#skills' className='nav-link'>
                            <i className='uil uil-file-alt nav-icon'></i>Skills
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#experience' className='nav-link'>
                            <i className='uil uil-briefcase nav-icon'></i>Experience
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#projects' className='nav-link'>
                            <i className='uil uil-scenery nav-icon'></i>Projects
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#contact' className='nav-link'>
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
