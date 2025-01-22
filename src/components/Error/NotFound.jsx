import { Link } from "react-router-dom"
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">La página que buscas no existe o fue movida.</p>
      <Link to="/" className="not-found-link">Volver al inicio</Link>
    </div>
  )
}

export default NotFound