import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import FormCheckout from './FormCheckout'
import db from '../../db/db.js'
const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })
    const [orderID, setorderID] = useState(null)
    const { cart, totalPrice } = useContext(CartContext)
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
        uploadOrder(order)
    }
    const uploadOrder = async (newOrder) => {
        try {
            const orderRef = collection(db, "orders")
            const response = await addDoc(orderRef, newOrder)
            setorderID(response.id)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>

            {
                orderID ? (
                    <div>
                        <h2>Compra completada guarde su N° de guia</h2>
                        <h3>{orderID}</h3>
                    </div>
                ) : (
                    <FormCheckout dataForm={dataForm} handleSubmitForm={handleSubmitForm} handleOnChangeInputs={handleOnChangeInputs} />
                )
            }
        </div>
    )
}

export default Checkout