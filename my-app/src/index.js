import React from 'react'
import ReactDOM from 'react-dom'

const reactContentRoot = document.getElementById("root")
// const myFirstELement = React.createElement(
//     "ul",
//     null,
//     [React.createElement('li', null, 'item1'), 
//     React.createElement('li', null, 'item2'),
//     React.createElement('li', null, 'item3')]
//     )

const App = () =>{
    const myItem = "Gordon"
    return(
        <ul>
            <li>item1</li>
            <li>item2</li>
            <li>{myItem.toUpperCase()}</li>
        </ul>
    )
}

ReactDOM.render(<App />, reactContentRoot)