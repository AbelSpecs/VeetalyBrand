'use client'

import React, { FormEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import logo from '@/assets/Logo.svg';
import { useForm } from '@/hooks/useForm';
import { login } from '@/app/api/auth';
import auth from '@/utils/auth';
import { Auth } from '@/types/auth';
import Link from 'next/link';



const fields = {
    email: '',
    password: ''
  };
  
  const focus = {
    focusEmail: false,
    focusPassword: false
  }

export default function Loginform() {
    const router = useRouter();
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/g;
    const focusKeys = Object.keys(focus);
    const { email, password, onChange, onFocusIn, onFocusOut, focusEmail, focusPassword } = useForm(fields, focus); 

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const authInfo: Auth = { email, password };

        login(authInfo).then((response) =>{
            if(response!.data){
                auth.authenticate(response!.data, () => {
                    router.push('/');
                })
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
                <h1 className="mt-10 mb-2 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 font-semibold">Inicia Sesión</h1>
                <p className='text-gray-500 text-sm leading-5 text-center'>The login page prioritizes user security,</p>
                <p className='text-gray-500 text-sm leading-5 text-center'>offering a seamless experience that ensures</p>
                <p className='text-gray-500 text-sm leading-5 text-center'>quick and convenient access to the system&apos;s</p>
                <p className='text-gray-500 text-sm leading-5 text-center'>array of benefits.</p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div className="mt-1">
                        <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            id="email" 
                            name="email" 
                            type="email" 
                            autoComplete="off" 
                            required 
                            placeholder='Enter your Email' 
                            onFocus={ onFocusIn(focusKeys[0]) }
                            onBlur={ onFocusOut(focusKeys[0]) }
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
                            placeholder='Enter your password'
                            onFocus={ onFocusIn(focusKeys[1]) }
                            onBlur={ onFocusOut(focusKeys[1]) } 
                            value={ password }
                            onChange={ onChange }
                            />
                    </div>
                    { focusPassword && password.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                </div>

                <div>
                    <div className="flex justify-between text-sm mb-5">
                        <div className='flex'>
                            <input id="remember" name="remember" type="radio" className="block mr-2 border-2 border-gray-300"/>
                            <label htmlFor="remember" className="block text-sm font-medium leading-6 text-gray-900">Recordarme</label>
                        </div>
                        <a href="#" className="font-semibold text-[--primary-color] hover:text-[--secondary-color]">Olvido Contraseña</a>
                    </div>
                    <button type="submit" className="flex w-full rounded-3xl mb-5 justify-center bg-[--primary-color] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[--secondary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar</button>
                </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    ¿No tienes cuenta?
                    <Link href='/signup' className="font-semibold leading-6 text-[--primary-color] hover:text-[--secondary-color]"> Crear Cuenta</Link>
                </p>
            </div>
        </div>
    </div>
  )
}
