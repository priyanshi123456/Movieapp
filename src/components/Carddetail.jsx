import React from 'react'
import Card from './Card'

function Carddetail(props) {
  return (
    <>
    <div class="pt-9 group relative p-4 bg-gray-30">
        <div class="card" className="cards">
          <div class="card-body">
            <img
              class="w-full h-auto"
              src={`https://image.tmdb.org/t/p/original${props.data.backdrop_path} `}
            />
            <div class="hidden group-hover:block absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white pt-12 pl-9">
              <h5  class="text-white">
                {props.data.original_title}
              </h5>
              {/* <div >{props.data.overview}</div> */}
              <p class="text-white">{props.data.release_date}</p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Carddetail
