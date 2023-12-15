import { AxiosResponse } from "axios";
import { veetalyApi } from "./axiosInstance";
import { Product } from "@/types/product";


const URL = 'products';

const getProducts = async (): Promise<AxiosResponse<Product[], any | undefined>> => {
    try {
        const response = await veetalyApi.get(URL);
        return response!;
    } catch (error: any) {
        throw new Error(error)
    }
}

export { getProducts }