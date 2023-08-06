import React, { useEffect, useState } from 'react'
import './MovieList.css'
import { useParams } from 'react-router-dom'

import axios from "axios";
import Card from '../card/Card';


const MovieList = () => {

  const[movieList,setMovieList]= useState([]);
  const {type} = useParams();


  useEffect(()=>{
    getData()

  },[])

  useEffect(()=>{
    getData()

  },[type])

  const getData = ()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=e34b3055be80cd9c259f1c4fb6322943`).then((response) => {
      console.log(response.data.results);
      setMovieList(response.data.results);
    });

  }


  return (

    <div className='movie_list container-fluid'>
      <h2 className="list_title text-start">
        {(type? type : 'popular').toUpperCase()}
      </h2>

     
      
          <div className="row list_cards pt-4 d-flex align-item-center text-center">
            {movieList.map((movie)=>(
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-10 align-item-center">
               <Card movie={movie}/>
               </div>
              ))}

          </div>

    </div>
  )
}

export default MovieList