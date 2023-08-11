import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";

function Homepage() {
  return (
    <>
      <div class="flex">
        <div class="w-[15%] z-10">
          <Sidebar />
        </div>
        <div class="w-[85%] relative top-0" >
        <Header />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Homepage;
