import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import HeaderLight from '../../common/Components/HeaderLight';
import Footer from '../../common/Components/Footer';
import HomeProductBlock from './HomeProductBlock';
import HomeWhiteCarousel from './HomeWhiteCarousel';
import HomeTopBlock from "./HomeTopBlock";

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderLight/>
                <HomeTopBlock/>
                <HomeProductBlock/>
                <HomeWhiteCarousel/>
                <Footer/>
            </div>
        );
    }
}