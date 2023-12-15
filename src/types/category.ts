export interface Categories {
    total: number;
    categories: GetCategories[];
}


export interface GetCategories {
    id?: string;
    user?: {
        id: string;
        name: string;
        email: string;
    },
    name: string;
    state: boolean;
}

export interface PostCategory {
    user?: string;
    name?: string;
}

