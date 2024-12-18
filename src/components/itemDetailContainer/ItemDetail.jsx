import React from 'react'
import "./itemDetail.css"

const ItemDetail = ({product}) => {
  return (
    <div className="itemDetail">
    <img src={product.img} alt=''/>
    <h2>{product.name}</h2>
    </div>
  )
}

export default ItemDetail