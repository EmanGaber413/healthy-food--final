
import React, {  useContext, useEffect, useState } from 'react'

import {  useParams } from 'react-router'
import Axiosinstance from '../../../axios/Axios-temp';
import { ProductsContext } from '../../../context/Context';
import SwiperProducts from '../../layouts/SwiperProducts';
import ProductCard from '../Products/ProductCard';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function ShowProduct( ) {
  const {product_code} = useParams();
  console.log (product_code);
   const Products =useContext(ProductsContext);
  //  const list =Products.slice(0,3)
 

  
  
 

 const [showProduct,setShowProduct]=useState(null);
 
 useEffect(() => {
  Axiosinstance.get(`products/${product_code}`)
    .then((resp) => resp.data)
    .then((data) => {
      setShowProduct(data);
    });
}, [product_code])

console.log("showProduct" , showProduct)





  return<>

   <div className='countainer px-3 grid md:grid-cols-2 grid-cols-1 bg-green-300 gap-1  '>
    <div className="imgCard pt-6 grid  justify-center shadow-2xl relative">
    <img className=' rounded-3xl  h-110 w-130 shadow-2xl ' src={showProduct&&showProduct.data.image} alt=""  />
    <div className='flex justify-between p-5  '>
        <button className='bg-green-700/70 p-3 rounded-2xl border-2 text-white
         hover:bg-amber-300 transition duration-300 absolute top-3 end-3'>
                  <FontAwesomeIcon icon={faHeart} size="lg" className="text-white" />
        </button>

        <button className='bg-amber-500/70 p-3 rounded-2xl border-2 text-white
         hover:bg-amber-300 transition duration-300 absolute top-3 start-3'>
                <FontAwesomeIcon icon={faCartShopping} />
        </button>
        </div>
    </div>
    <div className="detail p-10 relative ">
        <h1 className='text-green-900 font-bold  font-serif pb-5 text-3xl border-b-4'>
          {showProduct&&showProduct.data.product_name} </h1>
    {console.log(showProduct)}
        
        <p className='text-xl font-serif py-5'> <span className='text-green-700 font-bold font-serif my-5 text-2xl'
        >Ingredients: </span> 
        <br/>{showProduct&&showProduct.data.product_ingredients}</p>

        <h2 className= 'text-1xl text-gray-600 font-bold font-serif' ><span className='text-green-700 font-bold font-serif my-5 text-2xl'
        >Nutrition Info:</span><br/>
        {showProduct&&showProduct.data.product_nutrition_info}</h2>

        <h3 className='text-amber-500 text-1.5xl font-semibold  text-2xl'><span className=' font-bold font-serif'>
          price: </span>
        {showProduct&&showProduct.data.price} $ </h3>
        
        
    </div>
   
  </div>

  
  
           
 

  <div className='countainer   bg-green-300 flex justify-center '>
       


       <h2 className='text-green-900 font-bold  font-serif  text-3xl p-7 w-100 bg-amber-400 rounded-b-full text-center' >See more</h2>
       
       
       </div>
       {Products && Products.map((item,index)=>
        (<div className='bg-green-300'><SwiperProducts  key={item.product_code||index}  object={item} list= {item.category} /></div>))}
       
       

 
  {/* <Helmet>
  <title>Show Product</title>
  <meta name="description" content="Helmet application"  />
  </Helmet> */}
  
 
  

</>

};

