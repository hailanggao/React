import React, {useState, useEffect} from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

const App = () =>{

    const [productsState, setProductsState] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productArray) => {
                const newProductsState = productArray.map((product) => {
                    return product.title
                })
                setProductsState(newProductsState)
            })
        // setTimeout(()=>{
        //     console.log("Time out")
        //     setProductsState( [
        //         "tooth paste",
        //         "tooth brush0",
        //         "mouth wash",
        //         "dental floss",
        //         "mouth guard"
        //     ])
        // }, 2000)
    }, [productsState])

    const hasProducts = productsState.length > 0
    return(
        <div>
            {/*<CountButton incrementBy={1} buttonColor={"blue"} borderRadius={"2px"}/>
            <CountButton incrementBy={5} buttonColor={"red"} borderRadius={"10px"}/>
            <SearchBar products={productsState} />*/}
            {hasProducts ? <SearchBar products={productsState} /> : "Loading..."}
        </div>
    )
}

export default App