import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

import './Cards.css'
function Cards(props) {


    return (
        <div key={props.idCategory} className='container_card'>
            <div className='card_content_image_title'>
                <div className='card_content_image'><img src={props.strCategoryThumb} /></div>
                <div className='card_content_stitle'>
                    <div className='card_title'>{props.strCategory}</div>
                    <div className='card_text'>{props.strCategoryDescription.slice(0, 75) + '...'}</div>
                </div>
            </div>
            <Link to={`./${props.strCategory}`}><Button text={'СМОТРЕТЬ КАТЕГОРИЮ'} /></Link >

        </div >
    )


}

export default Cards





