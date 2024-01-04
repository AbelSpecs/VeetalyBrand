'use client'

import cart from '@/helpers/cart';
import { CartItem } from '@/types/cartItem';
import { PostProduct } from '@/types/product';
import React, { createContext, useEffect, useState } from 'react'

interface CartProvider {
    items : CartItem[],
    addItems: (product: PostProduct, askedQuantity: number) => void,
    removeItems: (id: string, boxTypeId: string) => void,
    total: number
}

export const CartContext = createContext<CartProvider | undefined | null>(null);

export const CartProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const { saveCart, getItems } = cart;
    const savedItems = getItems();
    const items = savedItems;
    const total = savedItems.reduce((accumulator, cart) => accumulator + cart.product.boxType.price * cart.askedQuantity, 0);


    const addItems = async (product: PostProduct, askedQuantity: number) => {
        const item = { product, askedQuantity: askedQuantity };
        const itemsList = [...savedItems];
        const index = savedItems.findIndex(item => item.product.id === product.id && item.product.boxType._id === product.boxType._id);
        if (index === -1) {
            saveCart([...savedItems, item]);
            setCartItems([...savedItems, item]);
            return;
        }     
        const updatedItem = {...itemsList[index], askedQuantity: askedQuantity };
        itemsList[index] = updatedItem;
        setCartItems([...itemsList]);
        saveCart([...itemsList])
    }

    const removeItems = (id: string, boxTypeId: string) => {
        const item = savedItems.find(item => item.product.id === id && item.product.boxType._id === boxTypeId)!;
        if(item?.askedQuantity === 1){
            const index = savedItems.findIndex(item => item.product.id === id && item.product.boxType._id === boxTypeId);
            cartItems.splice(index, 1);
            setCartItems([...savedItems]);

            savedItems.splice(index, 1);
            saveCart([...savedItems]);
            return;
        }
        const itemsList = [...savedItems];
        const index = savedItems.findIndex(item => item.product.id === id && item.product.boxType._id === boxTypeId);
        const updatedItem = {...itemsList[index], askedQuantity: item!.askedQuantity - 1 };
        itemsList[index] = updatedItem;
        setCartItems([...itemsList]);
        saveCart([...itemsList]);
    }

    return (
        <CartContext.Provider value={{items, addItems, total, removeItems}} >
            {children}
        </CartContext.Provider>
    )
}



