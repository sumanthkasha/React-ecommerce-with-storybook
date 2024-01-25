import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { shirt, shoe } from '../../../assets/utility';

import { HeroBanner } from '../../organisms/HeroBanner/HeroBanner';
import { Carousel } from '../../../stories/molecules/Carousel/Carousel';
import { Button } from '../../../stories/atoms/Button/Button';
import './HomePage.scss';

export default function Home() {
    const state = useSelector((state) => state);
    const { data } = state.productData;
    
    const [shirtData, setShirtData] = useState();
    const [shoesData, setShoesData] = useState();

    useEffect(() => {
        if (data) {
            setShirtData(filterCollectionData(data, shirt));
            setShoesData(filterCollectionData(data, shoe));
        }
    }, [data]);

    function filterCollectionData(dataReceived, category) {
        return dataReceived.filter(element => element.type === category);
    }

    function handleFirstSevenData(data) {
        if (data) return data.slice(0, 7);
        return [];
    }

    return (
        <main className='cmp-home'>
            <HeroBanner />
            <section className='home-category home-category--shirts-carousel'>
                <div className="d-flex justify-content-between">
                    <h2 className='home-category__title'>New Arrivals</h2>
                    <Button className="btn home-category__btn">
                        <Link to={"/collections/" + shirt} >View All</Link>
                    </Button>
                </div>
                <Carousel data={handleFirstSevenData(shirtData)} autoplay={false} dots={false} variableWidth= {true} slidesToScroll={2} />
            </section>
            <section className='home-category home-category--shoes-carousel'>
                <div className="d-flex justify-content-between">
                    <h2 className='home-category__title'>Explore our new collections</h2>
                    <Button className="btn home-category__btn">
                        <Link to={"/collections/" + shoe} >View All</Link>
                    </Button>
                </div>
                <Carousel data={handleFirstSevenData(shoesData)} autoplay={false} dots={false} variableWidth= {true} slidesToScroll={2} />
            </section>
        </main>
    );
}