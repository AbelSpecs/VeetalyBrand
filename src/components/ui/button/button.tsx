import { Product } from '@/types/product';
import React, { ReactNode } from 'react'


interface ButtonProps {
    text?: string;
    styles?: string;
    type: 'button' | 'submit' | 'reset' | undefined;
    children?: ReactNode; 
    onClick?: () => void;
    // onClick2?: (event: any) => (product: Product, quantity: number) => void;
}

export default function Button({text, styles, type, onClick, children}: ButtonProps) {
  
  // const changeButton = onClick ? true : false;

  return (
    
    <button type={type} className={styles} onClick={onClick}>
        {children}{text}
    </button>
    
  )
}
