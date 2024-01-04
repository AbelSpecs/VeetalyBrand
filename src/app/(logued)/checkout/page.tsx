import CheckoutForm from "@/components/ui/checkoutform/checkoutform";
import { getCities } from "@/services/cities";
import { GroupedCities } from "@/types/city";


export default async function Checkout() {
    const response = await getCities();
    const { data: citiesData } = response!;
    const cities = citiesData.reduce((groupedCities, city) => {
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