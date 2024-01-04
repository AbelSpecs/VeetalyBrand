import { CartItem } from "@/types/cartItem";

const cart = {
    
    saveCart(cart: CartItem[] | undefined) {
        if(typeof window !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        
    },

    clear(cb?: () => void) {
        if(typeof window !== "undefined"){
            localStorage.removeItem('cart');
        }
        
        cb!();
    },

    getItems(): CartItem[] {
        if(typeof window == "undefined"){
            return[];
        }

        if(localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem("cart")!);
        }

        return[]
    }
}

export default cart;