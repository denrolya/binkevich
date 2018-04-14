import React, {Component} from 'react';

export default class HomeProductBlock extends Component {
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
                                <img src="img/product-1.png" alt=""/>
                                    <div className="wrap-text">
                                        <h3 className="title">Earrings</h3>
                                        <p className="description">Beautifully elegant cascade earrings.</p>

                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-sm-12 pad-r-custom bg-custom">
                        <div className="product-item right-item first">
                            <div className="wrap">
                                <img src="img/product-2.png" alt=""/>
                                    <div className="wrap-text">
                                        <h3 className="title">BANGLE</h3>
                                        <p className="description">
                                            The solidly elegant yet smooth bangle.
                                            is the statement piece of the collection.
                                        </p>
                                    </div>
                            </div>
                        </div>
                        <div className="product-item right-item second">
                            <div className="wrap">
                                <img src="img/product-3.png" alt=""/>
                                    <div className="wrap-text">
                                        <h3 className="title">RING</h3>
                                        <p className="description">
                                            A cluster of beautiful freshwater pearls make
                                            this ring a stylish centerpiece for any occasion.
                                        </p>
                                    </div>
                            </div>
                        </div>
                        <div className="product-item right-item third">
                            <div className="wrap">
                                <img src="img/product-4.png" alt=""/>
                                    <div className="wrap-text">
                                        <h3 className="title">PENDANT</h3>
                                        <p className="description">
                                            The smoothness of the freshwater pearls
                                            make this pendant the most tactile
                                            and stylish accesory in the collection.
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


