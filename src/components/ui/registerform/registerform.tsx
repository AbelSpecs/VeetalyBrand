'use client'

import React, { FormEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import logo from '@/assets/Logo.svg';
import { useForm } from '@/hooks/useForm';
import { Auth } from '@/types/auth';
import { signup } from '@/services/users';
import Link from 'next/link';

const fields = {
  name: '',
  email: '',
  password: '',
  password2: ''
};

const focus = {
  focusName: false,
  focusEmail: false,
  focusPassword: false,
  focusPassword2: false
}


export default function Registerform() {
  const router = useRouter();
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/g;
  const focusKeys = Object.keys(focus);
  const { name, email, password, password2, onChange, onFocusIn, onFocusOut, focusName ,focusEmail, focusPassword, focusPassword2 } = useForm(fields, focus); 

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const authInfo: Auth = { name, email, password };

    signup(authInfo).then((response) =>{
        if(response){
          router.push('/auth');
        }
    });
}

  return (
    <div className="flex justify-center items-center flex-col lg:flex-row">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 flex-1">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className='relative w-[72px] h-[72px] my-0 mx-auto'>
                    <Image className="mx-auto w-auto" src={logo} width={72} height={72} alt="Veetaly Logo"/>
                </div>
                <h1 className="mt-10 mb-2 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 font-semibold">Registrate</h1>
                {/* <p className='text-gray-500 text-sm leading-5 text-center'>The login page prioritizes user security,</p>
                <p className='text-gray-500 text-sm leading-5 text-center'>offering a seamless experience that ensures</p>
                <p className='text-gray-500 text-sm leading-5 text-center'>quick and convenient access to the system&apos;s</p>
                <p className='text-gray-500 text-sm leading-5 text-center'>array of benefits.</p> */}
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
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
                            onFocus={ onFocusIn(focusKeys[2]) }
                            onBlur={ onFocusOut(focusKeys[2]) } 
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
                            type="password" 
                            autoComplete="off" 
                            required 
                            placeholder='Repite Contraseña'
                            onFocus={ onFocusIn(focusKeys[3]) }
                            onBlur={ onFocusOut(focusKeys[3]) } 
                            value={ password2 }
                            onChange={ onChange }
                            />
                    </div>
                    { focusPassword2 && password2.trim().length <= 0 && password !== password2 && <p className="text-red-500 text-left text-sm">No coinciden</p> }
                </div>

                <div>
                    
                    <button type="submit" className="flex w-full rounded-3xl mb-5 justify-center bg-[--primary-color] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[--secondary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrarme</button>
                </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    ¿Ya tienes cuenta?
                    <Link href='/auth' className="font-semibold leading-6 text-[--primary-color] hover:text-[--secondary-color]"> Inicia Sesión</Link>
                </p>
            </div>
        </div>
        
    </div>
  )
}
