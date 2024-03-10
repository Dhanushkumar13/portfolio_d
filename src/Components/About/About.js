import React from 'react'
import './About.css';
import AboutImg from '../../Assets/me.jpg';
import CV from '../../Assets/Dhanush-Cv.pdf';
import { Info } from './Info';

export const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section-title'>About Me</h2>
        <span className='section-subtitle'>My Introduction</span>

        <div className='about-container container grid'>
            <img src={AboutImg} alt='' className='about-img'></img>
            <div className='about-data'>
                <Info/>
                <p className='about-description'>Full Stack Developer, I create web pages with atmost create and note to detail, I am a budding developer with great passion to work with challenging opportunities.</p>
                <a href={CV} className='button button--flex'>Download Resume
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="var(--title-color)" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </a>
            </div>
        </div>
    </section>
  )
}
