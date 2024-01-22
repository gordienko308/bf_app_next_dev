import * as React from 'react';
import Link from 'next/link';
import boxImage from '@/app/ui/home.module.css';
import Image from 'next/image';

export function ProductItem({ product }) {
    return (
        <div className='card'>
            <Link href={`/product/${product.slug}`}>
                
                    <Image
                        src={product.image}
                        alt={product.description}
                        className={boxImage}
                        width={1000}
                        height={760}
                    />
               
            </Link>
            <div className={'flex flex-col justify-center items-center p-5'}>
                <Link href={`/product/${product.slug}`}>
                        <h1 className='font-size: large'>{product.name}</h1>
                        <h3 className=''>{product.description}</h3>
                        <h3 className=''>{product.price}</h3>
                    
                </Link> 
                <button> Выбрать дату </button>
            </div>
        </div>
    );
}