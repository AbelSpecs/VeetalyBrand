import { CartItem } from "@/types/cartItem"
import { PaypalAmount } from "@/types/paypalAmount"
import { PaypalItem } from "@/types/paypalItem"
import { PaypalOrder } from "@/types/paypalOrder"

export const createPaypalOrder = (newtotal: string, items: CartItem[], total: string, shipping: string) => {

    const paypalAmount: PaypalAmount = {
        currency_code: 'USD',
        value: newtotal,
        breakdown: {
            item_total: {
                currency_code: 'USD',
                value: newtotal        
            }
            
        }
    }

    const paypalItems: PaypalItem[] =  items.map((item): PaypalItem => {
        return {
            name: item.product.name,
            description: item.product.description.split('.')[0],
            quantity: item.askedQuantity.toString(),
            unit_amount: {
                currency_code: 'USD',
                value: item.product.boxType.price.toString()
            }
        }
    })

    const paypalShipping: PaypalItem = {
        name: 'Shipping',
        description: 'Shipping',
        quantity: '1',
        unit_amount: {
            currency_code: 'USD',
            value: shipping
        }
    }

    paypalItems.push(paypalShipping);

    const paypalOrder: PaypalOrder = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: paypalAmount,
                items: paypalItems
            }
        ]
    }

    return paypalOrder;
}