import React from 'react'
import "./Films.css"
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"


function Films() {
    const [api, setApi] = useState([])

    const [count, setCount] = useState(30)
    const getApi = (count) => {
        axios.get(`https://api.cinerama.uz/v2/web/content/movies/list?items=${count}&module_id=3`)
            .then(response => {
                const myApi = response.data.data.movies
                setApi(myApi)


            })
    }

    useEffect(() => {

    })
    useEffect(() => getApi(count), [count])
    const usingButton = () => {
        setCount(p => p + 60)


    }
    return (
        <div className='film'>
            <div className='container'>

                <h1 className='film__title'>

                    Фильмы</h1>

                <ul className='film__list'>
                    {
                        api.map((element) => (
                            <NavLink className="title" to={`/film/${element.id}`}>
                                <li className='film__item' key={element.id}>
                                    <img className='film__image' src={element.poster} alt={element.titleEn} />
                                    <span className='span'></span>
                                    <p className='film__text'>{element.title}</p>
                                </li>
                            </NavLink>
                        ))
                    }
                </ul>

                <button onClick={usingButton} className='film__btn'>Показать больше</button>

            </div>
        </div>
    )
}

export default Films
