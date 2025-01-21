import { Link } from 'react-router-dom'
const EmptyCart = () => {
  return (
    <div>
        <h3>Oops no has añadido nada</h3>
        <Link to="/">Volver al incio</Link>
    </div>
  )
}

export default EmptyCart