'use client'

import { postCheckoutPaypal } from "@/app/api/checkoutPaypal";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
    clientId: "test",
    currency: "USD",
    intent: "capture",
}

export default function Checkout() {
    return (
        <PayPalScriptProvider options={initialOptions}>

            <div className="flex justify-center gap-10">
                <div className="w-96 ">
                    <p>pago rápido</p>
                    <PayPalButtons 
                        style={{color: "gold", layout: "horizontal", label: "pay"}}
                        createOrder={postCheckoutPaypal}
                        />
                    <hr />
                    <div className="">
                        <form className="space-y-6" >
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
                                    
                                        />
                                </div>
                                {/* { focusEmail && email.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> }
                                { email.trim().length > 0 && !email.trim().match(pattern) && <p className="text-red-500 text-left text-sm">Debe ser un Email</p> } */}
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
                                    
                                        />
                                </div>
                                {/* { focusPassword && password.trim().length <= 0 && <p className="text-red-500 text-left text-sm">Campo Requerido</p> } */}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-96">
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>$170</p>
                    </div>

                </div>

            </div>
        </PayPalScriptProvider>
    )

}