import React from "react";
import { Link } from "react-router-dom";
import './Error.scss';


export const Error = () => {

    return (
        <section className="cmp-error">
            <h1 className="cmp-error__code">404</h1>
            <h2 className="cmp-error__message">Uh-Oh! Not Found</h2>
            <p className="cmp-error__text">You’re in the middle of nowhere. The page you requested either was moved or doesn’t exist.</p>
            <Link to=".." className="cmp-error__go-back" relative="path">Go back</Link>

        </section>
    )
}