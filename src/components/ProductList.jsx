import React from 'react'
import {Link} from "react-router-dom"

function ProductList({products}) {


  return (
    <>
        {products.map((product, idx) => {
        return (
          <div key={idx}>
          <Link to={`/products/${product._id}`}>{product.title}</Link>
          </div>
          )
        })}
    </>
  )
}

export default ProductList