import React,{ Component } from 'react'
import Greet from './Components/Greet'

class NewApp extends Component {
    render(){
        return(<div>
            
            <Greet name="clark"/>
            
            <Greet name="bruce"/>
            <Greet name="diana"/>
        </div>
    );
    }
}


export default NewApp;