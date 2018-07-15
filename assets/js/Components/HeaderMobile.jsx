import React from 'react';

export default class Header extends React.Component {
    render() {
        const collections = this.props.collections.map((collection, i) => {
            return (
                <li key={i}>
                    <a href={Routing.generate('collection_product_list', {slug: collection.slug})}>{collection.name}</a>
                </li>
            );
        });
        const categories = this.props.categories.map((category, i) => {
            return (
                <li key={i}>
                    <a className="text-uppercase" href={Routing.generate('category_product_list', {slug: category.slug})}>{category.name}</a>
                </li>
            );
        });

        return (
            <div className="mobile-menu">
                <div className="wrap-els">
                    <div className="d-flex">
                        <a className="logo marg-auto" href={Routing.generate('homepage')}></a>
                        <button type="button" className="close-mobile-menu">&#10006;</button>
                    </div>

                    <ul>
                        <li>
                            <a href={Routing.generate('homepage')}>HOME</a>
                        </li>
                        <li>
                            <a href={Routing.generate('category_list')} className="have-sub-mobile-menu">JEWELLERY</a>
                            <ul>
                                <li className="have-sub-mobile-menu">
                                    <a href={Routing.generate('category_list')} className="have-sub-mobile-menu">CATEGORIES</a>
                                    <ul>{ categories }</ul>
                                </li>
                                <li>
                                    <a href="#" className="have-sub-mobile-menu">COLLECTIONS</a>
                                    <ul>{ collections }</ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href={Routing.generate('homepage') + '#section-lookbook'}>LOOKBOOK</a>
                        </li>
                        <li>
                            <a href={Routing.generate('homepage') + '#section-bespoke'}>BESPOKE</a>
                        </li>
                        <li>
                            <a href={Routing.generate('contact_form')}>CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}