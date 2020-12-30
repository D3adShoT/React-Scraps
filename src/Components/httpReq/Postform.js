import React, { Component } from 'react';
import axios from 'axios';
class Postform extends Component {
    constructor() {
        super()
        this.state = {
            userId : '',
            name: '',
            body:''
        }
    }
    changeHandler = (e)=> {
        this.setState({
            [e.target.name]:[e.target.value]
        })
    }

    handleSubmit=(e)=> {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(Response => console.log(Response))
        .catch(error => console.log(error))
    }
    
    render() {
        const {userId,name,body} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div><input type='text' name='userId' value={userId} onChange={this.changeHandler}></input></div>
                    <div><input type='text' name='name' value={name} onChange={this.changeHandler}></input></div>
                    <div><input type='text' name='body' value={body} onChange={this.changeHandler}></input></div>
                    <button type='submit'>Submit Form</button>
                </form>
                
            </div>
        );
    }
}

export default Postform;