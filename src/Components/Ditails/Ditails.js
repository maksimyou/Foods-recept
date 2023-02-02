import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'
import './Ditails.css'

function Ditails() {
    let navigate = useNavigate()
    let [ditail, setDitails] = useState({});
    let [loading, setLoading] = useState(false);
    let { ditails } = useParams();
    let result;


    function goBack() {
        return navigate(-1)
    };



    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ditails}`)
            .then(Response => {
                return Response.json()
            })
            .then(text => {
                setLoading(true)
                setDitails(text.meals)
            })
    }, []);

    let ingred = [];
    let num = 1;
    for (const key in ditail[0]) {
        if (/^strIngredient?/.test(key)) {
            ingred.push([ditail[0][key], ditail[0][`strMeasure${num}`]])
            num++;
        };
    }

    return (
        <div className='ditails_container_cont'>{
            loading ? <>
                <div className='container_ditails'>

                    <div className='image_ditails'><img src={ditail[0].strMealThumb} /></div>
                    <h1 className='title_ditails'>{ditail[0].strMeal}</h1>
                    <div className='category_ditails'>Категория: {ditail[0].strCategory}</div>
                    <div className='category_city'>Страна: {ditail[0].strArea}</div>
                    <div className='instructions_ditails'>{ditail[0].strInstructions}</div>
                    <table className='table_ditails'>
                        <thead className='table_thead_ditails'>
                            <tr className="row_table"><td>Ингредиент</td><td>Мера</td></tr>
                        </thead>
                        <tbody>
                            {ingred.map(elem => {
                                if (elem[0]) {
                                    return <tr className="row_table"><td>{elem[0]}</td><td>{elem[1]}</td></tr>
                                }
                            })}
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                    <div className="video_recepts">Видео рецепт</div>
                    <div><iframe className='youtube_container' src={ditail[0].strYoutube.replace(/watch\?v=?/g, 'embed/')} frameBorder="0" allowFullScreen></iframe></div>

                </div>

            </> :
                < Loading />
        }
            <div className="ditails_button_container"><button className='ditails_button' onClick={goBack} >ВЕРНУТЬСЯ НАЗАД</button></div>
        </div >
    )
}

export default Ditails


