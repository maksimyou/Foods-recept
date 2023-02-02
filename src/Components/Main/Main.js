import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './Main.css'
import Search from '../Search/Search'
import Cards from '../Cards/Cards'
import Loading from '../Loading/Loading'
import SearchRes from '../SearchRes/SearchRes'
function Main() {

    let [categories, setCategories] = useState();
    let [searchRes, setSearchRes] = useState();
    let [error, setError] = useState();
    let [search, setSearch] = useState('s');
    let [loading, setLoading] = useState(false);
    let [switchh, setSwitchh] = useState(false);
    let [path, setPath] = useState(true);

    let result;

    //www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    useEffect(() => {
        path ? getFetchSearch() : getFetchSearch2();
    }, [path]);

    function getFetchSearch() {
        setLoading(false);
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(Response => {
                if (Response.ok) {
                    return Response.json();
                }
                throw Response;
            })
            .then(text => {
                setCategories(text.categories);
                setLoading(true);
            }
            )

    };

    function getFetchSearch2() {
        setLoading(false);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(Response => {
                if (Response.ok) {
                    return Response.json();
                }
                throw Response;
            })
            .then(text => {
                setSearchRes(text.meals);
                setSwitchh(true);
                setLoading(true);
                setPath(true);
            }
            )

    };


    if (!loading) {
        result = < Loading />
    } else if (!switchh) {
        result = categories.map(elem => {
            return <Cards idCategory={elem.idCategory} strCategoryThumb={elem.strCategoryThumb} strCategory={elem.strCategory} strCategoryDescription={elem.strCategoryDescription} />
        })
    } else {
        result = <SearchRes loading={loading} searchRes={searchRes} />
    }





    return (
        <div className='main_container'>
            <div className='main_content'>
                <Search setSearch={setSearch} setPath={setPath} />
                <div className='container_cards'>{result}</div>
            </div>

        </div>
    )
}

export default Main