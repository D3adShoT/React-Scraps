import React, { Component } from 'react';
import ChildB from './ChildB';

class ChildA extends Component {
    render() {
        return (
            <div>
                <ChildB/>
            </div>
        );
    }
}

export default ChildA;
