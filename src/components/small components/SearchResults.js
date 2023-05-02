import React from 'react'

import { Link } from 'react-router-dom'

const SearchResults = ( { filteredData } ) => {
  return (
    <>
      {filteredData  && filteredData.slice(0, 15).map((item, key) => {
        return (
        <div className='flex flex-col max-w-3xl bg-white items-start px-4 py-2 z-50' key={item.id}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
        </div>
        )})}
    </>
  )
}

export default SearchResults
