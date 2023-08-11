import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Carddetail from '../components/Carddetail';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function Topratedpage() {
  const [popular, setpopular] = useState([]);

  const fetchdata = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=3ea55ca58c0c6f8754d69552793c7653"
      )
      .then((response) => {
        console.log(response.data);
        setpopular(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <Header />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {popular.map((item, index) => (
          <Link  to={"/movie/" + item.id} >
          <Carddetail data={item} index={index} />
          </Link>
        ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Topratedpage
