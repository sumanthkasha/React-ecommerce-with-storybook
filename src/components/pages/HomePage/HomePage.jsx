import React, { useEffect, useState } from 'react';

import { HeroBanner } from '../../organisms/HeroBanner/HeroBanner';
import { Carousel } from '../../../stories/molecules/Carousel/Carousel';
import './HomePage.scss';
import { useSelector } from 'react-redux';

export default function Home() {
    const state = useSelector((state) => state);

    const [shirtData, setShirtData] = useState();
    const [shoesData, setShoesData] = useState();

    useEffect(() => {
        if (state.productData.data) {
            setShirtData(state.productData.data.filter(element => element.type === "shirt"));
            setShoesData(state.productData.data.filter(element => element.type === "shoe"));
        }
    }, [state.productData.data])

    function handleFirstSevenData(data) {
        if (data) return data.slice(0, 7);
        return []
    }


    return (
        <main className='cmp-home'>
            <HeroBanner />
            <section className='home-category home-category--shirts-carousel'>
                <h2 className='home-category__title'>New Arrivals</h2>
                <Carousel data={handleFirstSevenData(shirtData)} autoplay={false} dots={false} variableWidth= {true} slidesToScroll={3} />
            </section>
            <section className='home-category home-category--shoes-carousel'>
                <h2 className='home-category__title'>Explore our new collections</h2>
                <Carousel data={handleFirstSevenData(shoesData)} autoplay={false} dots={false} variableWidth= {true} slidesToScroll={3} />
            </section>
        </main>
    );
}