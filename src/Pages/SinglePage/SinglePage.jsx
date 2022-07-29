import React from 'react'
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
// import axios from "axios"

function SinglePage() {
    const {id}=useParams()
    const [post,setPost]=useState([])
    useEffect(()=>{
        fetch(`https://api.cinerama.uz/v2/web/content/movies/list?items=30&module_id=3/${id}`)
        .then(res=>res.json())
        .then(data=>setPost(data.data.movies))
    },[id])
    console.log(post);
    return (
        <div>
          
          {post.map(a=>(
            <>
            
            <h1>{a.title}</h1>
            </>
          ))
          
          }
            
            
        </div>
        
    )
}

export default SinglePage
