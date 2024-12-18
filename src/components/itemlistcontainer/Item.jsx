import './Item.css'
import { Link } from 'react-router-dom'
//Esta es la tarjeta del producto
const Item = ({product}) => {
  return (
    <Link to={"/detail/"+product.id} className='productCard'>
      <p>{product.name}</p>
      <img src={product.img} alt=""/>
      <p>{product.price} $</p>
      <p>{product.stock}</p>
    </Link>
  )
}

export default Item