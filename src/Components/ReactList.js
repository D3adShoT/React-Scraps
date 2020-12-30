import React from 'react'

function ReactList() {
    const names = ['clark','diana','bruce']
    const newnames = names.map((names,index) => <h2 key={index}>{index} {names}</h2>)
    return(<div>
        {newnames} 

    </div>)
    
}

export default ReactList