import { Auth } from "@/types/auth";


const login = async (data: Auth): Promise<Auth> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const res = await response.json();
        console.log(res);
        return res;
    } catch (error: any) {
        throw new Error(error);
    }
}

export { login }