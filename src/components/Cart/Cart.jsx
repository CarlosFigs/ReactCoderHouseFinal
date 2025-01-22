import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
const Cart = () => {
  const { cart, totalPrice, deleteProducts, deleteAllProducts } = useContext(CartContext)

  //early return se va ha realizar una evaluacion
  if (cart.length === 0) {
    return (
      <div>
        <EmptyCart/>
      </div>
    )
  }

  return (
    <div>
      <h2>Productos:</h2>
      <ul>
        {
          cart.map((productCard) => (
            <li key={productCard.id}>
              <p>{productCard.name}</p> 
              <img src={productCard.img} width={100}/>
              <p>Precio:${productCard.price}</p>
              <p>Cantidad:{productCard.quantity}</p>
              <button onClick={() => deleteProducts(productCard.id)}>Eliminar</button>
            </li>
          ))
        }
      </ul>
      <h3>Precio total:${totalPrice()}</h3>
      <button onClick={deleteAllProducts}>Eliminar todo</button>
      <Link className="conts" to="/checkout">Continuar con mi compra</Link>
    </div>
  )
}

export default Cart