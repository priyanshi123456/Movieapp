import React from 'react'
import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carddetail from './Carddetail';


function Card() {
  const [popular, setpopular] = useState([]);

  const fetchdata = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3ea55ca58c0c6f8754d69552793c7653"
      )
      .then((response) => {
        // console.log(popular)
        setpopular(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
  <>
   <div className="main">
           <Carousel
            class="relative"
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
          >
            {popular.map((movie) => (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/movie/" + movie.id}
              >
                <div className="image" class="h-[300px]" >
                  <img style={{width:"1200px"}}
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    } `}
                  />
                </div>
                <div class="hidden md:block z-10">
                  <div >
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="overview">{movie ? movie.overview : ""}</div>
                  <div className="runtime" >
                    {movie ? movie.release_date : ""}

                    <span>
                      {movie ? movie.vote_average : ""}
                    </span>
                  </div>
                  
                </div>
              </Link>
            ))}
          </Carousel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {popular.map((item, index) => (
          <Link  to={"/movie/" + item.id} >
          <Carddetail data={item} index={index} />
          </Link>
        ))}
      </div>
          </div>

  
  
  
  
  </>
  )
}

export default Card
