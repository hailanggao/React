import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar=(props)=>{
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () =>{
        setSearchValue("")
    }

    //.filter(() => {})
    //once state changed, the whole SearchBar function will re-excute 
    //so filterProducts changes as well
    const filterProducts = props.products.filter((product) => {
        return product.includes(searchValue)
    })

    const shouldDisplayButton = searchValue.length > 0
    console.log(shouldDisplayButton)
    return <div>
        <input type="text" value={searchValue} onChange={handleInputChange}/>
        {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
        <ul>
            {filterProducts.map((product) => { 
                return <li key={product}>{product}</li>
            })
            }  
        </ul>    
    </div>
}

export default SearchBar
