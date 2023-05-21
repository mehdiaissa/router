import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({movies,nameSearch,rateSearch}) => {
    
    const search=()=>{
        return movies.filter((film)=>{
            return(
                rateSearch===0?
                film.name.toLowerCase().includes(nameSearch.toLowerCase()):
                Number(film.rating) === rateSearch && film.name.toLowerCase().includes(nameSearch.toLowerCase())
            )
        })
    }
 
 return(<div style={{display: 'flex',flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
   { search().map((movie)=><MovieCard movie={movie} key={movie.id}/>)}
 </div>)
 
     
}

export default MovieList
