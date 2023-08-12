import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Searchlist({input}) {
  const [isclosed , setclosed] = useState(true)

  const closed = (()=>{
    setclosed(false) //Toggle the isclosed state
    input = null
  })
  return (
    
      <div class={input.length>0 &&isclosed? "bg-black  text-white text-center ml-[30%] list-none z-10 absolute mt-1 overflow-y-auto h-52 w-[40%]" : "hidden"}>
       {
        input.map((movie)=>(
          <li key={movie.id}>
          <Link onClick={closed} className='text-sm' to={`/movie/${movie.id}`}>{movie.title} </Link>
        </li>
        ))
        
       }

      </div>
    
  )
}

export default Searchlist