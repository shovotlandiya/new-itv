import React from 'react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import "./SinglePage.css"

function SinglePage() {

    const { id } = useParams()

    const [post, setPost] = useState([])

    useEffect(() => {
        axios
            .get(`https://api.cinerama.uz/v2/web/content/movie/movie-files?id=${id}&module_id=3`)
            .then(total => {
                setPost(total.data.data)
            })
    }, [id])
    console.log(post);
    return (
        <div >
            {post.map((element) => (
                <>
                    <img className='params__image' src={element.image} alt={element.title} />

                    <span className='params__span'></span>
                </>
            ))
            }


        </div>
    )



}

export default SinglePage





