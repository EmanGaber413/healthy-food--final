import React from 'react'
import { Link } from 'react-router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function ProductCard({object}) {
  
 
  console.log("items :" , object)
  return <>
<h1 className='text-green-900 font-bold text-2xl font-serif  p-5 border-t-2
 border-b-2 bg-amber-500/60 text-center rounded-4xl '>{object.category}</h1>

<div  className='grid md:grid-cols-2 lg:grid-cols-3 text-center justify-center items-center   '> 
    { object&&object.items.map((step, index)=>( 
  <div key={index}  className='container px-4 flex flex-wrap items-center my-2 '>
    <div className="product-card w-100 relative
        bg-amber-200/40 md:h-100  rounded-2xl  ">
    
        <div className="img-card "> 
          <img src={step.image} alt="" className='w-100 h-60 rounded-3xl p-2'/>
        </div>
        

        <div className='  p-3 my-2'>
           <h2 className='text-green-900 font-bold text-2xl font-serif pb-5'>
           <Link to={"/ShowProduct/"+step.product_code}>{step.product_name} </Link></h2>
        
           <h2 className='text-amber-500 text-2xl font-semibold'>
            <span className=' font-bold font-serif'>price: </span> {step.price} $</h2>
           
        </div>
        <div className='flex justify-between p-5  '>
        <button className='bg-green-700/70 p-3 rounded-2xl border-2 text-white hover:bg-amber-300 transition duration-300 absolute top-3 end-3'>
                  <FontAwesomeIcon icon={faHeart} size="lg" className="text-white" />
        </button>

        <button className='bg-amber-500/70 p-3 rounded-2xl border-2 text-white hover:bg-amber-300 transition duration-300 absolute top-3 start-3'>
                <FontAwesomeIcon icon={faCartShopping} />
        </button>
        </div>
    </div>
  </div> 
 
               ))}

</div> 


     </>                          }       

