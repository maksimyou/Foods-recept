import React from 'react'
import './Search.css'
function Search(props) {


    return (
        <div className='search_container'>
            <div className="search_input_bitton">
                <input onInput={(e) => { props.setSearch(e.target.value) }} className='search_input' placeholder='введите название блюда на английском' />
                <button onClick={(e) => { props.setPath(true); props.setPath(false); }} className='search_button'>ПОИСК</button>
            </div>
        </div>
    )
}

export default Search