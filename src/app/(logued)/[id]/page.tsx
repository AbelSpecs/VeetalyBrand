'use client'
import Button from '@/components/ui/button/button';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';


export default function Product() {
    const router = useRouter();
    const data = useSearchParams();
    const name = data.get('name');
    const category = data.get('category');
    const price = data.get('price');
    const description = data.get('description');
    const ingredients = data.get('ingredients');
    
    return (
        <main className='px-5'>
            <div className='mt-5'>
                <h2 className='text-2xl font-semibold'>{name}</h2>
                {
                    category &&
                    <p className='font-quicksand'>{category}</p>
                }
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[80px] gap-y-12 my-10">
                <div>
                    <Image className='rounded-2xl' src='https://placehold.co/400x450/png' width={400} height={450} alt='product image'/>
                </div>
                <div>
                    <h5 className='mb-8 text-2xl font-bold'>Descripción del producto</h5>
                    <p className='mb-20'>{description}</p>

                    <h5 className='mb-8 text-2xl font-bold'>Ingredientes</h5>
                    <p className='font-quicksand'>{ingredients}</p>
                </div>
                <div>
                    <p className='px-[25%] font-bold'>US${price}</p>
                    <div className="mt-10 mb-10 flex justify-center">
                        <div className='flex w-[50%] right-0 items-center ring-1 ring-inset ring-gray-300 rounded-xl border-0'>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="flex-[1_1_0%] rounded-xl w-full h-[40px] bg-transparent py-1.5 pl-4 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                placeholder="Cantidad:"
                                readOnly
                                disabled
                            />
                            <select id="quantity" className="flex-[0.7_1_0%] rounded-xl w-full h-[40px] bg-transparent py-0 pl-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[--secondary-color] sm:text-sm">
                                <option value="12">12</option>
                                <option value="24">24</option>
                                <option value="36">36</option>
                            </select>
                        </div>
                    </div>
                    <Button type='button' text='Agregar al carrito' styles='text-white mt-2 mb-10 mx-auto bg-[--primary-color] block w-[50%] rounded-md px-3 py-2 text-center text-sm hover:bg-[--secondary-color] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2' />
                    <Button type='button' text='Proceder al pago' styles='text-white mb-[30%] mx-auto bg-[--primary-color] block w-[50%] rounded-md px-3 py-2 text-center text-sm hover:bg-[--secondary-color] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2' />
                    <Button type='button' text='Regresar' styles='text-white mx-auto bg-[--primary-color] block w-[50%] rounded-md px-3 py-2 text-center text-sm hover:bg-[--secondary-color] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2' 
                            onClick={() => {router.back()}}/>
                </div>
            </div>
        </main>
    )

}