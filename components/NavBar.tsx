import React from 'react'
import Image from 'next/image'
import Logo from "../public/Logo.webp"
import {AiOutlineSearch} from "react-icons/AI"
import {AiOutlineShoppingCart} from "react-icons/AI"
const nav = () => {
  return (
    <nav>
    <div className='flex justify-around items-center  flex-1  bg-blue-200 px-4 py-6 '>
      <div>
        <Image src={Logo} alt="Logo dine"/>
      </div>
      <div className='  w-[450px]'>
        <ul className='flex justify-between'>
        <li>Female</li>
        <li>Male</li>
        <li>Kids</li>
        <li>All Products</li>
        </ul>
      </div>
      <div className='flex justify-center items-center '>
      <div className=' p-1.5 '><AiOutlineSearch size={20} /> </div>
      <input type="text" className='w-[400px] rounded-md' placeholder='What you looking for'/>
      </div>
      <div className="relative rounded-full bg-[#f1f1f1] p-2" >
      
          <div className="absolute w-4 h-4 bg-red-600 top-0 right-1 rounded-full  items-center text-center flex justify-center text-xs text-white">0</div>
      
        <AiOutlineShoppingCart size={24} />
      </div>
    </div>
  </nav>
  )
}

export default nav