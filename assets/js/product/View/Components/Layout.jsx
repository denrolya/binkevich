import React, {Component} from 'react';
import Header from '../../../common/Containers/Header';
import Footer from '../../../common/Components/Footer';
import Content from './Content';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}