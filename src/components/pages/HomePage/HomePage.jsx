import React from 'react';

import { HeroBanner } from '../../organisms/HeroBanner/HeroBanner';
import { ImageCmp } from "../../../stories/atoms/Image/ImageCmp";
import { Carousel } from '../../../stories/molecules/Carousel/Carousel';
import './HomePage.scss';

export default function Home() {

    const renderData = [
        {
          image: "product1.jpg",
          brand_name: "Brand A",
          type: "Type 1",
          description: "Product 1 description",
          discount: "10%",
          popularity: 4.5,
          price: "$100",
        },
        {
          image: "product2.jpg",
          brand_name: "Brand B",
          type: "Type 2",
          description: "Product 2 description",
          discount: "20%",
          price: "$150",
        },
        {
            brand_name: "Brand B",
            type: "Type 3",
            description: "Product 2 description",
            discount: "20%",
            popularity: 4.2,
            price: "$150",
        },
        {
            image: "product4.jpg",
            brand_name: "Brand B",
            description: "Product 2 description",
            discount: "20%",
            popularity: 4.2,
            price: "$150",
        },
        {
            image: "product5.jpg",
            brand_name: "Brand A",
            type: "Type 5",
            discount: "10%",
            popularity: 4.5,
            price: "$100",
        },
        {
            image: "product6.jpg",
            brand_name: "Brand B",
            type: "Type 6",
            description: "Product 2 description",
            discount: "20%",
            popularity: 4.2,
            price: "$150",
        },
    ];

    return (
        <main>
            <HeroBanner />
            <Carousel data={renderData} autoplay={false} />
            <ImageCmp figcaption={"Default Img"} />
        </main>
    );
}