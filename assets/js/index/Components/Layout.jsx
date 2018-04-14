import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import HeaderLight from '../../common/Components/HeaderLight';
import Footer from '../../common/Components/Footer';
import HomeProductBlock from './HomeProductBlock';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderLight/>
                <HomeProductBlock/>
                <Footer/>
            </div>
        );
    }
}