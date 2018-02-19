import React, {Component} from 'react';
import Header from '../../../common/Components/Header.jsx';
import HeaderLight from '../../../common/Components/HeaderLight.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';

export default class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPosts: []
        }
    }

    //<HeaderLight/>

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