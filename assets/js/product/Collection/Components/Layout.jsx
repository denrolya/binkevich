import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import {Button} from 'reactstrap';

export default class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            blogPosts: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/v1/product/ring', {
            method: 'GET',
            mode: 'CORS'
        }).then(res => res.json())
          .then(json => {
              this.setState({
                  rings: json.data
              })
          })
    }

    render() {
        return (
            <div>
                <h1>Big big table!</h1>

                <p>
                    <Button color="primary">primary</Button>
                    <Button color="secondary">secondary</Button>
                    <Button color="success">success</Button>
                    <Button color="info">info</Button>
                    <Button color="warning">warning</Button>
                    <Button color="danger">danger</Button>
                    <Button color="link">link</Button>
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.rings && this.state.rings.map((ring, i) => {
                            return (
                                <tr key={i}>
                                    <td>{ring.id} <Button color="danger">Test</Button></td>
                                    <td>{ring.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}