import React, { useState } from 'react'
import './Qualification.css'

export const Qualification = () => {
    const [toggle, setToggle] = useState(1);

  return (
    <section className='qualification-sections' id='experience'>
        <h2 className='section-title'>Qualification</h2>
        <span className='section-subtitle'>My Personal Journey</span>

        <div className='qualification-container container'>
            <div className='qualification-tabs'>
                <div className={toggle === 1 ? 'qualification-button qualification-active button--flex' : 'qualification-button button--flex'} onClick={()=> setToggle(1)}>
                    <i className='uil uil-graduation-cap'></i>{" "}
                    Education
                </div>

                <div className={toggle === 2 ? 'qualification-button qualification-active button--flex' : 'qualification-button button--flex'} onClick={()=> setToggle(2)}>
                    <i className='uil uil-briefcase-alt'></i>{" "}
                    Experience
                </div>
            </div>

            <div className='qualification-sections'>
                <div className={toggle === 1 ? 'qualification-content qualification-content-active' : 'qualification-content'}>
                    <div className='qualification-data'>
                        <div>
                            <h3 className='qualification-title'>Full Stack Developement</h3>
                            <span className='qualification-subtitle'>GUVI</span>
                            <div className='qualification-calender'>
                                <i className='uil uil-calendar-alt'></i>2023 - 2024
                            </div>
                        </div>
                        <div>
                            <span className='qualification-rounder'></span>
                            <span className='qualification-line'></span>
                        </div>
                    </div>

                    <div className='qualification-data'>
                        <div></div>

                        <div>
                            <span className='qualification-rounder'></span>
                            <span className='qualification-line'></span>
                        </div>
                        <div>
                            <h3 className='qualification-title'>B.E Electronics and Instrumentation Engineering</h3>
                            <span className='qualification-subtitle'>KCG College of Technology</span>
                            <div className='qualification-calender'>
                                <i className='uil uil-calendar-alt'></i>2017 - 2021
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggle === 2 ? 'qualification-content qualification-content-active' : 'qualification-content'}>
                    <div className='qualification-data'>
                        <div>
                            <h3 className='qualification-title'>System Engineer</h3>
                            <span className='qualification-subtitle'>TCS - Chennai</span>
                            <div className='qualification-calender'>
                                <i className='uil uil-calender-alt'>2022 - Present</i>
                            </div>
                        </div>
                        <div>
                            <span className='qualification-rounder'></span>
                            <span className='qualification-line'></span>
                        </div>
                    </div>

                    {/* <div className='qualification-data'>
                        <div></div>

                        <div>
                            <span className='qualification-rounder'></span>
                            <span className='qualification-line'></span>
                        </div>
                        <div>
                            <h3 className='qualification-title'>12th Standard</h3>
                            <span className='qualification-subtitle'>Vyasa Matriculation Higher Secondary School</span>
                            <div className='qualification-calender'>
                                <i className='uil uil-calender-alt'>2016 - 2017</i>
                            </div>
                        </div>
                    </div> */}
                </div>
                
            </div>
        </div>
    </section>
  )
}
