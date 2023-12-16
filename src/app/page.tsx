import SearchBar from '@/components/ui/searchbar/searchbar';
import ProductCard from '@/components/ui/productcard/productcard';
import Header from '@/components/ui/header/header';
import { getProducts } from './api/products';
import dynamic from 'next/dynamic';
import { Product } from '@/types/product';
import LoginForm from '@/components/ui/loginform/loginform';

const Navbar = dynamic(() => import('../components/ui/navbar/navbar'), { ssr: false});


export default async function Home() {
  // const response = await getProducts();
  // const { data: products } = response!;
  // const products: Product[] = []

  return (
    <main>
      {/* <Navbar/>
      <Header/>
      <div>
          <SearchBar/>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[80px] gap-y-12 my-10">
        {
          products?.map((product) => {
            return (              
              <ProductCard key={product.id} product={product}/>
            )
          })
        }
      </div>  */}
      <LoginForm/>
    </main>
  )
}
