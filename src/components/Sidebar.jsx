import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsLaptopFill } from "react-icons/bs";
import {
  MdUpcoming,
  MdAnimation,
  MdTheaterComedy,
  MdOutlineOtherHouses,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { GiExtractionOrb } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Sidebar() {
  const [sidebar, setsidebar] = useState(false);
  const handleclick = () => {
    setsidebar(!sidebar);
  };
  return (
    <>
      {/* Hamburger */}
      <div class="md:hidden sm:block w-15 pl-6 bg-black ml-3">
        <GiHamburgerMenu style={{color:"white"}} onClick={handleclick} />
      </div>
      <div class={sidebar?"block  py-[27px] pl-[33px] bg-black w-screen pr-6":"hidden md:block py-[27px] pl-[10px] bg-black h-screen"}>
        <div>
          <h1 class="flex text-6xl text-white">CI</h1>
        </div>
        <p class="pt-[33px] font-semibold  text-white">Categories</p>
        <div class="flex font-semibold pt-6 text-white ">
          <BsLaptopFill style={{ width: "29px", height: "24px" }} />
          <Link to={"/popular"} class="active">
            Popular
          </Link>
        </div>
        <div class="flex  font-semibold pt-6  text-white">
          <AiFillStar style={{ width: "29px", height: "24px" }} />
          <Link to={"/toprated"} class="active">
            toprated
          </Link>
        </div>
        <div class="flex font-semibold pt-6  text-white">
          <MdUpcoming style={{ width: "29px", height: "24px" }} />
          <Link to={"/upcoming"} class="active">
            upcomming
          </Link>
        </div>
        <div class="flex font-semibold pt-6  text-white ">
          <GiExtractionOrb style={{ width: "29px", height: "24px" }} />
          <Link to={"/popular"} class="active">
            action
          </Link>
        </div>
        <div class="flex font-semibold pt-6  text-white ">
          <AiFillStar style={{ width: "29px", height: "24px" }} r />
          <Link to={"/toprated"} class="active">
            adventure
          </Link>
        </div>
        <div class="flex font-semibold pt-6 text-white ">
          <MdAnimation style={{ width: "29px", height: "24px" }} />
          <Link to={"/upcoming"} class="active">
            animation
          </Link>
        </div>
        <div class="flex font-semibold pt-6  text-white ">
          <MdTheaterComedy style={{ width: "29px", height: "24px" }} />
          <Link to={"/upcoming"} class="active">
            comedy
          </Link>
        </div>
        <div class="flex font-semibold pt-6  text-white">
          <MdOutlineOtherHouses style={{ width: "29px", height: "24px" }} />
          <Link to={"/upcoming"} class="active">
            other
          </Link>
        </div>
      </div>

      {/* For mobile */}
      <div class={sidebar?"hidden":"sm:block w-18 bg-black h-screen md:hidden text-center pt-9"}>
        <BsLaptopFill style={{ width: "20px", height: "20px", color:"white"}} />
        <AiFillStar style={{ width: "29px", height: "24px", color:"white",marginTop:"20px" }} />
        <MdUpcoming style={{ width: "29px", height: "24px", color:"white",marginTop:"20px" }} />
        <GiExtractionOrb style={{ width: "29px", height: "24px", color:"white",marginTop:"20px" }} />
        <MdAnimation style={{ width: "29px", height: "24px", color:"white",marginTop:"20px" }} />
        <MdTheaterComedy style={{ width: "29px", height: "24px", color:"white",marginTop:"20px" }} />
        <MdTheaterComedy style={{ width: "29px", height: "24px" , color:"white",marginTop:"20px"}} />
        <MdOutlineOtherHouses style={{ width: "29px", height: "24px" , color:"white",marginTop:"20px"}} />
      </div>
    </>
  );
}

export default Sidebar;
