import React from 'react';

export default class Header extends React.Component {
    render() {
        const collections = this.props.collections.map((collection, i) => {
            return (
                <li key={i}>
                    <a href={'/collections/' + collection.slug}>{collection.name}</a>
                </li>
            );
        });
        const categories = this.props.categories.map((category, i) => {
            return (
                <li key={i}>
                    <a className="text-uppercase" href={'/categories/' + category.slug}>{category.name}</a>
                </li>
            );
        });

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
                            <a href="/categories" className="have-sub-mobile-menu">JEWELLERY</a>
                            <ul>
                                <li className="have-sub-mobile-menu">
                                    <a href="/categories" className="have-sub-mobile-menu">CATEGORIES</a>
                                    <ul>{ categories }</ul>
                                </li>
                                <li>
                                    <a href="#" className="have-sub-mobile-menu">COLLECTIONS</a>
                                    <ul>{ collections }</ul>
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