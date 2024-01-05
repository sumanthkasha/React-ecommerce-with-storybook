import { BsSearch } from "react-icons/bs";
import './HeroBanner.scss';

import { Button } from '../../../stories/atoms/Button/Button';
export default function HeroBanner() {
    return (
        <section className="hero-banner">
            <div class="hero-banner__content">
                <h2>Welcome to TA Ecommerce</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae quam magnam obcaecati error consequatur repellat fugiat,
                    deleniti nisi eum voluptates.
                </p>
                <ul class="hero-banner__counter">
                    <li>
                        <h3>
                        <i class="fa-solid fa-bag-shopping"></i>68+k
                        </h3>
                        <span>new collections</span>
                    </li>
                    <li>
                        <h3>
                            <i class="fa-solid fa-user"></i>25,634
                        </h3>
                        <span>active customers</span>
                    </li>
                </ul>
                <button class="btn">
                    Go to Collections <i class="fa-solid fa-arrow-right"></i>
                </button>

                <Button className="mx-2" id="searchButton" size="small" > 
                    <BsSearch />
                </Button>
            </div>
            <div class="circle"></div>
        </section>
    );
}