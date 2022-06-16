import React from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

const products = [
    "tooth paste",
    "tooth brush0",
    "mouth wash",
    "dental floss",
    "mouth guard"
]

const App = () =>{
    return(
        <div>
            <CountButton incrementBy={1} buttonColor={"blue"} borderRadius={"2px"}/>
            <CountButton incrementBy={5} buttonColor={"red"} borderRadius={"10px"}/>
            <SearchBar products={products} />
        </div>
    )
}

export default App