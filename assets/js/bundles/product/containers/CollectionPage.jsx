import React from 'react';
import Header from '../../common/components/Header';
import Footer from '../../common/components/Footer';
import CollectionProductsSection from '../components/CollectionProductsSection';
import { extractCollectionSlugFromURI, fetchCollectionBySlug } from '../actions/ProductActions';

export default class CollectionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: undefined
        };
    }

    componentDidMount() {
        let collectionSlug = extractCollectionSlugFromURI();

        fetchCollectionBySlug(collectionSlug)
            .then(res => {
                this.setState({
                    collection: res.data
                });
            });
    }

    render() {
        return (
            <div>
                <Header/>
                {this.state.collection &&
                 <CollectionProductsSection collection={this.state.collection}/>
                }
                <Footer/>
            </div>
        );
    }
}