import React from 'react'
import { Link } from 'react-router'


export default function CategoryCard({object}) {
  const {category}=object
  
  return <>
  <a ></a>
<Link to={"/Showitems/"+category}  className="product-card  my-1.5 md:w-60 bg-green-300 shadow-2xl shadow-yellow-950
 rounded-full  text-center justify-around ">
   
    <div className=' justify-left md:p-3 p-1'>
        <h2 className='font-bold md:text-2xl text-xl  text-green-900'>{category}</h2>
        
    </div>
</Link>
</>
}

