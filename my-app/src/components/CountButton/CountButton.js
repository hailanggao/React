import React, {useState} from "react"
import './CountButton.css'
const CountButton = (props) =>{
    //useState return an array, [defulatValue, stateFunction]
    //is to tell React the currentCount is a state and we want to keep tarack it
    //and re-render it once it updated
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () =>{
        setCurrentCount(currentCount+ props.incrementBy)
    }
    
    const buttonStyles = {
        background: props.buttonColor,
        borderRadius: props.borderRadius
    }

    return <div>
        <button style = {buttonStyles} onClick={handleClick}>
            +{props.incrementBy}
        </button>
        <div className={"count-display"}>{currentCount}</div>
    </div>
}

export default CountButton