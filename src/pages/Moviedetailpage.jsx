import React, { useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Spa } from "@mui/icons-material";
// import Header from "../components/Header";


function Moviedetailpage() {
  const { id } = useParams();
  const [detail, setdeatils] = useState({});

  const fetchdata = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3ea55ca58c0c6f8754d69552793c7653`
      )
      .then((response) => {
        console.log(response.data);
        setdeatils(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchdata();
  }, [id]);

  let arrr = detail.genres;
  return (
    <>
    <div class="flex">
        <div class="w-[15%] z-10">
          <Sidebar />
        </div>
        <div class="w-[85%] relative top-0" >
        <Header />
        <div className="w-[100%]"></div>
      <div class=" flex flex-col items-center ">
        <div className="image">
          <img
            class="w-[80%] md:w-[50%] mx-auto block"
            src={`https://image.tmdb.org/t/p/original${detail.backdrop_path} `}
          />
        </div>
        <div class="text-white text-center mt-9">
          <h1>{detail.title}</h1>
          <h2>{detail.release_date}</h2>
          {detail.genres && arrr.map((item)=><span className="pl-7">{item.name}</span>)}
          <p className="ml-0 md:w-[100%] ml-43">{detail.overview}</p>
        </div>
      </div>
      </div>
        </div>

    </>
  );
}

export default Moviedetailpage;
