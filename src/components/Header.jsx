import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { PiUserCircleLight } from "react-icons/pi";
import { useState, useEffect } from "react";
import axios from "axios";
import Searchlist from "./Searchlist";
import { Navigate, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  const [input, setinput] = useState("");
  const [search, setSearch] = useState("");
  const [isclicked, setclicked] = useState(false);
  const fetchdata = (value) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=3ea55ca58c0c6f8754d69552793c7653&query=${value}`
      )
      .then((response) => {
        // console.log(response.data)
        setinput(response.data.results);
      })
      .catch((error) => console.log(error));
  };
  const navigatelogin =(()=>{
    navigate('/')
  })

  useEffect(() => {
    fetchdata(search);
  }, [search]);

  return (


    <>
      <nav class="bg-black h-[60px]">
        <div class="flex justify-between items-center pt-3 ">
          <div>
            <AiFillSetting class="hidden md:block fill-[white] h-5 w-6" />
          </div>
          <div class="flex">
            <input class='bottom-0 w-[92px] outline-none rounded-3xl p-1 md:w-[150px] ' placeholder="search" type="search"  onChange={(e) => setSearch(e.target.value)} />
            <button class="sm:hidden md:block text-white pl-4">search</button>
          </div>
          <div class="flex">
            <span class="hidden md:block text-white">Login</span><PiUserCircleLight onClick={navigatelogin} class="fill-[white] h-6 w-8" />
          </div>
        </div>
      </nav>
      {input && <Searchlist input={input} />}
    </>
  );
}

export default Header;
