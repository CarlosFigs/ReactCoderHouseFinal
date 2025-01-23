import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ItemListContainer from './components/iItemListContainer/ItemListContainer.jsx'
import NavBar from './components/navbar/NavBar.jsx'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx'
import Cart from './components/renombrarcart/Cart.js'
import NotFound from './components/renombrarerror/NotFound.jsx'
import Checkout from './components/renombrarcheckout/Checkout.js'
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
