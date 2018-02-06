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
        fetch('http://budget.loc/app_dev.php/api/v1/post', {
            method: 'GET',
            mode: 'CORS'
        }).then(res => res.json())
          .then(json => {
              this.setState({
                  blogPosts: json.posts
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

                        {this.state.blogPosts && this.state.blogPosts.map((post, i) => {
                            return (
                                <tr key={i}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}