import React from 'react'
import './Skills.css';
import { FrontEnd } from './FrontEnd';
import { BackEnd } from './BackEnd';

export const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section-title'>Skills</h2>
        <span className='section-subtitle'>My Technical Level</span>

        <div className='skills-container container grid'>

            <FrontEnd/>
            <BackEnd/>

        </div>
    </section>
  )
}
