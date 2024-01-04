export interface PaypalItem {
    name: string,
    description: string,
    sku?: string,
    quantity: string,
    tax?: {
        currency_code: string,
        value: string
    },
    unit_amount: {
        currency_code: string,
        value: string
    },
    category?: string
}