import React from 'react'

export const WorksItem = ({item}) => {
  return (
    <div className='work-card' key={item.id}>
        <img src={item.image} alt='' className='work-img'></img>
        <h3 className='work-title'>{item.name}</h3>
        <a className='work-button' href={item.link}>
            Demo <i className='bx bx-right-arrow-alt work-button-icon'></i>
        </a>
    </div>
  )
}
