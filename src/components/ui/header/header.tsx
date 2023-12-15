import React from 'react';
import Image from 'next/image';
import banner from '../../../assets/Home.png';

export default function header() {
  return (
    <div className='relative'>
      <Image priority className="w-full h-72 object-cover" src={banner} alt="placeholder"/>
      {/* <h1 className='absolute '>Products</h1> */}
    </div>
  )
}
