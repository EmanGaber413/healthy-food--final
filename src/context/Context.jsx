import { createContext, useEffect, useState } from "react"
import axiosinstance from "../axios/axios"



 // eslint-disable-next-line react-refresh/only-export-components
 export const ProductsContext = createContext()
 
export function ProductsContextProvider (props) {
     
    const [products,setProducts] = useState()
    useEffect(()=> {
        axiosinstance.get("category")
        .then((resp)=> (resp.data))
        .then((items)=>(setProducts(items.data) ))
    },[])
    

    return <ProductsContext.Provider value={products}>
       { console.log(products)}
       {props.children}
      </ProductsContext.Provider>
}
