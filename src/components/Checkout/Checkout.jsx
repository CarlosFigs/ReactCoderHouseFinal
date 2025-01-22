import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import FormCheckout from './FormCheckout'
import db from '../../db/db.js'
import validateForm from '../../utils/ValidateForm.js'
import Guia from './Guia.jsx'
const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })
    const [orderID, setorderID] = useState(null)
    const { cart, totalPrice,setCart } = useContext(CartContext)
    const clearCart=()=>{
        setCart([])
    }

    const handleOnChangeInputs = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }    
    const handleSubmitForm = async (event) => {
        event.preventDefault()
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        }
        const response = await validateForm(dataForm)
        if(response.status === "succes"){
            await uploadOrder(order)
            toast.info("Orden enviada correctamente")            
        }else{
            toast.warn(response.message)
        }
    }
    const uploadOrder = async (newOrder) => {
        try {
            const orderRef = collection(db, "orders")
            const response = await addDoc(orderRef, newOrder)
            setorderID(response.id)
            clearCart()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>

            {
                orderID ? (
                    <Guia orderID={orderID}/>
                ) : (
                    <FormCheckout dataForm={dataForm} handleSubmitForm={handleSubmitForm} handleOnChangeInputs={handleOnChangeInputs} />
                )
            }
        </div>
    )
}

export default Checkout