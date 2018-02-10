import React, {Component} from 'react';
import HeaderLight from './HeaderLight.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';


export default class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPosts: []
        }
    }


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