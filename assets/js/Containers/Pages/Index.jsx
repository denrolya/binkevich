import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import TopSection from '../../Components/Index/TopSection';
import CollectionSection from '../../Components/Index/CollectionSection';
import LookbookSection from '../../Components/Index/LookbookSection';
import BespokeSection from '../../Components/Index/BespokeSection';
import { fetchIndexPageData } from '../../Actions/IndexPageActions';

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: undefined,
            bespokeCarouselImages: [],
            lookbookCarouselImages: []
        };
    }

    componentDidMount() {
        fetchIndexPageData()
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

ReactDOM.render(<IndexPage/>, document.getElementById('content'));