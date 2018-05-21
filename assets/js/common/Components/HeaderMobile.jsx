import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
                                            <a href="/categories/ring">RINGS</a>
                                        </li>
                                        <li>
                                            <a href="/categories/earring">EARRINGS</a>
                                        </li>
                                        <li>
                                            <a href="/categories/bangle">BANGLES</a>
                                        </li>
                                        <li>
                                            <a href="/categories/pendant">PENDANTS</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="have-sub-mobile-menu">COLLECTIONS</a>
                                    <ul>
                                        {this.props.collections && this.props.collections.map((collection, i) => {
                                            return (
                                                <li key={i}>
                                                    <a href={'/collections/' + collection.slug}>{collection.name}</a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/lookbook">LOOKBOOK</a>
                        </li>
                        <li>
                            <a href="/bespoke">BESPOKE</a>
                        </li>
                        <li>
                            <a href="/contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}