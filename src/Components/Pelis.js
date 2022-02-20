import React, { useEffect, useState } from "react";

// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
 const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
// const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

export function Pelis() {
  const [movies, setMovies] = useState([]);

  const url =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

  const fetchCatalogo = async (url) => {
    const respuesta = await fetch(url);

    const data = await respuesta.json();
    console.log(data);
    setMovies(data.results);
  };

console.log(movies);

  useEffect(() => {
    fetchCatalogo(url);
  }, []);

  return (
  <div className="container">
{
    movies.map(el => (
        
        <div key={el.id}>
            <img src = {IMG_PATH + el.poster_path} alt = ''/>
            <h3>{el.title}</h3>
            </div>
    ))
}
  </div>
  )
}
