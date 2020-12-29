import React,{ Component } from 'react'
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'


class NewApp extends Component {
    render(){
        return(<div>
            
            <Greet name="clark" heroname="superman"><p>SuperMan's Child</p></Greet>
            <Greet name="bruce" heroname="batman"><p>Batman's Child</p></Greet>
            <Greet name="diana" heroname="Wonder Women"><p>Wonder Women's Child</p></Greet>
            <Welcome name="clark" heroname="superman"/>
            <Welcome name="bruce" heroname="batman"/>
            <Welcome name="diana" heroname="Wonder Women"/>
        </div>
    );
    }
}


export default NewApp;