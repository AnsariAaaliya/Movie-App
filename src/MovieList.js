import { Movie } from "./Movie";
import Button from '@mui/material/Button';

export function MovieList({movies ,setMovieList}){
    return(
        <>
        
       <div className="movie-list">
    {movies.map(({name , poster, summary},index)=>(
      <Movie 
      key={index}
      deleteButton={
        <Button     
        onClick={()=>{
            console.log("deletethe movie");
            const deleteIndex =index;
            const remainingMovies =movies.filter((mv, idx)=> deleteIndex !== idx);
            console.log(movies,remainingMovies)
            setMovieList(remainingMovies);   
        }
        } variant="outlined">Delete 
        The Movie</Button>
    }
      
      name={name} 
      poster={poster} 
      summary={summary}
      
      />
      
    ))}

   
    </div>
        </>
    )
}