import { useState, useEffect } from 'react'
import { getProducts } from '../../data/data';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';
const ItemDetailContainer = () => {
    const [product, setProducts] = useState({});
    const { idProduct } = useParams()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((data) => {
                const productoEncontrado = data.find((producto) => producto.id === idProduct)
                setProducts(productoEncontrado)
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
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