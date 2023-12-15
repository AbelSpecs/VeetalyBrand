'use client'

import { CartItem } from '@/types/cartItem';
import { Product } from '@/types/product';
import React, { createContext, useState } from 'react'

interface CartProvider {
    items : CartItem[],
    addItems: (product: Product, askedQuantity: number) => void,
    removeItems: (id: string, askedQuantity?: number) => void,
    total: number
}

export const CartContext = createContext<CartProvider | undefined | null>(null);

export const CartProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const total = items.reduce((accumulator, cart) => accumulator + cart.product.price * cart.askedQuantity, 0);

    const addItems = (product: Product, askedQuantity: number) => {
        const item = { product, askedQuantity: askedQuantity + 1 };
        const itemsList = [...items];
        const index = items.findIndex(item => item.product.id === product.id);
        if (index === -1) {
            setItems([...items, item]);
            return;
        }     
        const updatedItem = {...itemsList[index], askedQuantity: askedQuantity + 1 };
        itemsList[index] = updatedItem;
        setItems([...itemsList]);
    }

    const removeItems = (id: string, askedQuantity?: number) => {
        const item = items.find(item => item.product.id === id);
        if(item?.askedQuantity === 1){
            const index = items.findIndex(item => item.product.id === id);
            items.splice(index, 1);
            setItems([...items]);
            return;
        }
        const itemsList = [...items];
        const index = items.findIndex(item => item.product.id === id);
        const updatedItem = {...itemsList[index], askedQuantity: askedQuantity! - 1 };
        itemsList[index] = updatedItem;
        setItems([...itemsList]);
        
    }

    return (
        <CartContext.Provider value={{items, addItems, total, removeItems}} >
            {children}
        </CartContext.Provider>
    )
}



