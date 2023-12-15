'use client'
import { CartContext } from '@/context/context'
import { CartItem } from '@/types/cartItem'
import { Product } from '@/types/product'
import React, { useContext } from 'react'


interface ItemProps {
    item: CartItem
}

export default function Item({item}: ItemProps){
    const { removeItems } = useContext(CartContext)!;
    return (
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src="https://placehold.co/24x24/png" alt="imagen" className="h-full w-full object-cover object-center"/>
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                        <a href="#">{item.product.name}</a>
                        </h3>
                        <p className="ml-4">${item.product.price}</p>
                    </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Cantidad {item.askedQuantity}</p>

                <div className="flex">
                    <button type="button" className="font-medium text-[--primary-color] hover:text-[--secondary-color]"
                            onClick={() => removeItems(item.product.id)}>Eliminar</button>
                </div>
                </div>
            </div>
        </li>
    )
}
