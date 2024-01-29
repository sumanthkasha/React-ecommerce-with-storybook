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
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [slidesToScroll, setSlidesToScroll] = useState(2);

    useEffect(() => {
        if (data) {
            setShirtData(filterCollectionData(data, shirt));
            setShoesData(filterCollectionData(data, shoe));
        }
    }, [data]);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 992) {
            setSlidesToShow(3);
            setSlidesToScroll(2);
          } else if (window.innerWidth >= 768) {
            setSlidesToShow(2);
            setSlidesToScroll(1);
          } else {
            setSlidesToShow(1);
            setSlidesToScroll(1);
          }
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                <Carousel data={handleFirstSevenData(shirtData)} autoplay={false} dots={false} variableWidth= {true} slidesToScroll={slidesToScroll} slidesToShow={slidesToShow} />
            </section>
            <section className='home-category home-category--shoes-carousel'>
                <div className="d-flex justify-content-between">
                    <h2 className='home-category__title'>Explore our new collections</h2>
                    <Button className="btn home-category__btn">
                        <Link to={"/collections/" + shoe} >View All</Link>
                    </Button>
                </div>
                <Carousel data={handleFirstSevenData(shoesData)} autoplay={false} dots={false} variableWidth= {true} slidesToScroll={slidesToScroll} slidesToShow={slidesToShow} />
            </section>
        </main>
    );
}