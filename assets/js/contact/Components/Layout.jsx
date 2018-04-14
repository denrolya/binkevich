import React, {Component} from 'react';
import HeaderDark from '../../../common/Components/HeaderDark.jsx';
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
                <HeaderDark/>
                <ContactForm/>
                <Footer/>
            </div>
        )
    }
}