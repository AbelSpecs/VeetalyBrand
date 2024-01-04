import auth from '@/helpers/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import Button from '../button/button';



export default function Dropdownmenu() {
    const router = useRouter();
    const { clear } = auth;

    return (
        <div className="relative z-[1]">
            <div className="absolute top-[-10px] right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl">   
                <Link href="/settings" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded">Settings</Link>
                <div className="py-2">
                    <hr></hr>
                </div>
                <Button type='button' text='Logout' styles='transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded' onClick={() => { clear(() => { window.location.reload() })}} />
            </div>
        </div>
    )
}
