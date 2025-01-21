import { useContext,useState } from 'react'
import { CartContext } from '../../context/CartContext'
import "./itemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ product }) => {
  //estado que controla si se muestra el componente itemCount
  const [showItemCount, setShowItemCount]= useState(true)
  //desde aca se esta añadiendo el producto al carro
  //creamos primero la funcion aqui para ejecutarla en item count
  const {addProducts}=useContext(CartContext)
  const addProductInCart = (count) => {
    const productCart = { ...product, quantity: count }
    addProducts(productCart)
    // Aqui es donde el estado cambia porque se añade el producto con addProduct
    setShowItemCount(false)
  }
  return (
    <div className="itemDetail">
      <img src={product.img} alt='' />
      <h2>{product.name}</h2>
      {
        showItemCount=== true?(
          <ItemCount stock={product.stock} addProductInCart={addProductInCart} />
        ):(
          <Link to="/cart">Terminar mi compra</Link>
        )
      }
    </div>
  )
}

export default ItemDetail