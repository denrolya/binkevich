import React, {Component} from 'react';
import Header from '../../common/Containers/Header';
import Footer from '../../common/Components/Footer';
import HomeProductBlock from './HomeProductBlock';
import HomeTopBlock from "./HomeTopBlock";
import HomeWhiteCarousel from "./HomeWhiteCarousel";
import HomeBlackCarousel from "./HomeBlackCarousel";

export default class Layout extends Component {
    render() {
        return (
            <div className="gradient-page">
                <Header dark={true}/>
                <HomeTopBlock/>
                <HomeProductBlock/>
                <HomeWhiteCarousel/>
                <HomeBlackCarousel/>
                <Footer/>
            </div>
        );
    }
}