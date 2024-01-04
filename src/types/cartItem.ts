import { PostProduct } from "./product";

export interface CartItem {
    id?: string;
    product: PostProduct;
    askedQuantity: number;
}