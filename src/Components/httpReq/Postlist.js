import React, { Component } from 'react';
import axios from 'axios';
class Postlist extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            errormessage : ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {console.log(error)
            this.setState({
                errormessage : 'We got an error fetching this data'
            })
        })
    }
    render() {
        const { posts,errormessage } = this.state
        return (
            <div>
                List of posts 
                {
                posts.length ? posts.map(posts => <div key={posts.id}>{posts.title}</div>) : null
                }
                {errormessage ? <div>{errormessage}</div> : null}
                
            </div>
        );
    }
}

export default Postlist;