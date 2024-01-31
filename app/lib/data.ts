import { unstable_noStore } from "next/cache";

const data = {
    products: [{
        name : 'Ариель',
        slug: '0001',
        category: 'Наращивание',
        image: '/images/001.png',
        price: 8500,
        brand: 'bf',
        rating: 4.9,
        numReviews: 1,
        contInStock: 0,
        description: 'Наращивание "Теперь лучше" выполненное профессионалами', 
    },
    {
        name : 'Рапунсель',
        slug: '0002',
        category: 'Наращивание',
        image: '/images/002.png',
        price: 7900,
        brand: 'bf',
        rating: 3.7,
        numReviews: 1,
        contInStock: 0,
        description: 'Наращивание "Теперь лучше" выполненное профессионалами', 
    },
    {
        name : 'Вероника',
        slug: '0003',
        category: 'Наращивание',
        image: '/images/003.png',
        price: 8900,
        brand: 'bf',
        rating: 4.8,
        numReviews: 1,
        contInStock: 0,
        description: 'Наращивание "Теперь лучше" выполненное профессионалами', 
    },
    {
        name : 'Зимняя вишня',
        slug: '0004',
        category: 'Наращивание',
        image: '/images/004.png',
        price: 9000,
        brand: 'bf',
        rating: 5,
        numReviews: 1,
        contInStock: 0,
        description: 'Наращивание "Теперь лучше" выполненное профессионалами', 
    },
    {
        name : 'CyberPank77',
        slug: '0005',
        category: 'Наращивание',
        image: '/images/005.png',
        price: 10500,
        brand: 'bf',
        rating: 4.7,
        numReviews: 1,
        contInStock: 0,
        description: 'Наращивание "Теперь лучше" выполненное профессионалами', 
    },
    {
        name : 'Теперь лучше',
        slug: '0006',
        category: 'Наращивание',
        image: '/images/006.png',
        price: 9700,
        brand: 'bf',
        rating: 4.9,
        numReviews: 1,
        contInStock: 0,
        description: 'Наращивание "Теперь лучше" выполненное профессионалами', 
    },
]}

export default data;

export async function fetchProductById(id: string) {
    const product = data.products.find(i => i.slug === id)
    
    return product;
}