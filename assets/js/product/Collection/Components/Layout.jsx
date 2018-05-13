import React, {Component} from 'react';
import HeaderWhite from '../../../common/Components/HeaderWhite';
import Footer from '../../../common/Components/Footer';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderWhite/>
                <Footer/>
            </div>
        );
    }
}