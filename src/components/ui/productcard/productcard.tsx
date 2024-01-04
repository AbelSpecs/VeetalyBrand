'use client'

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button/button';
import { GetProduct, PostProduct } from '@/types/product';
import { useRouter } from 'next/navigation';
import { CartContext } from '@/providers/cartProvider';
import { RouteContext } from '@/providers/routeProvider';
import CardUnitSelector from '../cardunitselector/cardunitselector';

interface productcardProps{
    product: GetProduct
}

export default function Productcard({product}: productcardProps) {
  const router = useRouter();
  const { saveItem } = useContext(RouteContext)!;
  const ingredients = product.ingredients!.map(({name}) => { return name });
  const nameIngredients = ingredients.join(' - ');

  return (
    <div className='max-w-[20rem] h-auto mx-auto mt-10 relative'>   
      <span className='absolute left-[65%] w-[100px] h-[100px] rotate-[340deg] rounded-bl-full rounded-tr-full bg-[#dae5d0]'/>  
      <span className='absolute top-[50%] left-[90%] w-[50px] h-[50px] rotate-[260deg] rounded-br-full rounded-tl-full bg-[#dae5d0] z-[-1]'/>
      <div className="mx-auto w-[90%] h-auto text-left rounded-xl shadow-md">
        <div className='w-full h-56'>
          <Image width={1495} height={1060} className="w-full h-full rounded-xl" src={product.imageUrl!} alt="placeholder"/>
        </div>
        <div className='px-6 py-4'>
          <p className="font-bold text-xl mb-2 ">{product.name}</p>
          <p>{nameIngredients}</p>
          <p className='text-sm text-gray-500 font-thin mt-2'>Presentación en (unidades)</p>
          <div className='flex justify-start gap-3 mt-5 relative'>
            {
              product.boxTypes.sort((a,b) => a.units - b.units).map((boxType) => {
              return (
                  <CardUnitSelector key={boxType._id} boxType={boxType}/>  
                )
              })
            }
          </div>
          <Button type="button" text='Comprar'
                  onClick={() => { saveItem(product);  router.push(`/${product.id}`)}}
                  styles='flex w-full mt-5 mb-2 ease-in-out duration-300 rounded-3xl justify-center bg-[--primary-color] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[--secondary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  
          </Button>
        </div>
      </div>
      <span className='absolute top-[88%] w-[50px] h-[100px] rotate-[260deg] rounded-br-full rounded-tl-full bg-[#dae5d0]'/>  
    </div>
  )
}
