import data from '@/app/lib/data';
import { ProductItem } from './ui/ProductItem';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className={'grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'}>
        {data.products.map((product)=>
          <ProductItem 
          product={product}
          key={product.slug}         
          />
        )}
      </div>
    </main>
  )
}
