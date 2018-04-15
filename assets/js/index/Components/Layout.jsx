import React, {Component} from 'react';
import Header from './Header';
import Footer from '../../common/Components/Footer';
import HomeProductBlock from './HomeProductBlock';
import HomeTopBlock from "./HomeTopBlock";
import HomeWhiteCarousel from "./HomeWhiteCarousel";
import HomeBlackCarousel from "./HomeBlackCarousel";

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <HomeTopBlock/>
                <HomeProductBlock/>
                <HomeWhiteCarousel/>
                <HomeBlackCarousel/>
                <Footer/>
            </div>
        );
    }
}