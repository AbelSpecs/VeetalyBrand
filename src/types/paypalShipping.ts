export interface PaypalShipping {
    shipping: {
        options: [
            {
              id: string,
              label: string,
              type: "SHIPPING",
              selected: boolean,
              amount: {
                  value: string,
                  currency_code: string
              }
            }
        ]
    }
}