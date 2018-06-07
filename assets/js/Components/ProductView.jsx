import React from 'react';
import {parse} from 'url';
import ImageCarousel from '../Components/ImageCarousel';

export default class ProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {product: {}};
    }

    getProductID() {
        // get URL
        const URL = window.location.href;
        // parse URL
        const parseUrl = parse(URL.toString());
        // TODO path or pathname
        const path = parseUrl.path;
        // get ID
        // split parsed url path (" " / "product" / "1") and get 3-rd piece
        return path.split('/')[2];
    }

    componentDidMount() {
        const productID = this.getProductID();
        fetch(
            ('http://localhost:8000/api/v1/products/' + productID), {
                method: 'GET',
                mode: 'CORS'
            }
        ).then(res => res.json())
            .then(json => {
                console.log("here1 " + json);
                this.setState({
                    product: json.data
                })
            })
            .then(() => {
                console.log("here2 " + this.state.product.name);
                console.log("here3 " + this.state.product.productImages);
            })
    }

//
// {this.state.product && this.state.product.name &&
    //    <h2>Ring {this.state.product.name}</h2>}
    render() {
        return (
            <section className="single-product">
                {this.state.product.name &&
                <div className="container">
                    <div className="row">

                        <div className="col-xl-5 col-sm-12 order-xl-1  order-2 d-flex align-items-center">
                            <div className="w-100">
                                <h2><span>{this.state.product.name}</span></h2>

                                <h6><span>{this.state.product.shortDescription}</span></h6>
                                <p>
                                    {this.state.product.description}
                                </p>
                                <div className="wrap-prise">
                                    <h3 className="prise">£120</h3>
                                    <button type="button" className="btn btn-transparent" data-toggle="modal"
                                            data-target="#purchase-modal">PURCHASE
                                    </button>
                                </div>
                            </div>
                        </div>

                        {this.state.product.productImages.length > 0 &&
                        <div class="col-xl-7 col-sm-12 order-xl-2 order-1">
                            <div id="product-img-carousel" class="carousel slide" data-ride="carousel">
                                <ImageCarousel id="white-carousel" items={this.state.product.productImages}
                                               indicators={true}/>
                            </div>
                        </div>
                        }
                    </div>
                </div>
                }
            </section>
        )
    }
}