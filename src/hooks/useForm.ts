import React, { ChangeEvent, useState} from "react";

export const useForm = <T,F>( initialState: T, initialFocusState: F ) => {
    const [data, setData] = useState(initialState);
    const [focus, setFocus] = useState(initialFocusState);

    const onFocusIn = (name: string) => (event: React.FocusEvent<HTMLInputElement, Element>) => {
        setFocus({...focus, [name]: true});
    }

    const onFocusOut = (name: string) => (event: React.FocusEvent<HTMLInputElement, Element>) => {
        setFocus({...focus, [name]: false});
    }
    
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
        
        setData({...data, [name]: value});
    }

      return { ...data, data, setData, onChange, ...focus, onFocusIn, onFocusOut }
}