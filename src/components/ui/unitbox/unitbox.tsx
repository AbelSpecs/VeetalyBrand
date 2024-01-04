import { BoxType } from "@/types/boxType";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "../button/button";


interface UnitBoxProps{
    boxType: BoxType;
    boxStyle: string;
    textStyle: string;
    onClick?: () => void;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
}

export default function UnitBox({ boxType, boxStyle, textStyle, onMouseOver, onMouseDown, onMouseUp, onMouseOut, onClick }: UnitBoxProps) {
    const { _id: id, units } = boxType;

    return (
        <div>
            <Button type="button" 
                onClick={onClick}
                onMouseOver={onMouseOver} 
                onMouseOut={onMouseOut}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}>
                <div className={`${boxStyle}`}>
                    <p className={`${textStyle}`}>
                        {units}
                    </p>
                </div>
            </Button>
        </div>
    )
}