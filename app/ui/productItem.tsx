import * as React from 'react';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';

export function ProductItem({product}: {
    product : {
        name : string,
        slug: string,
        category: string,
        image: string,
        price: number,
        brand: string,
        rating: number,
        numReviews: number,
        contInStock: number,
        description: string, 
    
}}) {
    return (
        <div className=''>
            <Link href={`/product/${product.slug}`}>
                <img
                    src={product.image}
                    alt={product.description}
                    width={400}
                    height={400}
                />
            </Link>
            <div className={'flex flex-col justify-center items-center p-5'}>
                <Link href={`/product/${product.slug}`}>
                    <h1>{product.name}</h1>
                    <h3>{product.description}</h3>
                    <p>{product.price}</p>

                </Link>
                <button className={styles.buttonAdd} type='button'> Выбрать дату </button>
            </div>
        </div>
    );
}