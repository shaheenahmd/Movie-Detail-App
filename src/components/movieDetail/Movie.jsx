import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Movie.css'

const Movie = () => {

const[currentMovieDetails,setMovie]= useState();
const {id} = useParams();

useEffect(()=>{
  getData();

},[])

const getData = ()=> {
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e34b3055be80cd9c259f1c4fb6322943`)
  .then(res=> res.json())
  // .then(data=> console.log(data))
  .then(data=> setMovie(data))
}


  return (

    <div className='movie'>

      <h1>{currentMovieDetails? currentMovieDetails.original_title :''}</h1>

      <div className="image">
        <img src={`https://image.tmdb.org/t/p/original${currentMovieDetails? currentMovieDetails.backdrop_path : ""}`} alt="" className='img-fluid'/>
      </div>
      
      <div className="">
        <p>{currentMovieDetails? currentMovieDetails.original_title :''}</p>
      </div>
    </div>

  )
}

export default Movie