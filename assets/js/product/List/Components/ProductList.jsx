import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import ProductItem from './ProductItem';

export default class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rings: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/v1/product/ring', {
            method: 'GET',
            mode: 'CORS'
        }).then(res => res.json())
          .then(json => {
              this.setState({
                  rings: json.data
              })
          });
    }

    render() {
        return (
            <div className="row">
                {this.state.rings && this.state.rings.map((ring, i) => {
                    return (
                        <div className="col col-md-3" key={i}>
                            <ProductItem product={ring}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}