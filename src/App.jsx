import './App.css'
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer'
import NavBar from './components/Navbar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/cart/Cart'
import NotFound from './components/Error/NotFound'
import Checkout from './components/Checkout/Checkout'

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
            <Route path="/cart" element={<Cart/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='checkout' element={<Checkout/>}/>
          </Routes>
        </CartProvider>

      </BrowserRouter>
    </div>
  )
}

export default App
