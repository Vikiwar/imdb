import { useState } from "react"
import React from 'react'
import Pagination from "./Pagination.jsx";
import MovieCard from "./MovieCard.jsx";

const Movies = () => {
    const [movies, setMovies] = useState([

        {url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_e", title: "movie1"},
        {url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_e", title: "movie2"},
        {url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_e", title: "movie3"}, 
        {url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_e", title: "movie4"}, 
        {url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_e", title: "movie5"}, 
        {url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_e", title: "movie6"}, 
        {url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_e", title: "movie7"},    
    ]);

    const [page, setPage] = useState(1);

    const handleNext=()=>{
        setPage(page+1)
    }
    const handlePrev=()=>{
        if(page == 1){
            setPage(page);

        }else{
            setPage(page-1);
        }
    }



  return (
    <div>
        <div className="text-2xl font-bold text-center m-5">
            <h1> Tremding movies</h1>
        </div>

        <div className="flex flex-wrap justify-evenly gap-8">
            {movies.map((movieobj)=>{
                return <MovieCard movieobj={movieobj} />
                    
                
            })}
        </div>
        <Pagination
        nextPageFn={handleNext}
        prevPageFn={handlePrev}
        page={page}
        />
        
    </div>
  )
}

export default Movies