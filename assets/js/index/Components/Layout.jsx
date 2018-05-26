import React, {Component} from 'react';
import Header from '../../common/Containers/Header';
import Footer from '../../common/Components/Footer';
import HomeProductBlock from './HomeProductBlock';
import HomeTopBlock from "./HomeTopBlock";
import HomeWhiteCarousel from "./HomeWhiteCarousel";
import HomeBlackCarousel from "./HomeBlackCarousel";

export default class Layout extends Component {
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

    render() {
        return (
            <div className="gradient-page">
                <Header dark={true}/>
                <HomeTopBlock/>
                <HomeProductBlock products={this.state.products}/>
                <HomeWhiteCarousel/>
                <HomeBlackCarousel/>
                <Footer/>
            </div>
        );
    }
}