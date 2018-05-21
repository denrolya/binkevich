import React, {Component} from 'react';
import { fetchCollections } from '../Actions/HeaderActions';
import HeaderComponent from '../Components/HeaderComponent';

export default class HeaderContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: []
        };
    }

    componentDidMount() {
        fetchCollections()
            .then(data => {
                this.setState({
                    collections: data.data
                });
            });
    }

    render() {
        return (
            <HeaderComponent collections={this.state.collections} dark={this.props.dark}></HeaderComponent>
        );
    }
}