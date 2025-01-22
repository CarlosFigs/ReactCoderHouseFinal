import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer'
import NavBar from './components/Navbar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/cart/Cart'
import NotFound from './components/Error/NotFound'
import Checkout from './components/Checkout/Checkout'
import './App.css'
function App() {
  return (
    <div className='container-app'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer position='bottom-right' theme='dark'/>
          <Routes>
            <Route path="/" element={<ItemListContainer saludo={"Bienvenidos"} />} />
            <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Bienvenidos"} />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </CartProvider>

      </BrowserRouter>
    </div>
  )
}

export default App
