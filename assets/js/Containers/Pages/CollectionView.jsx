import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import CollectionProductsSection from '../../Components/CollectionProductsSection';
import { extractCollectionSlugFromURI, fetchCollectionBySlug } from '../../Actions/ProductActions';

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

ReactDOM.render(<CollectionPage />, document.getElementById('content'));