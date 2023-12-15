import { AxiosResponse } from "axios";
import { veetalyApi } from "./axiosInstance";
import { Auth } from "@/types/auth";


const URL = 'auth';

const login = async (data: Auth): Promise<AxiosResponse<Auth, any | undefined>> => {
    try {
        const response = await veetalyApi.post(URL, data);
        return response!;
    } catch (error: any) {
        throw new Error(error);
    }
}

export { login }