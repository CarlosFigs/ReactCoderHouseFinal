import { createContext,useState } from "react";

const CartContext = createContext()

const CartProvider= ({children})=>{
    const [cart,setCart]= useState([])
    const addProducts = (newProduct)=>{
        // findIndex para comparar el indice del producto nuevo contra el que se encuentra en cart
        const indice = cart.findIndex((product)=> product.id === newProduct.id )
        if(indice === -1){
            //si el indice es -1 significa que no se encuentra en el carro por lo tanto se agrega
            setCart([...cart,newProduct])            
        }else{
            //si el indice es diferente de -1 significa que se encuentra en alguna posicion del array, se modifica solo la cantidad
            const newCart = [...cart]
            newCart[indice].quantity = newCart[indice].quantity + newProduct.quantity
            setCart(newCart)
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
    const deleteProducts =(idProduct)=>{
        const filterProducts = cart.filter((product)=>product.id!==idProduct)
        setCart(filterProducts)
    }
    const deleteAllProducts =()=>{
        setCart([])
    }

    return(
    <CartContext.Provider value={{addProducts,cart,totalQuantity,totalPrice,deleteProducts,deleteAllProducts}}>
        {children}
    </CartContext.Provider>
    )
}

export{CartContext, CartProvider}