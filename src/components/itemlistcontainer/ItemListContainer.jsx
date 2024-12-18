// componente principal que recibe y ejecuta el fetch.. lo envia al componente que lo maneja
import { useEffect, useState } from 'react'
import { getProducts } from '../../data/data.js'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loading from '../loading/Loading.jsx'

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])
  const [loading,setLoading]=useState(false)
  const { idCategory } = useParams()
  useEffect(() => {
    setLoading(true)
    getProducts()
      .then((data) => {
        if (idCategory) {
          //aqui se esta filtrando dependiendo de la categoria que viene del urlparam
          const productosFiltrados = data.filter((producto) => producto.category === idCategory)
          setProducts(productosFiltrados)
        } else {
          //aqui se filtra toda la data.
          setProducts(data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        //aqui cerramos el loading
        setLoading(false)
      })
  }, [idCategory])
  return (
    <div>
      <h1>{saludo}</h1>
      {
        loading ===true ? (<Loading/>):( <ItemList products={products} />)
      }
    </div>
  )
}

export default ItemListContainer