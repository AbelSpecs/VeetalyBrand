export interface City{
    id: string;
    name: string;
    shipping: number;
}


export interface GroupedCities {
    shipping: number;
    names: string[];
}