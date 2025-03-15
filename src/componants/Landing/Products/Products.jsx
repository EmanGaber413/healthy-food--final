import React, { useContext } from 'react'
import { ProductsContext } from '../../../context/Context'
import ProductCard from './ProductCard'



export default function Products() {
  const Products =useContext(ProductsContext);

 

  return <>
   {console.log("Products Context Data:", Products)}
  <div className="  bg-green-300 ">
  <h1 className='font-extrabold font-serif text-2xl justify-center text-center
   grid py-5 px-10 mb-3 playwrite-it-moderna
   shadow-text shadow-green-950  bg-green-300'
  >"For a balanced diet, focus on whole foods like fruits, vegetables, lean proteins, 
  and whole grains. Stay hydrated, avoid excessive sugar and processed foods,
   and practice portion control. Remember, consistency is key to a healthy lifestyle!" </h1>
  <div className= 'px-15 gap-2 grid justify-center items-center'>

{Products && Products.map((item,index)=>(<ProductCard key={item.product_code||index} object={item}/>))}

  </div>

  </div>
  
</>
}

