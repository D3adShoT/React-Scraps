import React, { Component } from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    increaseCount(){
        // this.state.count = this.state.count + 1  //this code never re renders to the front end but will be updated in the log.. WE ALWAYS DECLARE STATE DIRECTLY IN CONSTRUCTORS ONLY
        // console.log(this.state.count)
        this.setState((prevState) => ({
            count : prevState.count +1  // when many invokes are called on setstate as in Incrementfive method here. React bundle them up and executes all at once. in order to change state based on the previous state we do this i.e; instantiate the previousState and change accordingly.
        }),() => {console.log('CAll back Value ',this.state.count)})
        console.log(this.state.count)

        
    }
    resetCount(){
        this.setState({
            count : 0
        })
    }
    decreaseCount(){
        this.setState({
            count: this.state.count-1
        },() => {console.log('CAll back Value ',this.state.count)}) // second parameter of setState method is the Call back function. SetState is envoked in async manner so, Console.log on line 25 may execute before but the callback gives the value once the method returns
        console.log(this.state.count)
    }
    incrementfive(){
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()    
    }
    render(){
        return (<div> <h1>Count  - {this.state.count}</h1>
            <button onClick={() => this.increaseCount()}>Increase</button>
            <button onClick={()=> this.resetCount()}>Reset</button>
            <button onClick={() => this.decreaseCount()}>Decrease</button>
            <button onClick={()=> this.incrementfive()}>Increment 5 times</button>
        </div>)
    }
}
export default Counter