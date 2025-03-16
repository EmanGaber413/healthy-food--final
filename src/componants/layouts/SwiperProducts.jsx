import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router';
import ProductCard from '../Landing/Products/ProductCard';


export default function SwiperProducts({object,list}) {

  console.log(" object from swiper :" ,object)
  console.log(" category from swiper :" ,list)
  // const list =object.slice(0,3)
  // {console.log("showProduct from list" , list)}
  const filteredProducts = object?.items?.filter(
    (product) => product.category == list

  ) || [];
  {console.log("filteredProducts from list" , filteredProducts)}
  {console.log("object from list" , object)}
  return (
  
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

       { object&&object.items.map((step, index)=>( 
        
  <SwiperSlide key={index}  className='container px-4 flex flex-wrap items-center my-2'>
    <div className="product-card w-70 
            bg-amber-200/40 md:h-auto  rounded-2xl  ">
        
            <div className="img-card flex justify-center"> 
              <img src={step.image} alt="" className='w-60 h-40 rounded-full p-2'/>
            </div>
    
            <div className='  p-3 my-2'>
               <h2 className='text-green-900 font-bold text-2xl font-serif pb-5'>
               <Link to={"/ShowProduct/"+step.product_code}>{step.product_name} </Link></h2>
            
               <h2 className='text-amber-500 text-2xl font-semibold'>
                <span className=' font-bold font-serif'>price: </span> {step.price} $</h2>
               
            </div>
    </div>
       
        </SwiperSlide>))}

       

    </Swiper>

   
  )
};
