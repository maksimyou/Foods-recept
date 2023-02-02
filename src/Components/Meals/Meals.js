import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './Meals.css'
function Meals(props) {



    return (
        <div key={props.idMeal} className='container_meals'>
            <div className='meals_content_image_title'>
                <div className='meals_content_image'><img src={props.strMealThumb} /></div>
                <div className='meals_title'>{props.strMeal}</div>
            </div>
            <Link to={`${props.idMeal}`}><Button text={'СМОТРЕТЬ РЕЦЕПТ'} /></Link >

        </div >
    )
}

export default Meals