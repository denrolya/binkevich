import React, {Component} from 'react';

export default class HeaderLight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: []
        }
    }

    render() {
        return (
            <header> Your header!
                <hr/>
            </header>
        );

    }
}