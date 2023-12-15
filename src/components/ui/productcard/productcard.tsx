'use client'

import React, { ChangeEvent, EventHandler, useContext, useState } from 'react';
import placeholder from '../../../assets/placeholder.jpg';
import Image from 'next/image';
import Button from '@/components/ui/button/button';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';
import { CartContext } from '@/context/context';
import Counter from '../counter/counter';
import trash from '../../../assets/trash-icon.svg';

interface productcardProps{
    product: Product
}

export default function Productcard({product}: productcardProps) {
  const router = useRouter();
  const { items, addItems, removeItems } = useContext(CartContext)!;
  const [quantity, setQuantity] = useState(0);
  const ingredients = product.ingredients!.map(({name}) => { return name });
  const nameIngredients = ingredients.join(' - ');
  const item = items.find(item => item.product.id === product.id);
  const total = item ? item.askedQuantity * product.price : 0;

  const changeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  }

  const handleAddQuantity = (product: Product) => {
    setQuantity(prev => prev + 1);
    addItems(product, quantity);
  }

  const handleRemoveQuantity = (id: string) => {
    setQuantity(prev => prev - 1);
    removeItems(id, quantity);
  }

  return (
    <div className='max-w-[20rem] h-auto mx-auto'>   
      <div className="mx-auto w-[90%] h-auto text-left rounded-xl shadow-md">
        <div className='w-full h-56'>
          <Image className="w-full h-full rounded-xl" src={placeholder} alt="placeholder"/>
        </div>
        <div className='px-6 py-4'>
          <p className="font-bold text-xl mb-2">{product.name}</p>
          <p>{nameIngredients}</p>
          <div className='flex justify-between'>
            <p className="text-[--secondary-color] font-semibold text-base">
              ${product.price}
            </p>
          </div>
          <div className='flex flex-row w-[50%] mt-4'>
            <Button type='button' styles='block bg-white w-[20%] px-2 py-1 text-gray-900 rounded-l-lg' onClick={() => handleRemoveQuantity(product.id)}>-</Button>
            <Counter styles='block w-[60%] px-2 bg-white py-1 text-gray-900 text-center sm:text-sm sm:leading-6' value={quantity} onChange={changeQuantity}/>
            <Button type='button' styles='block bg-white w-[20%] px-2 py-1 text-gray-900 rounded-r-lg' onClick={() => handleAddQuantity(product)}>+</Button>
          </div>
          <hr className='mt-4'/>
          <div className='flex justify-between'>
            <Button type='button' onClick={() => removeItems(product.id)}>
              <Image src={trash} alt='trash-icon' className='text-[--secondary-color]'/>
            </Button>
            <p className='font-medium'>
              Total: ${total}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
