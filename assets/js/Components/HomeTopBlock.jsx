import React from 'react';

export default class HomeTopBlock extends React.Component {
    render() {

        return (
            <section className="home-top-block">

                <div className="top-img position-absolute"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-sm-9 col-10">
                            <h4 className="marg-b-30">Carefully crafted in Great Britain</h4>
                            <h1>Innovative Jewellery</h1>
                            <p>
                                Bringing joy through exceptional design and high precision.
                                Combining traditional craftmanship with the latest
                                technology, each piece is finished to perfection.
                            </p>
                            <a href="#" className="btn btn-transparent">VIEW COLLECTION</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


