import React from 'react'

const LegalKey = ({filterByLegality, clearSearch}) => {
  return (
    <div className='legal-key'>
      <h2 className='clear' style={{backgroundColor: 'black'}} onClick={() => clearSearch()}>Clear Search</h2>
      <h2 className='legal' onClick={() => filterByLegality('legal')}>LEGAL</h2>
      <h2 className='at-risk' onClick={() => filterByLegality('at risk')}>AT RISK</h2>
      <h2 className='illegal' onClick={() => filterByLegality('illegal')}>ILLEGAL</h2>
    </div>
  )
}

export default LegalKey