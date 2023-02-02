import React, { useEffect, useState } from 'react'
import './FilterCategories.css'
import { useParams, useNavigate } from 'react-router-dom'
import Meals from '../Meals/Meals'
import Loading from '../Loading/Loading'

function FilterCategories() {
    let [loading, setLoading] = useState(false);
    let [meals, setMeals] = useState();
    let { id } = useParams();
    let navigate = useNavigate();
    let result;

    function goBack() {
        return navigate(-1)
    };



    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
            .then(Response => {
                return Response.json()
            })
            .then(text => {
                setMeals(text.meals)
                setLoading(true)
            })
    }, []);


    if (!loading) {
        result = < Loading />
    } else {
        result = meals.map(elem => {
            return <Meals idMeal={elem.idMeal} strMeal={elem.strMeal} strMealThumb={elem.strMealThumb} />
        })
    }


    return (<div className='categoriy_categ_container'>
        <button className='categoriy_button' onClick={goBack} >ВЕРНУТЬСЯ НАЗАД</button>
        <div className='container_mealss'>
            {result}</div>

    </div>
    )
}

export default FilterCategories