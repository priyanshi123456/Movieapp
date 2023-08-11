import { Hidden } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Searchlist({input}) {
  const [isclosed , setclosed] = useState(true)

  const closed = (()=>{
    setclosed(false)
  })
  return (
    
      <div class={isclosed? "bg-black  text-white text-center ml-[20%] list-none z-10 absolute mt-3 overflow-y-auto h-52" : "hidden"}>
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