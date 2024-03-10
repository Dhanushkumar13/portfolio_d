import React from 'react'
import "./Landing.css";
import { Social } from './Social';
import { Data } from './Data';

export const Landing = () => {
  return (
    <section className='home section' id='home'>
      <div className='home-container container grid'>
        <div className='home-content grid'>
          <Social/>

          <div className='home-img'></div>

          <Data/>
        </div>
      </div>
    </section>
  )
}
