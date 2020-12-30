import React, { Component } from 'react';
import ChildA from './ChildA';

class ParentComp extends Component {
    render() {
        return (
            <div><ChildA/>
                
            </div>
        );
    }
}

export default ParentComp;