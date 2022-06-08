import React, {useState} from "react"

const CountButton = () =>{
    //useState return an array, [defulatValue, stateFunction]
    //is to tell React the currentCount is a state and we want to keep tarack it
    //and re-render it once it updated
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () =>{
        setCurrentCount(currentCount+1)
    }
    
    console.log("Component re-rendered")
    return <div>
        <button onClick={handleClick}>
            +1
        </button>
        <div>{currentCount}</div>
    </div>
}

export default CountButton