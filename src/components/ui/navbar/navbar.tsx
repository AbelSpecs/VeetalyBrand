'use client'
import React, { useEffect, useState } from 'react';
import logo from '../../../assets/Logo.svg';
import user from '@/assets/user.png';
import Image from 'next/image';
import auth from '@/helpers/auth';
import Dropdownmenu from '../dropdownmenu/dropdownmenu';
import Cart from '../cart/cart';
import { useRouter } from 'next/navigation';
import cart from '../../../assets/shopping-cart-icon.svg';
import Button from '../button/button';
import Link from 'next/link';

export default function Navbar() {
  const { isAuthenticated } = auth;
  const [hideMenu, setHideMenu] = useState(false);
  const [hideCart, setHideCart] = useState(false);	
  const router = useRouter();
  const username = isAuthenticated() && JSON.parse(sessionStorage.getItem('name')!);

  const handleMenu = () => {
    isAuthenticated() && setHideMenu(prev => !prev);
  }

  const handleCart = () => {
    setHideCart(prev => !prev);
  }
    
  return (
    <>
      <nav className="bg-white flex items-center justify-between flex-wrap p-6 sticky top-[1px] z-[1]">
        <div className="flex gap-5 items-center flex-shrink-0 text-white mr-6">
          <Image src={logo} width={48} height={53} alt="logo" className="align-middle border-none cursor-pointer" onClick={() => { router.push('/')}} />
          <Link href='#' className='text-[--primary-color] font-bold'>Productos</Link>
          <Link href='#' className='text-[--primary-color] font-bold'>Ofertas</Link>
          <Link href='#' className='text-[--primary-color] font-bold'>Distribución</Link>
          <Link href='#' className='text-[--primary-color] font-bold'>Nosotros</Link>
        </div>   
        <div className="lg:flex lg:items-center lg:w-auto justify-end">
          <div className="flex gap-5">
            <div className="flex flex-col text-white items-center justify-center">
              {
                isAuthenticated() 
                ?
                <p className="font-normal text-lg tracking-tight text-black font-semibold">Bienvenido {username}</p>
                :
                <Button type='button' styles='flex w-full rounded-3xl justify-center bg-[--primary-color] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-transparent hover:text-[--primary-color] hover:border-2 hover:border-[--primary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        onClick={() => router.push('/auth')}>Iniciar Sesión</Button>
              }
            </div>
            {
              isAuthenticated() &&
              <Image src={user} width={36} height={36} alt="logo" className="cursor-pointer shadow rounded-full max-w-full h-auto align-middle border-none" onClick={handleMenu}/>
            }
            {
              isAuthenticated() && <Image src={cart} width={28} height={28} alt="cart" className='cursor-pointer' onClick={handleCart}/> 
            }
          </div>
        </div>
      </nav>
      {
        hideMenu && <Dropdownmenu/>
      }
      {
        hideCart ? <Cart styles=' translate-x-[0]' handleCart={handleCart}/> : <Cart styles=' translate-x-[31rem]' handleCart={handleCart}/>
      }
    </>
  )
}
