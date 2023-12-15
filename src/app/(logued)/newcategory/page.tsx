'use client'

import React from 'react';
import { useRouter } from 'next/navigation'
import { useForm } from '@/hooks/useForm';
import Button from '@/components/ui/button/button';
import { PostCategory } from '@/types/category';
import auth from '@/utils/auth';
import { postCategory } from '@/app/api/category';

const fields = {
  name: ''
  
};

const focus = {
  focusName: false
}


export default function NewCategory() {
  const router = useRouter();
  const focusKeys = Object.keys(focus);
  const { name, onChange, onFocusIn, onFocusOut, focusName } = useForm(fields, focus); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const category: PostCategory = {
      name: name.toUpperCase(),
      user: auth.getUser()
    }

    postCategory(category).then((response) => {
      if(response.data){
        router.push('/');
      }
    })
  }

  return (
    <main>
      <div className="flex justify-center items-center flex-col lg:flex-row">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 flex-1">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h1 className="mt-10 mb-2 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 font-semibold">Agregar Categoría</h1>
                  <p className='text-gray-500 text-sm leading-5 text-center'>Agrega una nueva categoría a la lista!</p>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                      <div className="mt-1">
                          <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              id="name" 
                              name="name" 
                              type="name" 
                              autoComplete="off" 
                              required 
                              placeholder='Nombre de Categoría' 
                              onFocus={ onFocusIn(focusKeys[0]) }
                              onBlur={ onFocusOut(focusKeys[0]) }
                              value={ name }
                              onChange={ onChange }
                              />
                      </div>
                      { focusName && name.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                  </div>

                  <div className='flex gap-x-5'>
                      <Button type='submit' text='Agregar' styles='flex w-full rounded-3xl mb-5 justify-center bg-[--primary-color] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[--secondary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'/>
                      <Button type='button' text='Regresar' styles='flex w-full rounded-3xl mb-5 justify-center bg-[--primary-color] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[--secondary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' 
                              onClick={() => {router.back()}}/>
                  </div>
                  </form>
              </div>
          </div>
          
      </div>
    </main>
  )
}
