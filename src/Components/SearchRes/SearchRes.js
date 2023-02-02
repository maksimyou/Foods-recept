import React, { useState } from 'react'
import './SearchRes.css'
import Loading from '../Loading/Loading'

function SearchRes(props) {
    let [ditail, setDitails] = useState(props.searchRes);

    //setDitails(props.searchRes)
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
            props.loading ? <>
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
        }</div >
    )

}

export default SearchRes