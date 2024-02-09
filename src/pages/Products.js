import React, { useContext } from 'react'

import { useState, useEffect } from 'react'

import ProductsView from '../modules/ProductsView'
import SideFilters from '../modules/SideFilters';
import Loading from '../components/small components/Loading';
import { ProductContext } from '../context/ProductContext';

const Products = () => {

  const [products, categories, removeLoading] = useContext(ProductContext);

  
  const [filterCategory, setFilterCategory] = useState('');

  function handleClick (e) {
    setFilterCategory(e.target.innerText)
  }


  return (
    <div>
      {!removeLoading && <Loading />}
      {products && (
        <div className='ml-80 mr-20 mt-20 relative'>
          <SideFilters handleClick={handleClick} categories={categories}/>
          <ProductsView filterCategory={filterCategory} productsData={products} removeLoading={removeLoading} />
        </div>
      )}
    </div>
  )
}

export default Products
