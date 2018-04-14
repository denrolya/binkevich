import React, {Component} from 'react';

export default class HomeTopBlock extends Component {
    render() {

        return (
            <section class="home-top-block">

                <div class="top-img position-absolute"></div>

                <div class="container">
                    <div class="row">
                        <div class="col-xl-7 col-sm-9 col-10">
                            <h4 class="marg-b-30">Carefully crafted in Great Britain</h4>
                            <h1>Innovative Jewellery</h1>
                            <p>
                                Bringing joy through exceptional design and high precision.
                                Combining traditional craftmanship with the latest
                                technology, each piece is finished to perfection.
                            </p>
                            <a href="#" class="btn btn-transparent">VIEW COLLECTION</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


