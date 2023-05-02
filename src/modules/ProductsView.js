import React from 'react'

import ProductsGrid from '../components/ProductsGrid'
import ProductsListing from '../components/ProductsListing'
import ProductsBar from '../components/ProductsBar'

import { useState } from 'react'

const ProductsList = ( { productsData, filterCategory, btnValue }) => {

  const [productView, setProductView] = useState('grid');

  function onClickGrid () {
    setProductView('grid')
  }

  function onClickList () {
    setProductView('list')
  }

  return (
    <div>

      <div className='sticky top-20 z-40'>
        <ProductsBar productsData={productsData} onClickGrid={onClickGrid} onClickList={onClickList} />
      </div>
      
      <div>
        {productView === 'grid' ? <ProductsGrid productsData={productsData} filterCategory={filterCategory} /> : <ProductsListing productsData={productsData} filterCategory={filterCategory} />}
      </div>
      

    </div>
  )
}

export default ProductsList
