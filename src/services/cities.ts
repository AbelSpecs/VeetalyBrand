import { AxiosResponse } from "axios";
import { veetalyApi } from "./axiosInstance";
import { City } from "@/types/city";


const URL = 'cities';

const getCities = async (): Promise<AxiosResponse<City[], any | undefined>> => {
    try {
        const response = await veetalyApi.get(URL);
        return response;
    } catch (error: any) {
        throw new Error(error)
    }
}

export { getCities }