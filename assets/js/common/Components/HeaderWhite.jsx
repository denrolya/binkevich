import React, {Component} from 'react';

export default class HeaderWhite extends Component {
    render() {
        return (
            <header className="bg-white">
                <div className="container d-flex">
                    <div className="mobile-menu">
                        <div className="wrap-els">
                            <div className="d-flex">
                                <a className="logo marg-auto" href="/"></a>
                                <button type="button" className="close-mobile-menu">&#10006;</button>
                            </div>

                            <ul>
                                <li>
                                    <a href="/">HOME</a>
                                </li>
                                <li>
                                    <a href="#" className="have-sub-mobile-menu">JEWELLERY</a>
                                    <ul>
                                        <li className="have-sub-mobile-menu">
                                            <a href="#" className="have-sub-mobile-menu">CATEGORIES</a>
                                            <ul>
                                                <li>
                                                    <a href="#">RINGS</a>
                                                </li>
                                                <li>
                                                    <a href="#">EARRINGS</a>
                                                </li>
                                                <li>
                                                    <a href="#">BANGLES</a>
                                                </li>
                                                <li>
                                                    <a href="#">PENDANTS</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" className="have-sub-mobile-menu">COLLECTIONS</a>
                                            <ul>
                                                <li>
                                                    <a href="jewellery-collection.html">SOFT PEARL COLLECTION</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">LOOKBOOK</a>
                                </li>
                                <li>
                                    <a href="#">BESPOKE</a>
                                </li>
                                <li>
                                    <a href="contact-page.html">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <button type="button" className="menu-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <a className="logo" href="index.html"></a>

                    <ul className="menu-list marg-l-auto align-items-center">
                        <li className="item first">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="item first have-sub-menu">
                            <a href="#">Jewellery</a>
                            <ul className="second-menu sub-menu">
                                <li className="item second have-sub-sub-menu">
                                    <a href="jewellery-categories.html">CATEGORIES</a>
                                    <ul className="third-menu sub-menu">
                                        <li className="item third">
                                            <a href="#">RINGS</a>
                                        </li>
                                        <li className="item third">
                                            <a href="#">Earrings</a>
                                        </li>
                                        <li className="item third">
                                            <a href="#">BangleS</a>
                                        </li>
                                        <li className="item third">
                                            <a href="#">PENDANTS</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item second have-sub-sub-menu">
                                    <a href="#">Collections</a>
                                    <ul className="third-menu sub-menu">
                                        <li className="item third new">
                                            <a href="jewellery-collection.html">SOFT PEARL COLLECTION
                                                <span>NEW</span></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="item first have-sub-menu">
                            <a href="#">Lookbook</a>
                        </li>
                        <li className="item first">
                            <a href="#">Bespoke</a>
                        </li>
                        <li className="item first">
                            <a href="contact-page.html">Contact</a>
                        </li>
                        <li className="first basket-icon">
                            <a href="#"></a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}