import {parse} from 'url';
import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import {Button} from 'reactstrap';
import ImageCarousel from '../../../common/Components/ImageCarousel';

export default class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ring: {}
        }
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
            ('http://localhost:8000/api/v1/product/ring/' + productID), {
                method: 'GET',
                mode: 'CORS'
            }
        ).then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    ring: json.data
                })
            })
    }

    render() {
        return (
            <div className="row">
                <div className="col col-md-6">
                    {this.state.ring && this.state.ring.name &&
                    <h1> Ring {this.state.ring.name} </h1>
                    }
                    <hr/>

                    <h3> Brief product description </h3>
                    {this.state.ring && this.state.ring.description &&
                    <p> {this.state.ring.description} </p>
                    }

                    <div className="row">
                        <div className="col col-md-5">
                            <h3> 120 </h3>
                        </div>

                        <div className="col col-md-5">
                            <Button> Purchase</Button>
                        </div>
                    </div>

                </div>
                <div className="col col-md-6">
                    {this.state.ring && this.state.ring.productImages && this.state.ring.productImages.length > 0 &&
                    <ImageCarousel items={this.state.ring.productImages}/>
                    }
                </div>

            </div>
            //< img > ring.dow
        );
    }
}

//ring + name
// ring.description

//{this.state.ring && this.state.ring.productImages && this.state.ring.productImages.length > 0 &&
// <img src={'/' + this.state.ring.productImages[0].path} alt=""/>
//}


//TODO how to extract a number from url
//Javascript window.location parse url