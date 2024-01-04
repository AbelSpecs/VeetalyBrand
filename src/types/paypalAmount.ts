export interface PaypalAmount {
    currency_code: string,
    value: string,
    breakdown: {
        item_total: {
            currency_code: string,
            value: string        
        },
        shipping?: {
            currency_code: string,
            value: string
        },
        handling?: {
            currency_code: string,
            value: string
        },
        tax_total?: {
            currency_code: string,
            value: string
        },
        shipping_discount?: {
            currency_code: string,
            value: string
        }
    }
}