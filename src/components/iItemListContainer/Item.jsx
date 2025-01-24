import { Link } from 'react-router-dom'
import './Item.css'
//Esta es la tarjeta del producto
const Item = ({product}) => {
  return (
    <div>
    <Link to={"/detail/"+product.id} className='productCard'>
      <p id='product-name'>{product.name}</p>
      <img src={product.img} alt=""/>
      <p id="product-price">{product.price} $</p>
    </Link>
    </div>
  )
}

export default Item