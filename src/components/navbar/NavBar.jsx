import CartWidjet from './CartWidget';
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='brand'>
          <img src='/img/logo.png' />
          <p>FIGSVZLA</p>
        </Link>
      <ul className='categories'>
        <NavLink to="/category/franelas" className={({ isActive }) => isActive ? "category-active" : "category"}>Franelas</NavLink>
        <NavLink to="/category/pantalones" className={({ isActive }) => isActive ? "category-active" : "category"}>Pantalones</NavLink>
        <NavLink to="/category/chaquetas" className={({ isActive }) => isActive ? "category-active" : "category"}>Chaquetas</NavLink>
        <NavLink to="/category/zapatos" className={({ isActive }) => isActive ? "category-active" : "category"}>Zapatos</NavLink>
      </ul>
      <CartWidjet />
    </nav>
  )
}

export default NavBar