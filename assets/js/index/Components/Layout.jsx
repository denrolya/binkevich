import React, {Component} from 'react';
import Header from '../../common/Components/Header';
import Footer from '../../common/Components/Footer';
import HomeProductBlock from './HomeProductBlock';
import HomeTopBlock from "./HomeTopBlock";
import HomeWhiteCarousel from "./HomeWhiteCarousel";
import HomeBlackCarousel from "./HomeBlackCarousel";

export default class Layout extends Component {
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