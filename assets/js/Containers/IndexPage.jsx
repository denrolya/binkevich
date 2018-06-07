import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HomeProductBlock from '../Components/HomeProductBlock';
import HomeTopBlock from '../Components/HomeTopBlock';
import HomeWhiteCarousel from '../Components/HomeWhiteCarousel';
import HomeBlackCarousel from '../Components/HomeBlackCarousel';

export default class IndexPage extends React.Component {
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