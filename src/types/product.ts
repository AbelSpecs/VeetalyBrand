import { Ingredient } from "./ingredient";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    quantity: number;
    ingredients?: Ingredient[];
    
}