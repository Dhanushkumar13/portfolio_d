import React from 'react'
import './Projects.css'
import { Works } from './Works'

export const Projects = () => {
  return (
    <section className='work section' id='projects'>
        <h2 className='section-title'>Projects</h2>
            <span className='section-subtitle'>Most Recent works</span>

            <Works/>
    </section>
  )
}
