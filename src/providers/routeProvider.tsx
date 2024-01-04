'use client'


import { GetProduct } from '@/types/product';
import React, { createContext, useState } from 'react'

interface RouteProvider {
    saveItem: (product: GetProduct) => void;
    getItem: () => void;
}

export const RouteContext = createContext<RouteProvider | undefined | null>(null);

export const RouteProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [product, setProduct] = useState<GetProduct>();
    
    const saveItem = (product: GetProduct) => {
        setProduct(product);
        if(typeof window !== "undefined") {
            sessionStorage.setItem("product", JSON.stringify(product));
        }
    }

    const getItem = () => {
        if(typeof window == "undefined"){
            return;
        }

        if(sessionStorage.getItem('product')){
            return JSON.parse(sessionStorage.getItem('product')!);
        }
    }

    return (
        <RouteContext.Provider value={{saveItem, getItem}} >
            {children}
        </RouteContext.Provider>
    )
}



