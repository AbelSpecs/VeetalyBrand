import ProductCard from '@/components/ui/productcard/productcard';
import Header from '@/components/ui/header/header';
import dynamic from 'next/dynamic';
import { GetProduct } from '@/types/product';

const Navbar = dynamic(() => import('../components/ui/navbar/navbar'), { ssr: false});


const getProducts = async (): Promise<GetProduct[]> => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}products`;
    try {
        const response = await fetch(URL);
        const products = await response.json();
        return products;
    } catch (error: any) {
        throw new Error(error)
    }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Navbar/>
      <Header/>
      <div className='w-full mx-auto h-[30px] rounded-xl relative z-[-1]'>
        <div className='absolute top-12 left-[10%] w-[100px] h-[100px] rounded-br-full rounded-tl-full bg-[#dae5d0]'></div>
      </div>
      <h1 className='mt-6 text-3xl text-center font-bold'>Nuestros Productos</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[80px] gap-y-12 my-10">
        {
          products?.map((product) => {
            return (              
              <ProductCard key={product.id} product={product}/>
            )
          })
        }
      </div> 
    </main>
  )
}
