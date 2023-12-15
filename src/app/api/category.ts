import { AxiosResponse } from "axios";
import { veetalyApi } from "./axiosInstance";
import { Categories, PostCategory } from "@/types/category";


const URL = 'categories';

const getCategories = async (): Promise<AxiosResponse<Categories, any | undefined>> => {
    try {
        const response = await veetalyApi.get(URL);
        return response!;
    } catch (error: any) {
        throw new Error(error)
    }
}

const postCategory = async(category: PostCategory): Promise<AxiosResponse<PostCategory, any | undefined>> => {
    try {
        const response = await veetalyApi.post(URL, category);
        return response!;
    } catch (error: any) {
        throw new Error(error)
    }
}

export { getCategories, postCategory }