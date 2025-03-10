import React from 'react'
import { NavLink } from 'react-router'

export default function Navbar() {
  return <>
  <nav className="bg-green-500/50 h-[vh-10]">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
    <div className="flex shrink-0 items-center">
          <img className="h-10 w-auto" src="./../../../public/—Pngtree—healthy diet_1329394.png" 
          alt="Your Company"/>
          <h1 className='m-3 font-extrabold text-green-900 font-serif text-xl'>Healthy Food</h1>
        </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
        
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">

            <NavLink to="/Home" className="rounded-md hover:bg-green-900 transition px-3 py-2  font-medium
             text-white font-serif  text-xl  "
             aria-current="page">Home </NavLink>

               <NavLink to="/Category" className="rounded-md px-3 py-2 font-medium text-white
             hover:bg-green-900 transition hover:text-white font-serif text-xl">Category</NavLink>
            
            <NavLink to="/Products" className="rounded-md px-3 py-2 font-medium text-white
             hover:bg-green-900 transition hover:text-white font-serif text-xl">Products</NavLink>
            
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
      <NavLink to="/Home" className="block rounded-mdhover: hover:bg-green-900 px-3 py-2 text-base font-medium
       text-white"
      aria-current="page">Home</NavLink>

      <NavLink to="/Category" className="block rounded-mdhover: hover:bg-green-900 px-3 py-2 text-base font-medium
       text-white"
      aria-current="page">Category</NavLink>

      <NavLink to="/Products" className="block rounded-md px-3 py-2 text-base font-medium text-white
        hover:bg-green-900 hover:text-white">products</NavLink>
     
       
      
    </div>
  </div>
</nav>
  </>
};