import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleClick = ()=>{
    window.scrollTo(0, 0);
  }
  return (
    <>
      {isloading ? (
        <div className="cards" highlightColor="#444">
          <SkeletonTheme color="#202020">
            <Skeleton height={300} duration={2}></Skeleton>
          </SkeletonTheme>
        </div>
      ) : (
        <Link onClick={handleClick}
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              className="cards__img  img-fluid"
              src={`https://image.tmdb.org/t/p/original${
                movie && movie.poster_path
              }`}
              alt=""
            />

            <div className="cards__overlay">
              <div className="cards__title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="cards__runtime">
                {movie ? movie.release_date : ""}
                <span className="card__rating">
                  {movie ? movie.vote_average : ""}{" "}
                  <i className="fas fa-star"></i>
                </span>
              </div>
              <div className="cards__description">
                {movie ? movie.overview.slice(0, 118) + "....." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
