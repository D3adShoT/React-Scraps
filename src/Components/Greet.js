import React from 'react'

// function greet(){
//     return <h1> Hello there</h1>;
// }
 
const Greet = ({name,heroname}) => { // destructuring at argument
    // const {name,heroname} = props   // destrucuring at methods body
     return (<div>
        <h1>Hello {name} a.ka. {heroname}</h1>  {/*Directly using after destrucuring*/}
        {/* {props.children} */}
        </div>)
}
export default Greet;
