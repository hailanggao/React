import React from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
const App = () =>{
    return(
        <div>
            <CountButton incrementBy={1} buttonColor={"blue"} borderRadius={"2px"}/>
            <CountButton incrementBy={5} buttonColor={"red"} borderRadius={"10px"}/>
            <SearchBar />
        </div>
    )
}

export default App