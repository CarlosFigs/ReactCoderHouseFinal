import { RiShoppingCart2Line } from 'react-icons/ri'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {totalQuantity}=useContext(CartContext)  
  let quantity =totalQuantity()
  return (
    <Link to="/cart" className='divCart'>
      <RiShoppingCart2Line className='cartwidget'/>
      <p>{quantity!==0 && quantity}</p>
    </Link>
  )
}

export default CartWidget