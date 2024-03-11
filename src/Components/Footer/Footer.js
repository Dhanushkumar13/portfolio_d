import React from 'react';
import './Footer.css';
export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container container'>
            <h1 className='footer-title'>d.</h1>

            <ul className='footer-list'>
                <li>
                    <a href='#about' className='footer-link'>
                        About
                    </a>
                </li>

                <li>
                    <a href='#projects' className='footer-link'>
                        Projects
                    </a> 
                </li>
            </ul>
        <span className='footer-copy'>&#169; Dhanush. All rights reserved</span>
        </div>
    </footer>
  )
}
