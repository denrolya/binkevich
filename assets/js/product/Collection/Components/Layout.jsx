import React, {Component} from 'react';
import Header from '../../../common/Containers/Header';
import Footer from '../../../common/Components/Footer';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}