'use client'

import React from 'react';
import { useRouter } from 'next/navigation'
import { useForm } from '@/hooks/useForm';
import Button from '@/components/ui/button/button';


const fields = {
    name: '',
    email: '',
    address: '',
    password: '',
    password2: ''
  };
  
  const focus = {
    focusName: false,
    focusEmail: false,
    focusAddress: false,
    focusPassword: false,
    focusPassword2: false
  }

export default function Settings() {
    const router = useRouter();
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/g;
    const focusKeys = Object.keys(focus);
    const { name, email, address, password, password2, onChange, onFocusIn, onFocusOut, 
            focusName ,focusEmail, focusAddress, focusPassword, focusPassword2 } = useForm(fields, focus); 


    return (
        <div className="flex justify-center items-center flex-col lg:flex-row">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 flex-1">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="mt-10 mb-2 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 font-semibold">Configuración de Cuenta</h1>
                    <p className='text-gray-500 text-sm leading-5 text-center'>actualiza detalles de tu cuenta</p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div className="mt-1">
                                <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="name" 
                                    name="name" 
                                    type="name" 
                                    autoComplete="off" 
                                    required 
                                    placeholder='Nombre' 
                                    onFocus={ onFocusIn(focusKeys[0]) }
                                    onBlur={ onFocusOut(focusKeys[0]) }
                                    value={ name }
                                    onChange={ onChange }
                                    />
                            </div>
                            { focusName && name.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-1">
                                <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    autoComplete="off" 
                                    required 
                                    placeholder='Email' 
                                    onFocus={ onFocusIn(focusKeys[1]) }
                                    onBlur={ onFocusOut(focusKeys[1]) }
                                    value={ email }
                                    onChange={ onChange }
                                    />
                            </div>
                            { focusEmail && email.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                            { email.trim().length > 0 && !email.trim().match(pattern) && <p className="text-red-500 text-left text-sm">Debe ser un Email</p> }
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Dirección</label>
                            <div className="mt-1">
                                <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="address" 
                                    name="address" 
                                    type="text" 
                                    autoComplete="off" 
                                    required 
                                    placeholder='Dirección' 
                                    onFocus={ onFocusIn(focusKeys[2]) }
                                    onBlur={ onFocusOut(focusKeys[2]) }
                                    value={ address }
                                    onChange={ onChange }
                                    />
                            </div>
                            { focusAddress && address.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                            </div>
                            <div className="mt-1">
                                <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    autoComplete="off" 
                                    required 
                                    placeholder='Contraseña'
                                    onFocus={ onFocusIn(focusKeys[3]) }
                                    onBlur={ onFocusOut(focusKeys[3]) } 
                                    value={ password }
                                    onChange={ onChange }
                                    />
                            </div>
                            { focusPassword && password.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password2" className="block text-sm font-medium leading-6 text-gray-900">Repetir Contraseña</label>
                            </div>
                            <div className="mt-1">
                                <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    id="password2" 
                                    name="password2" 
                                    type="password2" 
                                    autoComplete="off" 
                                    required 
                                    placeholder='Confirmar Contraseña'
                                    onFocus={ onFocusIn(focusKeys[4]) }
                                    onBlur={ onFocusOut(focusKeys[4]) } 
                                    value={ password2 }
                                    onChange={ onChange }
                                    />
                            </div>
                            { focusPassword2 && password2.trim().length <= 0 && password !== password2 && <p className="text-red-500 text-left text-sm">No coinciden</p> }
                        </div>

                        <div className='flex gap-10'>  
                            <Button type='submit' text='Actualizar' styles='text-white mt-2 mb-10 mx-auto bg-[--primary-color] block w-[50%] rounded-md px-3 py-2 text-center text-sm hover:bg-[--secondary-color] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2' />
                            <Button type='button' text='Cancelar' styles='text-white mt-2 mb-10 mx-auto bg-[--primary-color] block w-[50%] rounded-md px-3 py-2 text-center text-sm hover:bg-[--secondary-color] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                                    onClick={() => router.back()} />
                        </div>
                    </form>
                </div>
            </div>
        
    </div>
    )
}