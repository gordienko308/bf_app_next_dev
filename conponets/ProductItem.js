import * as React from 'react';
import Link from 'next/link';
import boxImage from '@/app/ui/home.module.css'


export function ProductItem({ product }) {
    return (
        <div className='card'>
            <Link href={`/product/${product.slug}`}>
                
                    <img
                        src={product.image}
                        alt={product.description}
                        className={boxImage}
                    />
               
            </Link>
            <div className={'flex flex-col justify-center items-center p-5'}>
                <Link href={`/product/${product.slug}`}>
                   
                        <h2 className={'text-bold text-center mb-5'}>{product.name}</h2>
                        <h3 className={''}>{product.description}</h3>
                        <h3 className='text-center'>{product.price}</h3>
                    
                </Link> 
                <button> Выбрать дату </button>
            </div>
        </div>
    );
}