import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import EmptyCart from './EmptyCart'
const Cart = () => {
  const { cart, totalPrice, deleteProducts, deleteAllProducts } = useContext(CartContext)

  //early return 
  if (cart.lenght === 0) {
    return (
      <EmptyCart />
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
              <img src={productCard.img} />
              <p>Precio:${productCard.price}</p>
              <p>Cantidad:{productCard.quantity}</p>
              <button onClick={() => deleteProducts(productCard.id)}>Eliminar</button>
            </li>
          ))
        }
      </ul>
      <h3>Precio total:${totalPrice()}</h3>
      <button onClick={deleteAllProducts}>Eliminar todo</button>
    </div>
  )
}

export default Cart