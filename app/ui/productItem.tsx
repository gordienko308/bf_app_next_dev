import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
                <Image
                    src={product.image}
                    alt={product.description}
                    width={0}
                    height={0}
                />
            </Link>
            <div className={'flex flex-col justify-center items-center p-5'}>
                <Link href={`/product/${product.slug}`}>
                    <h1 className=''>{product.name}</h1>
                    <h3 className='text-cyan-500 mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1'>{product.description}</h3>
                    <p className=''>{product.price}</p>

                </Link>
                <button type='submit'>Выбрать дату </button>
            </div>
        </div>
    );
}