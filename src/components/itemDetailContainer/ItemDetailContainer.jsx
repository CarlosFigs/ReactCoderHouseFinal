import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import db from "../../db/db.js"
import ItemDetail from './ItemDetail'
import Loading from '../Loading/Loading'
import NotFound from '../Error/NotFound.jsx'
const ItemDetailContainer = () => {
    const [product, setProducts] = useState({});
    const { idProduct } = useParams()
    const [loading, setLoading] = useState(false)
    const [error,setError]=useState(false)
    const getProducts = async()=>{
        try {
            const docRef = doc(db,"products",idProduct)
            const dataDB = await getDoc(docRef)
            if(dataDB.exists()){
                const data = {id:dataDB.id, ...dataDB.data()}
                setProducts(data)
            }else{
                setError(true)
            }
        } catch (error) {
            console.log(error);
            setError(true)
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        setLoading(true)
        getProducts()
    }, [idProduct])
    return (
        <div className='itemDetailContainer'>
                  {loading ? (
                <Loading />
            ) : error ? (
                <NotFound/>
            ) : (
                <ItemDetail product={product} />
            )}
        </div>
    )
}

export default ItemDetailContainer