import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import TopSection from '../Components/Index/TopSection';
import CollectionSection from '../Components/Index/CollectionSection';
import LookbookSection from '../Components/Index/LookbookSection';
import BespokeSection from '../Components/Index/BespokeSection';
import {fetchCollectionOverviewProducts} from '../Actions/ProductActions';

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: undefined
        };
    }

    componentDidMount() {
        fetchCollectionOverviewProducts()
          .then(res => {
              this.setState({
                  collection: res.data
              })
          });
    }

    render() {
        return (
            <div className="gradient-page">
                <Header dark={true}/>
                <TopSection/>
                {this.state.collection &&
                    <CollectionSection collection={this.state.collection}/>
                }
                <LookbookSection/>
                <BespokeSection/>
                <Footer/>
            </div>
        );
    }
}