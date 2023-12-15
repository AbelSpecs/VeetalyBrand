import React from 'react'

interface CounterProps {
    value: number;
    styles: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Counter({styles, value, onChange}: CounterProps) {
  return (
    <>
        <input type='text' className={styles} placeholder="0"
            id="quantity" 
            name="quantity" 
            autoComplete="off" 
            value={ value }
            onChange={ onChange }
        />
            
       
    </>
  )
}