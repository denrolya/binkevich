import React from 'react';
import Header from '../../common/components/Header';
import Footer from '../../common/components/Footer';
import TopSection from '../components/TopSection';
import CollectionSection from '../components/CollectionSection';
import LookbookSection from '../components/LookbookSection';
import BespokeSection from '../components/BespokeSection';
import { fetchHomePageData } from '../actions/HomePageActions';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: undefined,
            bespokeCarouselImages: [],
            lookbookCarouselImages: []
        };
    }

    componentDidMount() {
        fetchHomePageData()
            .then(res => {
                this.setState({
                    collection: res.data.collection,
                    bespokeCarouselImages: res.data.carousels.bespoke,
                    lookbookCarouselImages: res.data.carousels.lookbook
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
                <LookbookSection carouselImages={this.state.lookbookCarouselImages}/>
                <BespokeSection carouselImages={this.state.bespokeCarouselImages}/>
                <Footer/>
            </div>
        );
    }
}