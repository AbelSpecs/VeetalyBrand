import { PaypalAmount } from "./paypalAmount"
import { PaypalItem } from "./paypalItem"
import { PaypalShipping } from "./paypalShipping"

export interface PaypalOrder {
    intent: "CAPTURE" | "AUTHORIZE",
    purchase_units: [
        {
            reference_id?: string,
            description?: string,
            custom_id?: string,
            soft_descriptor?: string,
            amount: PaypalAmount,
            items: PaypalItem[],
            shipping?: PaypalShipping
        }
    ]
}