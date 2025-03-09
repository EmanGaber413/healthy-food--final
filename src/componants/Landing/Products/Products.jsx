import React, { useContext } from 'react'
import { ProductsContext } from '../../../context/Context'
import ProductCard from './ProductCard'



export default function Products() {
  const Products =useContext(ProductsContext);

 

  return <>
   {console.log("Products Context Data:", Products)}
  <div className="  bg-green-300 ">
  <h1 className='font-extrabold font-serif text-3xl justify-center text-center
   grid py-5 playwrite-it-moderna
  border-b-3 border-t-3 shadow-text shadow-green-950  bg-green-300'
  >Discover the world of healthy eating with us </h1>
  <div className= 'my-1  md:gap-1 flex flex-wrap justify-center'>

{Products && Products.map((item)=>(<ProductCard key={item.product_code} object={item} />))}

  </div>

  </div>
  
</>
}

