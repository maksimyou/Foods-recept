import React from 'react'
import './Button.css'
function Button(props) {

    return (
        <div className='card_button_container'>
            <button className='card_button' >{props.text}</button>
        </div>
    )
}

export default Button