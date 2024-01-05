import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_API_URL;

export const veetalyApi = axios.create({
    baseURL: URL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
});