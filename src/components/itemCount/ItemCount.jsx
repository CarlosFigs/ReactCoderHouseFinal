import React from 'react'
import { useState } from 'react';
// aqui estan los botones y sus funcionalidades 
const ItemCount = ({ stock, addProductInCart }) => {
  const [count, setCount] = useState(1);

  const handleClickRemove = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  const handleClickAdd = () => {
    if(count < stock){
      setCount(count + 1)
    }
  }
  return (
    <div>
      <button onClick={handleClickRemove} id='botonEliminar'>-</button>
      <p>{count}</p>
      <button onClick={handleClickAdd} id='botonSumar'>+</button>
      <button onClick={ ()=>addProductInCart(count)} id='agregarProducto'>Agregar Producto</button>
    </div>
  )
}

export default ItemCount