'use client'

import { postCheckoutPaypal } from "@/services/paypal";
import Button from "@/components/ui/button/button";
import Item from "@/components/ui/item/item";
import { CartContext } from "@/providers/cartProvider";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ChangeEvent, useContext, useState } from "react";

import { CreateOrderData } from "@paypal/paypal-js/types/components/buttons";
import { PaypalOrder } from "@/types/paypalOrder";
import { GroupedCities } from "@/types/city";
import { useForm } from "@/hooks/useForm";
import { createPaypalOrder } from "@/helpers/paypal";
import { CartItem } from "@/types/cartItem";
import { PaypalShipping } from "@/types/paypalShipping";


const initialOptions = {
    clientId: "AYIKs3kDQ4F4H65f9Ranz7yd9QE4m0pUn5yRu8saCglc0VlPnMC3LDgfPJwiWRpprjVRw7hejqN9r3M9"
}

interface CheckoutFormProps{
    cities?: GroupedCities[]; 
}

const fields = {
    name: '',
    lastName: '',
    address: '',
    postal: '',
    city: '',
    province: '',
    phone: ''
  };
  
  const focus = {
    focusName: false,
    focusLastName: false,
    focusAddress: false,
    focusPostal: false,
    focusCity: false,
    focusProvince: false,
    focusPhone: false
  }

  

export default function CheckoutForm({cities}: CheckoutFormProps) {
    const { items, total } = useContext(CartContext)!;
    const [show, setShow] = useState(false);
    const [shipping, setShipping] = useState(0);
    const focusKeys = Object.keys(focus);
    const { name, lastName, address, postal, city, province, phone, focusName, focusLastName, 
            focusAddress, focusPostal, focusCity, focusProvince, focusPhone, onFocusIn, onFocusOut, onChange 
          } = useForm(fields, focus);


    const handlePayment = (event: ChangeEvent<HTMLInputElement>) => {
        const paymentMethod = event.target.value;
        paymentMethod === 'paypl' ? setShow(true) : setShow(false);
        
    }

    const handleShipping = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(Number(event.target.value));
        setShipping(Number(event.target.value));
    }

    const onCreateOrder = (_data: CreateOrderData, _actions: any, items: CartItem[], total: number) => {
        const newTotal = total + shipping;
        const paypalOrder = createPaypalOrder(newTotal.toString(), items, total.toString(), shipping.toString());
        return postCheckoutPaypal(paypalOrder);
    }

    return (
        <PayPalScriptProvider options={initialOptions}>
            <div className="flex flex-col justify-evenly items-center gap-10 p-5 lg:flex-row lg:items-start">
                <div className="w-1/3">
                    <div className="">
                        <form className="space-y-6">
                            <div>
                                <h1 className="mb-7 font-bold text-lg">Datos de Entrega</h1>
                                <div className="flex flex-col justify-between items-center gap-1 lg:flex-row">
                                    <div className="w-full lg:flex-auto">
                                        {/* <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label> */}
                                        <div className="mb-5">
                                            <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                                                id="name" 
                                                name="name" 
                                                type="text" 
                                                autoComplete="off" 
                                                required 
                                                placeholder='Nombre'
                                                value={name}
                                                onFocus={ onFocusIn(focusKeys[0]) }
                                                onBlur={ onFocusOut(focusKeys[0]) } 
                                                onChange={onChange}
                                                />
                                        </div>
                                        {/* { focusEmail && email.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                                        { email.trim().length > 0 && !email.trim().match(pattern) && <p className="text-red-500 text-left text-sm">Debe ser un Email</p> } */}
                                    </div>

                                    <div className="w-full lg:flex-auto">
                                        {/* <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Apellido</label> */}
                                        <div className="mb-5">
                                            <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                                                id="lastName" 
                                                name="lastName" 
                                                type="text" 
                                                autoComplete="off" 
                                                required 
                                                placeholder='Apellido'
                                                value={lastName}
                                                onFocus={ onFocusIn(focusKeys[1]) }
                                                onBlur={ onFocusOut(focusKeys[1]) } 
                                                onChange={onChange}
                                                />
                                        </div>
                                        {/* { focusPassword && password.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> } */}
                                    </div>
                                </div>
                                <div>
                                    {/* <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Dirección</label> */}
                                    <div className="mb-5">
                                        <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                                            id="address" 
                                            name="address" 
                                            type="text" 
                                            autoComplete="off" 
                                            required 
                                            placeholder='Dirección Completa' 
                                            value={address}
                                            onFocus={ onFocusIn(focusKeys[2]) }
                                            onBlur={ onFocusOut(focusKeys[2]) } 
                                            onChange={onChange}
                                            />
                                    </div>
                                    {/* { focusEmail && email.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                                    { email.trim().length > 0 && !email.trim().match(pattern) && <p className="text-red-500 text-left text-sm">Debe ser un Email</p> } */}
                                </div>
                                <div className="flex flex-col justify-between gap-1 lg:flex-row">
                                    <div>
                                        {/* <label htmlFor="postal" className="block text-sm font-medium leading-6 text-gray-900">Código Postal</label> */}
                                        <div className="mb-5">
                                            <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                                                id="postal" 
                                                name="postal" 
                                                type="text" 
                                                autoComplete="off" 
                                                required 
                                                placeholder='Código Postal' 
                                                value={postal}
                                                onFocus={ onFocusIn(focusKeys[3]) }
                                                onBlur={ onFocusOut(focusKeys[3]) }
                                                onChange={onChange} 
                                                />
                                        </div>
                                        {/* { focusEmail && email.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                                        { email.trim().length > 0 && !email.trim().match(pattern) && <p className="text-red-500 text-left text-sm">Debe ser un Email</p> } */}
                                    </div>

                                    <div>
                                        {/* <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">Ciudad</label> */}
                                        <div className="mb-5">
                                            <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                                                id="city" 
                                                name="city" 
                                                type="text" 
                                                autoComplete="off" 
                                                required 
                                                placeholder='Ciudad'
                                                value={city}
                                                onFocus={ onFocusIn(focusKeys[4]) }
                                                onBlur={ onFocusOut(focusKeys[4]) } 
                                                onChange={onChange}
                                                />
                                        </div>
                                        {/* { focusPassword && password.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> } */}
                                    </div>
                                    <div>
                                        {/* <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">Estado</label> */}
                                        <div className="mb-5">
                                            <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                                                id="province" 
                                                name="province" 
                                                type="text" 
                                                autoComplete="off" 
                                                required 
                                                placeholder='Estado/Provincia'
                                                value={province}
                                                onFocus={ onFocusIn(focusKeys[5]) }
                                                onBlur={ onFocusOut(focusKeys[5]) }
                                                onChange={onChange} 
                                                />
                                        </div>
                                        {/* { focusPassword && password.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> } */}
                                    </div>
                                </div>
                                <div>
                                    {/* <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Teléfono</label> */}
                                    <div className="mb-5">
                                        <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                                            id="phone" 
                                            name="phone" 
                                            type="tel" 
                                            autoComplete="off" 
                                            required 
                                            placeholder='Teléfono' 
                                            value={phone}
                                            onFocus={ onFocusIn(focusKeys[6]) }
                                            onBlur={ onFocusOut(focusKeys[6]) } 
                                            onChange={onChange}
                                            />
                                    </div>
                                    {/* { focusEmail && email.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                                    { email.trim().length > 0 && !email.trim().match(pattern) && <p className="text-red-500 text-left text-sm">Debe ser un Email</p> } */}
                                </div>
                            </div>
                            <div>
                                <h1 className="mb-7 font-bold text-lg">Costo Envío</h1>
                                <div className='flex flex-col justify-between'>
                                    {
                                        cities?.map((city, index) => {
                                            const citiesNames = city.names.join(', ')
                                            return (
                                                <div key={index} className="flex justify-between mb-5">
                                                    <div className="flex">
                                                        <input id="shipping" name="shipping" type="radio" value={city.shipping} onChange={handleShipping} className="block mr-2 border-2 border-gray-300"/>
                                                        <label htmlFor="shipping" className="block text-sm font-medium leading-6 text-gray-900">{citiesNames}</label>
                                                    </div>
                                                    <div>
                                                        <p>${city.shipping}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                                <h1 className="mb-7 font-bold text-lg">Pago</h1>
                                <fieldset>
                                    <div className="flex gap-5">
                                        <div className='flex'>
                                            <input id="credit" name="payment" value="credit" type="radio" defaultChecked className="block mr-2 border-2 border-gray-300" onChange={handlePayment}/>
                                            <label htmlFor="credit" className="block text-sm font-medium leading-6 text-gray-900">Tarjeta de Crédito</label>
                                        </div>
                                        <div className='flex'>
                                            <input id="paypl" name="payment" value="paypl" type="radio" className="block mr-2 border-2 border-gray-300" onChange={handlePayment}/>
                                            <label htmlFor="paypl" className="block text-sm font-medium leading-6 text-gray-900">Paypal</label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="relative">
                                <div className='ease-in-out duration-300' style={{opacity: show ? "0" : "1", visibility: show ? "hidden" : "visible"}}>
                                    <div className="relative w-full flex flex-col mb-5">
                                        <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6" 
                                                id="card_number"
                                                type="text" 
                                                name="card_number" 
                                                placeholder="Número de Tarjeta" 
                                        />
                                    </div>
                                    <div className="flex w-full gap-1 flex-col lg:flex-row">
                                        <div className="relative flex-auto flex flex-col mb-5">
                                            <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6" 
                                                    id="expire_date"
                                                    type="text" 
                                                    name="expire_date" 
                                                    placeholder="Vencimiento(MM/YY)" 
                                            />
                                        </div>
                                        <div className="relative flex-auto flex flex-col mb-5">
                                            <input className="block w-full rounded-3xl h-[40px] border-0 py-1.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6" 
                                                    id="card_cvc"
                                                    type="text" 
                                                    name="card_cvc" 
                                                    placeholder="Código de Seguridad" 
                                            />
                                        </div>
                                    </div>
                                    <Button type='submit' text='Pagar' styles='flex w-full rounded-3xl mb-5 justify-center bg-[--primary-color] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[--secondary-color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'/>
                                </div>
                                <div className="absolute w-full top-0 ease-in-out duration-300" style={{opacity: !show ? "0" : "1", visibility: !show ? "hidden" : "visible"}}>
                                    <div className="relative rounded-3xl">
                                        <PayPalButtons 
                                            style={{color: "blue", layout: "horizontal", label: "pay", shape: "pill"}}
                                            createOrder={async (data, actions) => onCreateOrder(data, actions, items!, total)}
                                            onApprove={async (data, actions)  => {
                                                console.log(actions);
                                                return actions.order!.capture().then((details) => {
                                                    console.log('Order ID:', details.id);
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="pt-10">
                    <div className="w-96">
                        <div className="mb-10">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {
                                    items!.map((item) => {
                                        const id = item.product.id?.concat(item.product.boxType._id);
                                        return (
                                            <Item key={id} item={item}/>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <p className="text-sm">Subtotal</p>
                            <p className="font-bold">${total}</p>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <p className="text-sm">Envío</p>
                            <p className="font-bold">${shipping}</p>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <p className="text-md font-bold">Total</p>
                            <p className="font-bold">${total + shipping}</p>
                        </div>
                    </div>
                </div>

            </div>
        </PayPalScriptProvider>
    )
}