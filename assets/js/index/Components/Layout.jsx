import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import HeaderLight from '../../common/Components/HeaderLight';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderLight/>
            </div>
        );
    }
}