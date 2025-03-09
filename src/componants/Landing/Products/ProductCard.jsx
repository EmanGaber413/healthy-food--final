import React from 'react'
import { Link } from 'react-router'


export default function ProductCard({object}) {
  const {items}=object
 
  console.log("items :" , items)
  return <>
 { items&&items.map((step, index)=>(   <div key={index} className="product-card w-100 my-1
  bg-amber-200/30 h-100 rounded-2xl p-1 ">
    
   <div className="img-card"> 
    <img src={step.image} alt="" className='w-100 h-60 rounded-full p-2'/>
   </div>

    <div className='  p-3 my-2'>
        <h2 className='text-green-900 font-bold text-2xl font-serif pb-5'>
        <Link to={"/ShowProduct/"+step.product_code}>{step.product_name} </Link></h2>
        
        <h2 className='text-amber-500 text-2xl font-semibold'>
            <span className=' font-bold font-serif'>price: </span> {step.price} $</h2>
       
       
    </div>
   
</div>
))}

</>
}
