import React from 'react'
import './PolicyCard.scss'


const PolicyCard = ({name, legal, legalDescription}) => {
  const setColor = () => {
    return legal === '1' ? '#D27736' : 
    legal === '2' ? '#DF6349' : '#768CA0' 
  }

  return (
    <article className='info-strip' style={{border: '.1rem solid' + setColor()}}> 
        <div className='name-container' style={{backgroundColor: setColor()}}>
          <h2>{name}</h2>
        </div>
        <div className='legal-description'>
          <p>{legalDescription}</p>
        </div>
    </article>
  )
}

export default PolicyCard;