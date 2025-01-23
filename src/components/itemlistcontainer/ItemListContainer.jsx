// componente principal que recibe y ejecuta el fetch.. lo envia al componente que lo maneja
import { useEffect, useState } from 'react'
import { collection,getDocs, query,where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList.jsx'
import Loading from '../Loading/Loading.jsx'
import db from "../../db/db.js"
import NotFound from '../Error/NotFound.jsx'

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])
  const [loading,setLoading]=useState(false)
  const { idCategory } = useParams()
  const [error,setError]=useState(false)
  const categoriasValidas = ["franelas","pantalones","zapatos","chaquetas"]

  //llamada de datos de firestore DB con async await
  const collectionName = collection(db,"products")
  const getProducts = async (idCategory)=>{
    try {
      let dataDB;
//vamos a validad primero las categorias que vienen de la web
      if(idCategory && !categoriasValidas.includes(idCategory)){
        setError(true)
      }
      //se valida que el idCategory sea diferente de null y que efectivamente traiga un valor
      if(idCategory != null){
        const filter = query(collectionName, where("category", "==", idCategory))
        dataDB = await getDocs(filter)
      }else{
        dataDB = await getDocs(collectionName)
      }
      const data = dataDB.docs.map((product) =>({
        id:product.id, ...product.data()
      }))
      setProducts(data)
    } catch (error) {
      console.log(error);
      setProducts([])
      
    }finally{
      //aqui cerramos el loading
      setLoading(false)
    }
  }
  useEffect(() => {
    setLoading(true)
    setError(false)
    getProducts(idCategory)
  }, [idCategory])

  if(error){
    return <NotFound/>
  }
  return (
    <div>
      <h1>{saludo}</h1>
      {
        loading ? (<Loading/>):( <ItemList products={products} />)
      }
    </div>
  )
}
export default ItemListContainer