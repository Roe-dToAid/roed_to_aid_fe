import React from 'react'

const SearchBar = ({inputRef, handleSearchChange}) => {
  return (
    <input 
      ref={inputRef}
      className='search'
      type='search'
      placeholder='Search for state...'
      onChange={(e) => handleSearchChange(e.target.value)}
    />
  )
}

export default SearchBar