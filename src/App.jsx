import React from 'react'

import Navbar from './componants/layouts/Navbar'
import Footer from './componants/layouts/Footer'
import { Route, Routes } from 'react-router'
import Home from './componants/Landing/Home/Home'
import ShowProduct from './componants/Landing/ShowProduct/ShowProduct'
import Products from './componants/Landing/Products/Products'
import { ProductsContextProvider } from './context/Context'
import Category from './componants/Landing/Category/Category'



export default function App(){
  return<>

  <link rel="icon" href="/—Pngtree—healthy diet_1329394.png" />
  
  <Navbar/>
  <ProductsContextProvider>
   <Routes>
    <Route index  element={<Home />}/>
    <Route path='/Home'  element={<Home/>}/>
    <Route path='/Category' element={<Category/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/ShowProduct/:product_code' element={<ShowProduct/>}/>
    <Route path='/Showitems/:category' element={<></>}/>
   
   
   </Routes>
   </ProductsContextProvider>
   <Footer/>
 
   
   </>
  
}