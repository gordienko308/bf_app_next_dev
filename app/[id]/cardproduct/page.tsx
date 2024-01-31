import styles from '@/app/ui/home.module.css';
import { fetchProductById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const product = await fetchProductById(id);

    if (!product) {
        notFound();
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between ">
            <div className=''>

                <img
                    src={product.image}
                    alt={product.description}
                    width={400}
                    height={400} />
               
               


                <h1>{product.name}</h1>
                <h3>{product.description}</h3>
                <p>{product.price}</p>


                <button className={styles.buttonAdd} type='button'> Выбрать дату </button>
            </div>

        </main>)
}