import React from 'react'
import './PolicyCard.scss'


const PolicyCard = ({id, name, abbreviation, legal, legalDescription}) => {
  return (
    <article className='info-strip'> 
      <div className='info-container'>
        <div className='name-container'>
          <h2>{name}</h2>
        </div>
        <div className='legal-description'>
          <p>{legalDescription}</p>
        </div>
      </div>
    </article>
  )
}

export default PolicyCard;