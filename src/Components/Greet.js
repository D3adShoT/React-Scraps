import React from 'react'

// function greet(){
//     return <h1> Hello there</h1>;
// }
 
const Greet = props => {
    console.log(props)
    return (<div>
        <h1>Hello {props.name} a.ka. {props.heroname}</h1>
        {props.children}
        </div>)
}
export default Greet;
