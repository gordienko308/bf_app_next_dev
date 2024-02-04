import data from '@/app/lib/data';
import { ProductItem } from '@/app/ui/productItem';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-7">
      <div className={'grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'}>
        {data.products.map((product) =>
          <ProductItem
            product={product}
            dateS={data.dates[0].date}
            key={product.slug}
          />
        )}
      </div>
    </main>
  )
}
