import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

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
                                    <td>{ring.id}</td>
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