'use client'

import { useForm } from '@/hooks/useForm';
import { GetCategories } from '@/types/category'
import { useRouter } from 'next/navigation';
import React from 'react'
import Button from '../button/button';

interface ProductFormProps{
    categories: GetCategories[] 
}

const fields = {
    name: '',
    description: '',
    price: ''
  };
  
  const focus = {
    focusName: false,
    focusDescription: false,
    focusPrice: false
  }

export default function Productform({categories}: ProductFormProps) {
    const router = useRouter();
    const { name, description, price, onChange, onFocusIn, onFocusOut, focusName ,focusDescription, focusPrice } = useForm(fields, focus); 
    const focusKeys = Object.keys(focus);

    return (
        <div className="flex justify-center items-center flex-col lg:flex-row">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 flex-1">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="mt-10 mb-2 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 font-semibold">Agregar Producto</h1>
                    <p className='text-gray-500 text-sm leading-5 text-center'>Agrega un nuevo producto al catalogo!</p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                        <div className="mt-1">
                            <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                id="name" 
                                name="name" 
                                type="text" 
                                autoComplete="off" 
                                required 
                                placeholder='Nombre del Producto' 
                                onFocus={ onFocusIn(focusKeys[0]) }
                                onBlur={ onFocusOut(focusKeys[0]) }
                                value={ name }
                                onChange={ onChange }
                                />
                        </div>
                        { focusName && name.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                    </div>
                    
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Descripción</label>
                        <div className="mt-1">
                            <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                id="description" 
                                name="description" 
                                type="text" 
                                autoComplete="off" 
                                required 
                                placeholder='Descripción' 
                                onFocus={ onFocusIn(focusKeys[1]) }
                                onBlur={ onFocusOut(focusKeys[1]) }
                                value={ description }
                                onChange={ onChange }
                                />
                        </div>
                        { focusDescription && description.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                        
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Descripción</label>
                        <div className="mt-1">
                            <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                id="price" 
                                name="price" 
                                type="text" 
                                autoComplete="off" 
                                required 
                                placeholder='Precio' 
                                onFocus={ onFocusIn(focusKeys[2]) }
                                onBlur={ onFocusOut(focusKeys[2]) }
                                value={ price }
                                onChange={ onChange }
                                />
                        </div>
                        { focusPrice && price.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                        
                    </div>

                    <div>
                        <div className="mt-10 mb-10 flex justify-center">
                            <div className='flex w-full right-0 items-center ring-1 ring-inset ring-gray-300 rounded-full border-0'>
                                <input
                                    type="text"
                                    name="category"
                                    id="cat"
                                    className="flex-[1_1_0%] rounded-xl w-full h-[40px] bg-transparent py-1.5 pl-4 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    placeholder="Categoría:"
                                    readOnly
                                    disabled
                                />
                                <select id="category" className="flex-[0.7_1_0%] rounded-xl w-full h-[40px] bg-transparent py-0 pl-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[--secondary-color] sm:text-sm">
                                    {
                                        categories?.map(({id, name}) => {
                                            return (
                                                <option key={id} value={name}>{name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        <Button type='submit' text='Agregar' styles='flex w-full rounded-3xl mb-5 justify-center bg-[--primary-color] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[--secondary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'/>
                    </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
