import { BoxType } from "@/types/boxType";
import { useState } from "react";
import UnitBox from "../unitbox/unitbox";


interface CardUnitSelectorProps{
    boxType: BoxType
}

export default function CardUnitSelector({boxType}: CardUnitSelectorProps) {
    const [showDescription, setShowDescription] = useState(false);

    const onMouseOver = () => {
        setShowDescription(prev => !prev);
    }

    const onMouseOut = () => {
        setShowDescription(prev => !prev);
    }

    return (
        <>
            <UnitBox boxStyle="border-2 border-solid rounded-md p-2" 
                     textStyle="text-black font-semibold text-base" 
                     onMouseOver={onMouseOver}
                     onMouseOut={onMouseOut}
                     boxType={boxType}
            />
            <div className='ease-in-out duration-300' style={{opacity: !showDescription ? "0" : "1", visibility: !showDescription ? "hidden" : "visible"}}>
                <p className='text-md text-gray-500 font-normal absolute right-0 top-0'>
                    por <strong className='text-[--primary-color]'>{boxType.price}$</strong>
                </p>
                <p className='text-sm text-gray-500 font-normal absolute right-0 bottom-0'>
                    {boxType.shortDescription}
                </p>
            </div>
        </>
    )
}