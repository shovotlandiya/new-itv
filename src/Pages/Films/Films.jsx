import React from 'react'
import "./Films.css"
import { useEffect, useState } from "react"
import axios from "axios"


function Films() {
    const [api, setApi] = useState([])
    const getApi = () => {
        axios.get("https://api.cinerama.uz/v2/web/content/movies/list?items=30&module_id=3")
            .then(response => {
                console.log(response);
                const myApi = response.data.data.movies
                setApi(myApi)

            })
            

    }
    console.log(api);
    useEffect(() => getApi(), [])
    return (
        <div className='film'>
                <h1>Фильмы</h1>
            <div className='container'>
                {
                   api.map((element)=>(
                    <ul className='film__list'>
                        <li className='film__item'  key={element.id}>
                        
                        <img className='film__image' src={element.poster} alt={element.titleEn} />
                        <p>{element.title}</p>
                        
                    </li>
                    </ul>
                   )) 
                }
            </div>
        </div>
    )
}

export default Films
