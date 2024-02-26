import React, { useEffect, useState } from 'react'
import { Card } from '../componenets/index'

const MovieList = () => {
  const [movie,setMovie]=useState([]);
  useEffect(()=>{
    const movieResponse=async()=>{
      const response=await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=aead2373813b29cd09bf2e776f9de2ee");
      const responseJson=await response.json();
      setMovie(responseJson.result)
    }
    movieResponse()
  },[])
  return (
    <div className='flex justify-between flex-wrap gap-3'>
        {
          movie.map((movie)=>{
            <Card/>
          })
        }
    </div>
  )
}

export default MovieList