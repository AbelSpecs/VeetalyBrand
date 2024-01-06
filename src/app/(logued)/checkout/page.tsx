import CheckoutForm from "@/components/ui/checkoutform/checkoutform";
import { City, GroupedCities } from "@/types/city";


async function getCities():Promise<City[]> {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}cities`;
    try {
        const response = await fetch(URL);
        const cities = await response.json();
        return cities;
    } catch (error: any) {
        throw new Error(error)
    }
}

export default async function Checkout() {
    const response = await getCities();
    const cities = response.reduce((groupedCities, city) => {
        const shipping = city.shipping;

        const cityExists = groupedCities.find(city => city.shipping === shipping) as GroupedCities;

        if(cityExists){
            cityExists.names.push(city.name);
            const index = groupedCities.findIndex(city => city.shipping === shipping);
            const updateCities = {...groupedCities[index], names: cityExists.names}
            groupedCities[index] = updateCities;
        }
        else{
            groupedCities.push({shipping, names: [city.name]});
        }

        return groupedCities;
    },[] as GroupedCities[]);


    return (
        <CheckoutForm cities={cities}/>
    )
}