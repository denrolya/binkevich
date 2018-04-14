import React, {Component} from 'react';
import HeaderLight from '../../../common/Components/HeaderLight';
import Footer from '../../../common/Components/Footer';
import Content from './Content';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <HeaderLight/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}