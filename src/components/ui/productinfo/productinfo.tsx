'use client'
import Button from '@/components/ui/button/button';
import { RouteContext } from '@/providers/routeProvider';
import { GetProduct, PostProduct } from '@/types/product';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import UnitBox from '../unitbox/unitbox';
import { useForm } from '@/hooks/useForm';
import cart from '@/assets/shopping-cart-icon.svg';
import { CartContext } from '@/providers/cartProvider';

const fields = {
  quantity: ''
}

const focus = {
  focusQuantity: ''
}

export default function ProductInfo() {
  const router = useRouter();
  const { getItem } = useContext(RouteContext)!;
  const { addItems } = useContext(CartContext)!;
  const product: GetProduct = getItem()!;
  const { quantity, focusQuantity, onChange, onFocusIn, onFocusOut } = useForm(fields, focus); 
  const [boxTypeId, setboxTypeId] = useState(product.boxTypes[0]._id);

  const checkUnit = (id: string) => {
    setboxTypeId(id);
  }

  const addtoCart = (product: GetProduct, boxTypeId: string, quantity: number) => {
    console.log(product.id);
    const newProduct: PostProduct = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      description: product.description,
      boxType: product.boxTypes.find((element) => boxTypeId === element._id)!
    } 
    
    addItems(newProduct, quantity);
  }
    
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[80px] gap-y-12 my-10">
        <div className='place-self-center'>
            <Image className='rounded-2xl rotate-90' src={product?.imageUrl!} width={400} height={450} alt='product image'/>
        </div>
        <div>
            <h5 className='mb-8 text-3xl font-bold'>{product.name}</h5>
            <p className='mb-10 text-lg'>{product?.description}</p>

            <h5 className='mb-8 text-2xl font-bold'>Ingredientes</h5>
            <div className='flex flex-wrap gap-2'>
              {
                product.ingredients?.map((ingredient, index) => {
                  return (
                    <div key={index}>
                      <p className='border-2 border-solid rounded-full p-2 text-sm bg-[--primary-color] text-white font-bold'>
                        {ingredient.name}
                      </p>
                    </div>
                  )
                })
              }
              
            </div>
        </div>
        <div className='relative'>
            <div className="mt-10 mb-10 flex justify-center">
              {
                boxTypeId === product.boxTypes[0]._id &&
                <>
                  <div className='absolute top-0 left-0'>
                    <p className='text-3xl text-[--primary-color] font-bold ease-in-out duration-300' >${product.boxTypes[0].price}.00</p> 
                    <p className='text-sm text-gray-400 ease-in-out duration-300'>{product.boxTypes[0].description}</p>
                  </div>
                </>
              }
              {
                boxTypeId === product.boxTypes[1]._id &&
                <>
                  <div className='absolute top-0 left-0'>
                    <p className='text-3xl text-[--primary-color] font-bold ease-in-out duration-300' >${product.boxTypes[1].price}.00</p> 
                    <p className='text-sm text-gray-400 ease-in-out duration-300'>{product.boxTypes[1].description}</p>
                  </div>
                </>
              }
              {
                boxTypeId === product.boxTypes[2]._id &&
                <>
                  <div className='absolute top-0 left-0'>
                    <p className='text-3xl text-[--primary-color] font-bold ease-in-out duration-300' >${product.boxTypes[2].price}.00</p> 
                    <p className='text-sm text-gray-400 ease-in-out duration-300'>{product.boxTypes[2].description}</p>
                  </div>
                </>
              }
              <div className="flex flex-wrap mt-16 w-full gap-5 justify-center">
                  <UnitBox  boxStyle={`border-2 border-solid rounded-md p-2 ${boxTypeId === product.boxTypes[0]._id ? 'bg-[--primary-color]' : ''}`} 
                            textStyle={`text-black font-semibold text-xl ${boxTypeId === product.boxTypes[0]._id ? 'text-white' : ''}`}  
                            boxType={product.boxTypes[0]}
                            onClick={() => checkUnit(product.boxTypes[0]._id)}
                  />   
                  <UnitBox  boxStyle={`border-2 border-solid rounded-md p-2 ${boxTypeId === product.boxTypes[1]._id ? 'bg-[--primary-color]' : ''}`} 
                            textStyle={`text-black font-semibold text-xl ${boxTypeId === product.boxTypes[1]._id ? 'text-white' : ''}`}  
                            boxType={product.boxTypes[1]}
                            onClick={() => checkUnit(product.boxTypes[1]._id)}
                  />  
                  <UnitBox  boxStyle={`border-2 border-solid rounded-md p-2 ${boxTypeId === product.boxTypes[2]._id ? 'bg-[--primary-color]' : ''}`} 
                            textStyle={`text-black font-semibold text-xl ${boxTypeId === product.boxTypes[2]._id ? 'text-white' : ''}`}  
                            boxType={product.boxTypes[2]}
                            onClick={() => checkUnit(product.boxTypes[2]._id)}
                  />
              </div>
            </div>
            <input className="block mx-auto mb-10 rounded-lg w-[50%] h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="quantity" 
                  name="quantity" 
                  type="number" 
                  autoComplete="off" 
                  required 
                  placeholder='Cantidad de cajas'
                  onFocus={ onFocusIn(focus.focusQuantity) }
                  onBlur={ onFocusOut(focus.focusQuantity) } 
                  value={ quantity }
                  onChange={ onChange }
            />
            <Button styles='text-white mx-auto bg-[--primary-color] block w-[50%] rounded-md px-3 py-2 text-center text-sm hover:bg-[--secondary-color] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    type='button'
                    text='Agregar al carrito'
                    onClick={() => addtoCart(product, boxTypeId, Number(quantity))}
            />

            <Button styles='text-white my-[10%] mx-auto bg-[--primary-color] block w-[50%] rounded-md px-3 py-2 text-center text-sm hover:bg-[--secondary-color] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    type='button' 
                    text='Proceder al pago' 
                    onClick={() => router.push('/checkout')}
            />
            <Button styles='text-white mx-auto bg-[--primary-color] block w-[50%] rounded-md px-3 py-2 text-center text-sm hover:bg-[--secondary-color] font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    type='button' 
                    text='Regresar'  
                    onClick={() => {router.back()}}
            />
        </div>
    </div>
  )
}
