import { Link } from 'react-router-dom'
import "./checkout.css"
const Guia = ({orderID}) => {
  return (
    <div className='order-guide'>
    <h2>Compra completada guarde su N° de guia</h2>
    <h3>{orderID}</h3>
    <Link to="/">Volver al inicio</Link>
</div>
  )
}

export default Guia