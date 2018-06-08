import React from 'react';

export default class CollectionSection extends React.Component {
    render() {
        return (
            <section className="home-product-block bg-white">
                <div className="row pad-0 marg-0">
                    <div className="col-xl-5 col-sm-12 pad-l-custom">
                        <h5>Feminine & Organic</h5>
                        <h2>THE SOFT PEARL COLLECTION</h2>
                        <p>
                            Curves inspired by nature help to create<br/>a feminine and stylish collection.
                        </p>
                        <a href="#" className="btn btn-darck">EXPLORE</a>

                        <div className="product-item left-item">
                            <div className="wrap">
                                <img src={ this.props.collection.earring.productImages[0].src } alt=""/>
                                <div className="wrap-text">
                                    <h3 className="title">Earrings</h3>
                                    <p className="description">{this.props.collection.earring.shortDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-sm-12 pad-r-custom bg-custom">
                        <div className="product-item right-item first">
                            <div className="wrap">
                                <img src={ this.props.collection.bangle.productImages[0].src } alt=""/>
                                <div className="wrap-text">
                                    <h3 className="title">BANGLE</h3>
                                    <p className="description">{this.props.collection.bangle.shortDescription}</p>
                                </div>
                            </div>
                        </div>
                        <div className="product-item right-item second">
                            <div className="wrap">
                                <img src={ this.props.collection.ring.productImages[0].src } alt=""/>
                                <div className="wrap-text">
                                    <h3 className="title">RING</h3>
                                    <p className="description">{this.props.collection.ring.shortDescription}</p>
                                </div>
                            </div>
                        </div>
                        <div className="product-item right-item third">
                            <div className="wrap">
                                <img src={ this.props.collection.pendant.productImages[0].src } alt=""/>
                                <div className="wrap-text">
                                    <h3 className="title">PENDANT</h3>
                                    <p className="description">{this.props.collection.pendant.shortDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


