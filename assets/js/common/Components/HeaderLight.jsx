import React, {Component} from 'react';

export default class HeaderLight extends Component {
    render() {

        //TODO whats the first button <button className="navbar-toggler navbar-toggler-right"
        //TODO buttons on the right need to be in the middle of the navbar(horizontally)
        return (
            <header class="container d-flex bg-transparent position-absolute">
                <div class="mobile-menu">
                    <div class="wrap-els">
                        <div class="d-flex">
                            <a class="logo marg-auto" href="#"></a>
                            <button type="button" class="close-mobile-menu">&#10006;</button>
                        </div>


                        <ul>
                            <li>
                                <a href="#">HOME</a>
                            </li>
                            <li>
                                <a href="#" class="have-sub-mobile-menu">JEWELLERY</a>
                                <ul>
                                    <li class="have-sub-mobile-menu">
                                        <a href="#" class="have-sub-mobile-menu">CATEGORIES</a>
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
                                        <a href="#" class="have-sub-mobile-menu">COLLECTIONS</a>
                                        <ul>
                                            <li>
                                                <a href="#">SOFT PEARL COLLECTION</a>
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
                                <a href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <button type="button" class="menu-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>


                <a class="logo" href="#"></a>


                <ul class="menu-list marg-l-auto pad-t-30">
                    <li class="item first">
                        <a href="#">Home</a>
                    </li>
                    <li class="item first have-sub-menu">
                        <a href="#">Jewellery</a>
                        <ul class="second-menu sub-menu">
                            <li class="item second have-sub-sub-menu">
                                <a href="#">CATEGORIES</a>
                                <ul class="third-menu sub-menu">
                                    <li class="item third">
                                        <a href="#">RINGS</a>
                                    </li>
                                    <li class="item third">
                                        <a href="#">Earrings</a>
                                    </li>
                                    <li class="item third">
                                        <a href="#">BangleS</a>
                                    </li>
                                    <li class="item third">
                                        <a href="#">PENDANTS</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="item second have-sub-sub-menu">
                                <a href="#">Collections</a>
                                <ul class="third-menu sub-menu">
                                    <li class="item third new">
                                        <a href="#">SOFT PEARL COLLECTION <span>NEW</span></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="item first have-sub-menu">
                        <a href="#">Lookbook</a>
                    </li>
                    <li class="item first">
                        <a href="#">Bespoke</a>
                    </li>
                    <li class="item first">
                        <a href="#">Contact</a>
                    </li>
                    <li class="first lock-icon">
                        <a href="#"></a>
                    </li>
                </ul>
            </header>
        );
    }
}