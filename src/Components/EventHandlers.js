import React, { Component } from 'react'
import { render } from 'react-dom'


class EventHandlers extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Hello World'
        }

        this.changemessage = this.changemessage.bind(this)
    }

    changemessage = () =>{
        this.setState({
            message:"How are you!!"
        })
        console.log(this)
    }
   render(){
       return(
           <div>
               <h1>{this.state.message}</h1>
               {/* <button onClick={this.changemessage.bind(this)}>Click here</button>  Using bind to send this keyword as an argument on function call PERFORMANCE ISSUES */}
               {/* <button onClick={() => this.changemessage()}>Click here</button> Using Arrow funtion at funtion call */}
               {/* <button onClick={this.changemessage}>Click here</button> Using Constructor Declaration to use at function call */}
               <button onClick={this.changemessage}>Click here</button> 
           </div>
       )
   } 
}

export default EventHandlers