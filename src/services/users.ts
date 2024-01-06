import { Auth } from "@/types/auth";


const signup = async(data: Auth): Promise<any> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const res = await response.json();
        return res;
    } catch (error: any) {
        throw new Error(error)
    }
} 


export { signup }