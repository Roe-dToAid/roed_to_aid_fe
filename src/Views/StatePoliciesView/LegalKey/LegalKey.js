import React from 'react'
import StatePoliciesView from '../StatePoliciesView'

const LegalKey = ({filterByLegality, clearSearch}) => {
  return (
    <div className='legal-key'>
      <h2 style={{backgroundColor: 'black'}}onClick={() => clearSearch()}>Clear Search</h2>
      <h2 className='legal' onClick={() => filterByLegality('0')}>LEGAL</h2>
      <h2 className='at-risk' onClick={() => filterByLegality('1')}>AT RISK</h2>
      <h2 className='illegal' onClick={() => filterByLegality('2')}>ILLEGAL</h2>
    </div>
  )
}

export default LegalKey