
import React, { useEffect, useState } from 'react'

import {  useParams } from 'react-router'
import Axiosinstance from '../../../axios/Axios-temp';




export default function ShowProduct() {
  const {product_code} = useParams();
  console.log (product_code);
 
 const [showProduct,setShowProduct]=useState(null);

 useEffect(() => {
  Axiosinstance.get(`products/${product_code}`)
    .then((resp) => resp.data)
    .then((data) => {
      setShowProduct(data);
    });
}, [product_code])


  return<>

   <div className='countainer px-3 grid md:grid-cols-2 grid-cols-1 bg-green-300 gap-1   '>
    <div className="imgCard pt-6 grid  justify-center shadow-2xl">
    <img className=' rounded-3xl  h-110 w-130 shadow-2xl' src={showProduct&&showProduct.data.image} alt="" srcset="" />
    </div>
    <div className="detail p-10  ">
        <h1 className='text-green-900 font-bold  font-serif pb-5 text-3xl border-b-4'>{showProduct&&showProduct.data.product_name} </h1>
    {console.log(showProduct)}
        
        <p className='text-xl font-serif py-5'> <span className='text-green-700 font-bold font-serif my-5 text-2xl'>Ingredients: </span> 
        <br/>{showProduct&&showProduct.data.product_ingredients}</p>

        <h2 className= 'text-1xl text-gray-600 font-bold font-serif' ><span className='text-green-700 font-bold font-serif my-5 text-2xl'
        >Nutrition Info:</span><br/>
        {showProduct&&showProduct.data.product_nutrition_info}</h2>

        <h3 className='text-amber-500 text-1.5xl font-semibold  text-2xl'><span className=' font-bold font-serif'>
          price: </span>
        {showProduct&&showProduct.data.price} $ </h3>
    </div>

  </div>
  

  {/* <Helmet>
  <title>Show Product</title>
  <meta name="description" content="Helmet application"  />
  </Helmet> */}
  
 
  

</>

}

