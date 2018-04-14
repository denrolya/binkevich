import React, {Component} from 'react';

export default class FooterOld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: []
        }
    }

    render() {

        return (
            <div>
                <hr/>
                <footer>Your footer!
                </footer>
            </div>
        );
    }
}