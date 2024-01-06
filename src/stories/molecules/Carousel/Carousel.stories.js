import { Carousel } from "./Carousel";

export default {
    title: 'Molecules/Carousel',
    component: Carousel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

const renderData = [
    {
      image: 'product1.jpg',
      brand_name: 'Brand A',
      type: 'Type 1',
      description: 'Product 1 description',
      discount: '10%',
      popularity: 4.5,
      price: '$100',
    },
    {
      image: 'product2.jpg',
      brand_name: 'Brand B',
      type: 'Type 2',
      description: 'Product 2 description',
      discount: '20%',
      price: '$150',
    },
    {
        brand_name: 'Brand B',
        type: 'Type 3',
        description: 'Product 2 description',
        discount: '20%',
        popularity: 4.2,
        price: '$150',
    },
    {
        image: 'product4.jpg',
        brand_name: 'Brand B',
        description: 'Product 2 description',
        discount: '20%',
        popularity: 4.2,
        price: '$150',
    },
    {
        image: 'product5.jpg',
        brand_name: 'Brand A',
        type: 'Type 5',
        discount: '10%',
        popularity: 4.5,
        price: '$100',
    },
    {
        image: 'product6.jpg',
        brand_name: 'Brand B',
        type: 'Type 6',
        description: 'Product 2 description',
        discount: '20%',
        popularity: 4.2,
        price: '$150',
    },
];

export const CarouselCmp = {
    args: {
        data: renderData,
    }
}