import { cleanup } from '@testing-library/react'
import React, {useEffect, useState} from 'react'



// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
// const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
// const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

function Pelis(){
    
const [Movies, setMovies] = useState([]);

    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

const fetchCatalogo = (url) =>  {

    fetch (url)
.then (response => response.json())
.then (data => setMovies(data.results))
.catch (error => console.log(error))

};

useEffect (() => {
    
    fetchCatalogo(url);

}, [])

return(
    <Pelis/>
)

}


export default Pelis;