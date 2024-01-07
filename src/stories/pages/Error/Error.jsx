import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { CiWarning } from "react-icons/ci";
import './Error.scss';


export const Error = ({serverError, ...props}) => {

    return (
        <>
            {
                serverError 
                ?
                <section className="cmp-error">
                    <h1 className="cmp-error__icon"> <CiWarning /> </h1>
                    <h2 className="cmp-error__message">Uh-Oh! Server not responsing</h2>
                </section>
                :
                <section className="cmp-error">
                    <h1 className="cmp-error__code">404</h1>
                    <h2 className="cmp-error__message">Uh-Oh! Not Found</h2>
                    <p className="cmp-error__text">You’re in the middle of nowhere. The page you requested either was moved or doesn’t exist.</p>
                    <Link to=".." className="cmp-error__go-back" relative="path">Go back</Link>
                </section>
            }
        </>
    )
}

Error.propTypes = {
    serverError: PropTypes.bool,
};

Error.defaultProps = {
    serverError: false
};