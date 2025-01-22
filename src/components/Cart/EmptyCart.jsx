import { Link } from 'react-router-dom'
import "./cart.css"
const EmptyCart = () => {
  return (
    <div>
        <h3>Oops no has añadido nada</h3>
        <Link id='link-inicio' to="/">Volver al incio</Link>
    </div>
  )
}

export default EmptyCart