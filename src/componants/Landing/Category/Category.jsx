
import React, { useContext } from 'react'
import { ProductsContext } from '../../../context/Context'
import CategoryCard from './CategoryCard'

export default function Category() {
  const listOfCategory = useContext(ProductsContext)
  

  return <>
  <div className="h-[81vh] bg-img bg-green-300/20  " >
  <div className="    opacityCategory font-extrabold 
  font-serif  text-xl  text-center grid h-full justify-center  text-green-900
     items-center  w-full "> 
  <h1 className='font-extrabold font-serif text-3xl  justify-center flex  pt-3 pb-3 playwrite-it-moderna
  border-b-3 border-t-3 shadow-text shadow-green-950  bg-green-300'
  >Discover the world of healthy eating with us </h1>
{console.log("Context Data in Category:", listOfCategory)}
<div className=" grid justify-center items-center h-50 grid-cols-1 md:grid-cols-5">
 { listOfCategory && listOfCategory.map((item,index)=>(<CategoryCard  key={item.product_code ||index} object={item}/> ))
  }
</div>
  </div>
  </div>
  </>

}