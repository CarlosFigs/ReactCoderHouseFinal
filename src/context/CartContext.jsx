import { createContext,useEffect,useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext()

const CartProvider= ({children})=>{
    const cartLocalStorage = JSON.parse(localStorage.getItem("carrito"))
    const [cart,setCart]= useState(cartLocalStorage?cartLocalStorage:[])
// el siguiente useEffect tiene la funcionalidad de que la variable de estado cart se modifique guarde la info en el localStorage
useEffect(()=>{
    localStorage.setItem("carrito",JSON.stringify(cart))
},[cart])

    const addProducts = (newProduct)=>{
        // findIndex para comparar el indice del producto nuevo contra el que se encuentra en cart
        const indice = cart.findIndex((product)=> product.id === newProduct.id )
        if(indice === -1){
            //si el indice es -1 significa que no se encuentra en el carro por lo tanto se agrega
            setCart([...cart,newProduct])
            toast.success("Producto añadido correctamente")         
        }else{
            //si el indice es diferente de -1 significa que se encuentra en alguna posicion del array, se modifica solo la cantidad
            const newCart = [...cart]
            newCart[indice].quantity = newCart[indice].quantity + newProduct.quantity
            setCart(newCart)
            toast.success("Producto añadido correctamente")
        }
    }
    const totalQuantity =()=>{
        const cantTotal = cart.reduce((total,producto)=>total + producto.quantity,0)
        return cantTotal
    }
    const totalPrice =()=>{
        const price = cart.reduce((total,producto)=>total+(producto.price*producto.quantity),0)
        return price
    }
    const deleteProducts =(idProduct,productName)=>{
        const filterProducts = cart.filter((product)=>product.id!==idProduct)
        setCart(filterProducts)
        toast.info("El producto "+productName+" ha sido eliminado")
    }
    const deleteAllProducts =()=>{
        setCart([])
        toast.info("Todos los productos han sido eliminados del carrito")
    }

    return(
    <CartContext.Provider value={{addProducts,cart,totalQuantity,totalPrice,deleteProducts,deleteAllProducts,setCart}}>
        {children}
    </CartContext.Provider>
    )
}

export{CartContext, CartProvider}