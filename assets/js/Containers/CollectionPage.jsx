import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default class CollectionPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>

                <section className="product-cat">
                    <div className="container">
                        <div className="row">
                            <div className="col-12  justify-content-center d-flex">
                                <h2 className="collection-title">Soft Pearl Collection</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-12 product rings">
                                <img src="img/content/cat-product-1.png" alt=""/>
                                <h5>ELEGANT RING</h5>
                                <h6>Soft Pearl Collection</h6>
                                <p>Various color schemes available</p>
                                <button className="btn-buy" type="button">PURCHASE</button>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 product rings">
                                <img src="img/content/cat-product-2.png" alt=""/>
                                <h5>ELEGANT RING</h5>
                                <h6>Soft Pearl Collection</h6>
                                <p>Various color schemes available</p>
                                <button className="btn-buy" type="button">PURCHASE</button>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 product rings">
                                <img src="img/content/cat-product-3.png" alt=""/>
                                <h5>ELEGANT RING</h5>
                                <h6>Soft Pearl Collection</h6>
                                <p>Various color schemes available</p>
                                <button className="btn-buy" type="button">PURCHASE</button>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 product rings">
                                <img src="img/content/cat-product-4.png" alt=""/>
                                <h5>ELEGANT RING</h5>
                                <h6>Soft Pearl Collection</h6>
                                <p>Various color schemes available</p>
                                <button className="btn-buy" type="button">PURCHASE</button>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 product rings">
                                <img src="img/content/cat-product-1.png" alt=""/>
                                <h5>ELEGANT RING</h5>
                                <h6>Soft Pearl Collection</h6>
                                <p>Various color schemes available</p>
                                <button className="btn-buy" type="button">PURCHASE</button>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 product rings">
                                <img src="img/content/cat-product-2.png" alt=""/>
                                <h5>ELEGANT RING</h5>
                                <h6>Soft Pearl Collection</h6>
                                <p>Various color schemes available</p>
                                <button className="btn-buy" type="button">PURCHASE</button>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 product rings">
                                <img src="img/content/cat-product-3.png" alt=""/>
                                <h5>ELEGANT RING</h5>
                                <h6>Soft Pearl Collection</h6>
                                <p>Various color schemes available</p>
                                <button className="btn-buy" type="button">PURCHASE</button>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 product rings">
                                <img src="img/content/cat-product-4.png" alt=""/>
                                <h5>ELEGANT RING</h5>
                                <h6>Soft Pearl Collection</h6>
                                <p>Various color schemes available</p>
                                <button className="btn-buy" type="button">PURCHASE</button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>
            </div>
        );
    }
}