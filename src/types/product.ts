import { BoxType } from "./boxType";
import { Ingredient } from "./ingredient";

export interface GetProduct {
    id: string;
    name: string;
    description: string;
    category?: string;
    ingredients?: Ingredient[];
    boxTypes: BoxType[];
    image?: string,
    imageUrl?: string,
    status: boolean
}

export interface PostProduct {
    id?: string;
    name: string;
    description: string;
    category?: string;
    ingredients?: Ingredient[];
    boxType: BoxType;
    image?: string,
    imageUrl?: string,
    status?: boolean
}