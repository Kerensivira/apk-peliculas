import React from 'react'

fetch ('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1')
.then (response => response.json())
.then (data => console.log(data))
.catch (error => console.log(error))

// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
// const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
// const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

function Pelis(){

return(
    <Pelis/>
)

}


export default Pelis;