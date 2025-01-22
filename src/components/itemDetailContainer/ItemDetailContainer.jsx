import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import db from "../../db/db.js"
import ItemDetail from './ItemDetail'
import Loading from '../Loading/Loading'
const ItemDetailContainer = () => {
    const [product, setProducts] = useState({});
    const { idProduct } = useParams()
    const [loading, setLoading] = useState(false)
    const getProducts = async()=>{
        try {
            const docRef = doc(db,"products",idProduct)
            const dataDB = await getDoc(docRef)
            const data = {id:dataDB.id, ...dataDB.data()}
            setProducts(data)
        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        setLoading(true)
        getProducts()
    }, [])
    return (
        <div className='itemDetailContainer'>
            {
                loading===true?(<Loading/>):(<ItemDetail product={product} />)
            }
        </div>
    )
}

export default ItemDetailContainer