'use client'
import dynamic from "next/dynamic";
const ProductCenter = dynamic(() => import('../../../components/ui/productinfo/productinfo'), {ssr: false})


export default function Product() {
    

    return (
        <main className='px-5'>
            <div className='mt-5'>
                <h2 className='text-2xl font-semibold'></h2>
                {
                    
                }
            </div>
            <ProductCenter/>
        </main>
    )

}