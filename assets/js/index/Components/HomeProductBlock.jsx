import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

export default class HomeProductBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: {
                earrings: [],
                rings: [],
                pendants: [],
                bangles: []
            }
        };
    }

    componentDidMount() {
        fetch('/api/v1/index/collection', {
            method: 'GET',
            mode: 'CORS'
        }).then(res => res.json())
          .then(json => {
              this.setState({
                  products: json.data
              })
          });
    }

    // TODO: Put products data to corresponding blocks
    render() {
        return (
            <section className="home-product-block bg-white">
                { this.state.products.bangles.length > 0 &&
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
                                    <img src={ this.state.products.earrings[0].productImages[0].src } alt=""/>
                                    <div className="wrap-text">
                                        <h3 className="title">Earrings</h3>
                                        <p className="description">{this.state.products.earrings[0].shortDescription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-sm-12 pad-r-custom bg-custom">
                            <div className="product-item right-item first">
                                <div className="wrap">
                                    <img src={ this.state.products.bangles[0].productImages[0].src } alt=""/>
                                    <div className="wrap-text">
                                        <h3 className="title">BANGLE</h3>
                                        <p className="description">{this.state.products.bangles[0].shortDescription}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-item right-item second">
                                <div className="wrap">
                                    <img src={ this.state.products.rings[0].productImages[0].src } alt=""/>
                                    <div className="wrap-text">
                                        <h3 className="title">RING</h3>
                                        <p className="description">{this.state.products.rings[0].shortDescription}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-item right-item third">
                                <div className="wrap">
                                    <img src={ this.state.products.pendants[0].productImages[0].src } alt=""/>
                                    <div className="wrap-text">
                                        <h3 className="title">PENDANT</h3>
                                        <p className="description">{this.state.products.pendants[0].shortDescription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </section>
        );
    }
}


