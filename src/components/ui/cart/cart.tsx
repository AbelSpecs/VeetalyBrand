'use client'
import React, { useContext } from 'react'
import Button from '../button/button';
import { CartContext } from '@/context/context';
import Item from '../item/item';

interface CartProps {
    styles?: string;
    handleCart: () => void;
}

export default function Cart({styles, handleCart}: CartProps) {
    const { items, total } = useContext(CartContext)!;
    console.log(items);

    return (

        <div className='relative z-10' aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className={`pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 ${styles} ease-in-out duration-300`}>
                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Carrito</h2>
                                            <div className="ml-3 flex h-7 items-center">
                                            <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={handleCart}>
                                                <span className="absolute -inset-0.5"></span>
                                                <span className="sr-only">Close panel</span>
                                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                            {
                                                items.length === 0 && 
                                                <h3>No tienes nada en el carrito</h3>   
                                            }
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {
                                                    items.map((item) => {
                                                        return (
                                                            <Item key={item.product.id} item={item}/>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>${total}</p>
                                </div>
                                <div className="mt-6">
                                    <Button type='button' text='Pagar' styles='flex w-full rounded-3xl mb-5 justify-center bg-[--primary-color] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[--secondary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'/>
                                </div>
                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p className='mr-2'>
                                    o
                                    </p>
                                    <button type="button" className="font-medium text-[--primary-color] hover:text-[--secondary-color]"
                                            onClick={handleCart}>
                                        Continuar Comprando
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}
