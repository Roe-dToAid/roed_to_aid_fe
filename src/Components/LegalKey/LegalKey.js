import React from 'react'

const LegalKey = ({filterByLegality, clearSearch}) => {
  return (
    <div className='legal-key' data-cy='legal-key'>
      <h2 className='clear' onClick={() => clearSearch()}>ALL STATES</h2>
      <h2 className='legal' data-cy='legal' onClick={() => filterByLegality('legal')}>LEGAL</h2>
      <h2 className='at-risk' onClick={() => filterByLegality('at risk')}>AT RISK</h2>
      <h2 className='illegal' onClick={() => filterByLegality('illegal')}>ILLEGAL</h2>
    </div>
  )
}

export default LegalKey