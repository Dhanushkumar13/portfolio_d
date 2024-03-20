import React from 'react'

export const Info = () => {
  return (
    <div className='about-info grid'>
        <div className='about-box'>
            <i className='bx bx-award about-icon'></i>

            <h3 className='about-title'>Interest</h3>
            <span className='about-subtitle'>FrontEnd/ BackEnd</span>
        </div>

        <div className='about-box'>
            <i className='bx bx-briefcase-alt about-icon'></i>

            <h3 className='about-title'>Completed</h3>
            <span className='about-subtitle'>10 + Projects</span>
        </div>

        <div className='about-box'>
            <i className='bx bx-support about-icon'></i>
            
            <h3 className='about-title'>Supports</h3>
            <span className='about-subtitle'>Online 24/7</span>
        </div>
    </div>
  )
}
