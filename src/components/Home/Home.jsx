import React, { useEffect, useState, Component } from "react";
import { Api_Url } from "../Apidata/api";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MovieList from "../MovieList/MovieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios.get(Api_Url).then((response) => {
      console.log(response.data.results);
      setPopularMovies(response.data.results);
    });
  }, []);

  return (
    <>
    <section className="carousel">
    <div className="poster">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        transitionTime={1}
        showStatus={false}
        interval={3000}
        showArrows={true}
        showIndicators={true}
      >
        {popularMovies.map((movie) => (
          <>
          <Link to={`/movie/${movie.id}`}>
            <div className="poster-image">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
                alt=""
              />
            </div>

            <div className="posterImageLayer">
              <div className="details">
                <div className="poster-title">
                  <h1>{movie ? movie.original_title : ""}</h1>
                </div>
                <div className="poster-overview">
                  <p>{movie ? movie.overview.slice(0,200) : ""}</p>
                </div>
                <div className="poster-release-date">
                  <p>{movie ? movie.release_date: ""}</p>
                </div>
                
                <div className="d-flex">
                  <p className="voting">Rating: {movie ? movie.vote_average: ""} <i class="fa-solid fa-star"></i></p>
                  
                </div>
              
              </div>
            </div>
            </Link>
          </>
        ))}
      </Carousel>
    </div>
    </section>
    
    <MovieList/>
  
    </> 
  );
};

export default Home;
