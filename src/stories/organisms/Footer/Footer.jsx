import React from "react";

import { AnchorButton } from "../../atoms/Button/AnchorButton";
import './Footer.scss';

export const Footer = () => {
    return (
        <footer className='footer'>
            <section className='footer__section'>
                <div>
                    <span className='footer__section__span'>
                        <AnchorButton>
                            Conditions of Use & Sale
                        </AnchorButton>
                    </span>
                    <span className='footer__section__span'>
                        <AnchorButton>
                            Privacy Notice
                        </AnchorButton>
                    </span>
                    <span className='footer__section__span'>
                        <AnchorButton>
                            Interest-Based Ads
                        </AnchorButton>
                    </span>
                </div>
                <span>&copy; 1996-2023, TAEcommerce.com, Inc. or its affiliates</span>
            </section>
        </footer>
    )
}

Footer.propTypes = {

}

Footer.defaultProps = {
};