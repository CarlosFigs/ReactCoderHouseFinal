import './App.css'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='container-app'>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"Bienvenidos"} />}/>
          <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Bienvenidos"} />} />    
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />}/>

          <Route path="*" element={<div>Error 404 not found</div>} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
