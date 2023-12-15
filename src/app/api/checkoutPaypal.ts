// import { postCheckoutPaypal } from '@/app/api/checkoutPaypal';
import { AxiosResponse } from "axios";
import { veetalyApi } from "./axiosInstance";


const URL = 'checkout';

const postCheckoutPaypal = async(data: any, actions: any): Promise<string> => {
    const order = {data, actions};
    
    try {
        const response = await veetalyApi.post(URL, order);
        const paypalResponse = response.data;
        return paypalResponse;
    } catch (error: any) {
        throw new Error(error)
    }
}

export { postCheckoutPaypal }