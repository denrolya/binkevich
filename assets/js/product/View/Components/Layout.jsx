import React, {Component} from 'react';
import HeaderLight from '../../../common/Components/HeaderLight.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';

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