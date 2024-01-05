import { NavLink } from 'react-router-dom';

import BannerImg from '../../../assets/images/TA_logo.svg'
// import AnchorImage from '../../atoms/Button/AnchorImage';
// import Button from '../../atoms/Button/Button';

import './Header.scss';

export default function Header() {
    return (
      <header className="header">
        <nav className="nav-bar navbar navbar-expand-lg px-2">
            <div className="container-fluid">
                <div className='nav-bar--tablet d-flex justify-content-between'>
                    <div className="nav-bar__banner-img pe-2">
                        <NavLink aria-current="page" to="/" >
                            <img src={BannerImg} alt="Banner" /> 
                        </NavLink>
                    </div>
                    <form className="d-flex nav-bar__search nav-bar__search--tablet px-4" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="collapse nav-bar__container navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <form className="nav-bar__search nav-bar__search--desktop" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>

                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link d-flex align-items-center" aria-current="page" to="/link" title='Wishlist' >
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                <span className='nav-bar__text'> Wishlist </span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link d-flex align-items-center" aria-current="page" to="/" title='Go to cart' >
                                <span className='nav-link__cart-count'>0</span>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                <span className='nav-bar__text'>Cart</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </header>
    );
}