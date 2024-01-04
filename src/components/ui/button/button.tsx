import { GetProduct } from '@/types/product';
import React, { CSSProperties, ReactNode } from 'react'


interface ButtonProps {
    text?: string;
    styles?: string;
    type: 'button' | 'submit' | 'reset' | undefined;
    children?: ReactNode; 
    disabled?: boolean; 
    onClick?: () => void;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
}

export default function Button({text, styles, type, onClick, disabled, onMouseOver, onMouseOut, onMouseDown, onMouseUp, children}: ButtonProps) {
  

  return (
    
    <button type={type} 
            disabled={disabled}
            className={styles} 
            onClick={onClick} 
            onMouseOver={onMouseOver} 
            onMouseOut={onMouseOut}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}>
        {children}{text}
    </button>
    
  )
}
