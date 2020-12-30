import React, { Component } from 'react';
import {UserConsumer} from './UserContext';
class ChildC extends Component {
    render() {
        //       UserConsumer tag encloses the function which gets the userContext 'value' and here assign it to a child COmponent's variable to render it here. 
        return (<UserConsumer>
            {username => {
                return( <div>{username}</div>) 
            }}
            </UserConsumer>
        );
    }
}

export default ChildC;