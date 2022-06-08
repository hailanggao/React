import React from "react"
import CountButton from "./CountButton/CountButton"
const App = () =>{
    return(
        <div>
            <CountButton incrementBy={1} buttonColor={"blue"} borderRadius={"2px"}/>
            <CountButton incrementBy={5} buttonColor={"red"} borderRadius={"10px"}/>
        </div>
    )
}

export default App