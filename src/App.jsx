import './App.css'
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer'
import NavBar from './components/Navbar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/cart/Cart'

function App() {
  return (
    <div className='container-app'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer saludo={"Bienvenidos"} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Bienvenidos"} />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="*" element={<div>Error 404 not found</div>} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </CartProvider>

      </BrowserRouter>
    </div>
  )
}

export default App
