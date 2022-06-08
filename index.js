const reactContentRoot = document.getElementById("root")
// const myFirstELement = React.createElement(
//     "ul",
//     null,
//     [React.createElement('li', null, 'item1'), 
//     React.createElement('li', null, 'item2'),
//     React.createElement('li', null, 'item3')]
//     )

const myJSXElement = (
    <ul>
        <li>item1</li>
        <li>item2</li>
    </ul>

)

ReactDOM.render(myJSXElement, reactContentRoot)