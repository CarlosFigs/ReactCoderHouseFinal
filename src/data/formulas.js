// boton sumar
//trabajo en proceso..
import { useState } from "react"
import {getProducts} from "./data.js"
import { useEffect } from "react"
const {products,setProducts}= useState([])
 useEffect(()=>{
    getProducts(id).then((data)=>{
       return setProducts(data)
    });
 },[])
const botonRestar = (id)=>{
    products.filter((elemento)=>{
        const productoFiltrado= elemento.id === id;
        if(productoFiltrado.stock > 0){
            productoFiltrado.stock -1
        }else if(productoFiltrado.stock = 0){
            console.log("no se puede restar mas");
            
        }
    })
}